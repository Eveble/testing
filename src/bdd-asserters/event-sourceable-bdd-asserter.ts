import { isEqual, omit } from 'lodash';
import delay from 'delay';
import {
  Command,
  Event,
  Commit,
  CommitReceiver,
  ExtendableError,
  ScheduleCommand,
  UnscheduleCommand,
  EvebleTypes,
  kernel,
  BINDINGS,
  Assignment,
  Guid,
} from '@eveble/eveble';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import {
  METADATA_KEY,
  interfaces as inversifyTypes,
} from '@parisholley/inversify-async';
import { types } from '../types';
import { InvalidMessageError } from '../errors';
import { evebleChai } from '../chai-assertions/eveble-chai-assertion';
import { Scenario } from '../components/scenario';

type Mappings = Record<keyof any, inversifyTypes.Metadata[]>;

chai.use(evebleChai);
chai.use(chaiAsPromised);

export class EventSourceableBDDAsserter<EventSourceable>
  implements types.EventSourceableBDDAsserter<EventSourceable>
{
  protected scenario: Scenario<EventSourceable>;

  protected queue: EvebleTypes.Message[];

  protected actual: {
    events: EvebleTypes.Event[];
    scheduledCommands: EvebleTypes.Command[];
    unscheduledCommands: EvebleTypes.Command[];
  };

  protected expected: {
    events: EvebleTypes.Event[];
    scheduledCommands: EvebleTypes.Command[];
    unscheduledCommands: EvebleTypes.Command[];
    state?: EvebleTypes.Props;
  };

  protected originalFillErrorProps: Function;

  protected test?: () => Promise<void>;

  protected ignoreNextEvent?: boolean;

  /**
   * Creates an instance of `EventSourceableBDDAsserter`.
   * @param scenario - Instance of `Scenario`.
   */
  constructor(scenario: Scenario<EventSourceable>) {
    this.scenario = scenario;

    this.queue = [];
    this.actual = {
      events: [],
      scheduledCommands: [],
      unscheduledCommands: [],
    };
    this.expected = {
      events: [],
      scheduledCommands: [],
      unscheduledCommands: [],
    };

    this.overrideExtendableErrorFillErrorPropsMethod();
  }

  /**
   * Returns scenario
   * @returns `EventSourceable` type constructor.
   */
  public getScenario(): Scenario<EventSourceable> {
    return this.scenario;
  }

  /**
   * Returns queue as array of `Messages` that will be send to application.
   * @return List of queued instances of `Message`.
   */
  public getQueue(): EvebleTypes.Message[] {
    return this.queue;
  }

  /**
   * Returns array of expected Events.
   * @return List of expected instances of `Event`.
   */
  public getExpectedEvents(): EvebleTypes.Event[] {
    return this.expected.events;
  }

  /**
   * Returns array of published Events.
   * @return List of actually published instances of `Event`.
   */
  public getPublishedEvents(): EvebleTypes.Event[] {
    return this.actual.events;
  }

  /**
   * Returns array of scheduled commands.
   * @return List of actually scheduled commands.
   */
  public getScheduledCommands(): EvebleTypes.Command[] {
    return this.actual.scheduledCommands;
  }

  /**
   * Returns array of expected scheduled commands.
   * @return List of expected scheduled commands.
   */
  public getExpectedScheduledCommands(): EvebleTypes.Command[] {
    return this.expected.scheduledCommands;
  }

  /**
   *
   * Returns array of unscheduled commands.
   * @return List of actually unscheduled commands.
   */
  public getUnscheduledCommands(): EvebleTypes.Command[] {
    return this.actual.unscheduledCommands;
  }

  /**
   * Returns array of expected unscheduled commands.
   * @return List of expected unscheduled commands.
   */
  public getExpectedUnscheduledCommands(): EvebleTypes.Command[] {
    return this.expected.unscheduledCommands;
  }

  /**
   * Describes the state **before** testing the behavior specified in this scenario(i.e.
   * **pre-conditions** to the test).
   * @async
   * @param messages - List of instances implementing `Message` interface.
   * @return Promise of `this` instance.
   */
  public async given(messages: EvebleTypes.Message[] = []): Promise<this> {
    if (messages === undefined) {
      return this;
    }
    const normalizedMessages = Array.isArray(messages) ? messages : [messages];

    const commands: EvebleTypes.Command[] = [];
    const events: EvebleTypes.Event[] = [];

    for (const message of normalizedMessages) {
      if (message instanceof Command) {
        commands.push(message);
      } else if (message instanceof Event) {
        events.push(message);
      } else {
        throw new InvalidMessageError(kernel.describer.describe(message));
      }
    }

    if (events.length > 0) {
      const eventSourceableId = events[0].sourceId;
      const version = events[0].version !== undefined ? events[0].version : 1;

      const commit = await this.createCommit(
        eventSourceableId,
        version,
        events
      );
      const commitStore = await this.scenario
        .getApp()
        .injector.getAsync<EvebleTypes.CommitStore>(BINDINGS.CommitStore);

      await commitStore.save(commit);
    }

    if (commands.length > 0) {
      // We just send the commands through the app and let it handle the creation and saving of the aggregate
      this.queue = this.queue.concat(commands);
    }

    return this;
  }

  /**
   * The behavior that test scenario specifies. Adds message(s) that will be send
   * to application.
   * @async
   * @param messages - List of instances implementing `Message` interface.
   * @return Promise of `this` instance.
   */
  public async when(messages: EvebleTypes.Message[] = []): Promise<this> {
    this.queue = this.queue.concat(messages);
    return this;
  }

  /**
   * Adds scheduled commands that will be resolved immediately with application.
   * @async
   * @param commands - Instances implementing `Command` interface that should be
   * scheduled in testing scenario.
   * @return Promise of `this` instance.
   */
  public async schedules(commands: EvebleTypes.Command[] = []): Promise<this> {
    const normalizedCommands = Array.isArray(commands) ? commands : [commands];

    for (const command of normalizedCommands) {
      const assignment = new Assignment({
        assignmentId: command.targetId,
        deliverAt: new Date(),
        assignerId: command.targetId,
        assignerType: this.scenario.getSUT().getTypeName(),
      });
      command.schedule(assignment);
    }

    this.expected.scheduledCommands =
      this.expected.scheduledCommands.concat(normalizedCommands);

    const commandBus = await this.scenario
      .getApp()
      .injector.getAsync<EvebleTypes.CommandBus>(BINDINGS.CommandBus);
    const boundHandler = this.onScheduleCommandSend.bind(this);
    boundHandler.original = this.onScheduleCommandSend;
    commandBus.onSend('on-scheduled-command', boundHandler, true);
    return this;
  }

  /**
   * Adds commands types that will be removed from scheduled queue thus will never be
   * send to application.
   * @async
   * @param commands - Instances implementing `Command` interface that should be
   * unscheduled in testing scenario.
   * @return Promise of `this` instance.
   */
  public async unschedules(
    commands: EvebleTypes.Command[] = []
  ): Promise<this> {
    const normalizedCommands = Array.isArray(commands) ? commands : [commands];

    for (const command of normalizedCommands) {
      this.expected.unscheduledCommands.push(command);
    }
    const commandBus = await this.scenario
      .getApp()
      .injector.getAsync<EvebleTypes.CommandBus>(BINDINGS.CommandBus);

    const boundHandler = this.onUnscheduleCommandSend.bind(this);
    boundHandler.original = this.onUnscheduleCommandSend;
    commandBus.onSend('on-unschedule-command', boundHandler, true);
    return this;
  }

  /**
   * @async
   * Executes test.
   */
  public async execute(): Promise<types.Result<EventSourceable>> {
    this.test = async (): Promise<void> => {
      await this.sendMessagesThroughApp();
      if (this.hasExpectedScheduledCommands()) {
        // Since CommandScheduler runs scheduled jobs in interval, we need to wait enough amount of time
        // till the job will actually be triggered and then processed on CommandScheduler
        const commandScheduler = await this.scenario
          .getApp()
          .injector.getAsync<EvebleTypes.CommandScheduler>(
            BINDINGS.CommandScheduler
          );
        const interval = commandScheduler.getInterval();
        await this.delay(interval * 2 + 500);
      }
    };
    await this.run();
    const result: types.Result<EventSourceable> = {
      events: this.actual.events,
      scheduled: this.actual.scheduledCommands,
      unscheduled: this.actual.unscheduledCommands,
    };
    if (this.scenario.options?.targetId !== undefined) {
      result.target = await this.resolveActualTargetState(
        this.scenario.options.targetId
      );
    }
    return result;
  }

  /**
   * Resolves actual target state.
   * @async
   * @param id - Instance of `Guid` or `string`.
   * @returns Instance of `<EventSourceable>`, else `undefined`.
   */
  protected async resolveActualTargetState(
    id: string | Guid
  ): Promise<EventSourceable | undefined> {
    const repository = this.scenario
      .getApp()
      .injector.get<EvebleTypes.EventSourceableRepository>(
        BINDINGS.EventSourceableRepository
      );
    const foundInstance = await repository.find(
      this.scenario.getSUT(),
      id.toString()
    );

    if (foundInstance !== undefined) {
      this.removeDependencies(foundInstance);
      return foundInstance as EventSourceable;
    }
    return undefined;
  }

  /**
   * Returns event type name list.
   * @param events - List of `Events`.
   * @returns List with all event type names.
   */
  protected getEventTypeNameList(events: EvebleTypes.Event[]): string[] {
    const list: string[] = [];
    for (const event of events) {
      list.push(event.getTypeName());
    }
    return list;
  }

  /**
   * Removes dependencies from Event Sourceable.
   * @param sutInstance - Instance of `EventSourceable`.
   */
  protected removeDependencies(sutInstance: EvebleTypes.EventSourceable): void {
    const mappings: Mappings = Reflect.getMetadata(
      METADATA_KEY.TAGGED_PROP,
      sutInstance.constructor
    );
    if (mappings) {
      for (const [key, metadatas] of Object.entries(mappings)) {
        for (const metadata of metadatas) {
          if (metadata.key === 'inject') {
            delete sutInstance[key];
          }
        }
      }
    }
  }

  /**
   * Evaluates if test includes any expected scheduled commands.
   * @returns Returns `true` if test includes scheduled commands, else `false`.
   */
  public hasExpectedScheduledCommands(): boolean {
    return this.getExpectedScheduledCommands().length > 0;
  }

  /**
   * Callback for published events on `EventBus`.
   * @param actualPublishedEvent - Instance implementing `Event` interface that was published
   * on application through `EventBus`.
   */
  public onPublishedEvent(actualPublishedEvent: EvebleTypes.Event): void {
    if (!this.ignoreNextEvent) {
      this.actual.events.push(actualPublishedEvent);
    } else {
      this.ignoreNextEvent = false;
    }
  }

  /**
   * Hook for making scheduled command deliverable instantly on CommandBus.
   * @param actualSendCommand - Instance implementing `Command` interface.
   */
  public onScheduleCommandSend(actualSendCommand: EvebleTypes.Command): void {
    for (const expectedCommand of this.getExpectedScheduledCommands()) {
      if (actualSendCommand instanceof ScheduleCommand) {
        const actualScheduleCommand = actualSendCommand;
        const actualCommand = actualScheduleCommand.command;
        const assignment = actualCommand.getAssignment() as Assignment;
        if (this.isSameMessage(actualCommand, expectedCommand)) {
          // Scheduling metadata is used on handling message at EventSourceable.prototype.handle
          const deliverAt = new Date(new Date().getTime() - 1000);
          assignment.deliverAt = deliverAt;
          this.actual.scheduledCommands.push(actualCommand);
        }
      }
    }
  }

  /**
   * Hook for adding unscheduled commands on system under test.
   * @param actualSendCommand - Instance implementing `Command` interface.
   */
  public onUnscheduleCommandSend(actualSendCommand: EvebleTypes.Command): void {
    if (actualSendCommand instanceof UnscheduleCommand) {
      this.actual.unscheduledCommands.push(actualSendCommand);
    }
  }

  /**
   * Adds synchronous delay.
   * @param timeInMs - Time of delay in milliseconds.
   * @returns Promise of delay instance.
   * @remarks
   * Public for easier stubbing.
   */
  public async delay(timeInMs: number): Promise<any> {
    return delay(timeInMs);
  }

  /**
   * Overrides `ExtendableError.prototype.fillErrorProps` method for easier stubbing.
   */
  protected overrideExtendableErrorFillErrorPropsMethod(): void {
    // Don't add stack traces to ExtendableError during testing, since it's hard to stub!
    const originalFillErrorProps = ExtendableError.prototype.fillErrorProps;
    this.originalFillErrorProps = originalFillErrorProps;

    ExtendableError.prototype.fillErrorProps = function (
      ...args: any[]
    ): EvebleTypes.ErrorProps {
      const errorProps = originalFillErrorProps.apply(this, args);
      errorProps.stack = undefined;
      return errorProps;
    };
  }

  /**
   * Handles creation of `Commit` for `EventSourceable`.
   * @async
   * @param eventSourceableId - Identifier as string or `Guid` instance.
   * @param version - Version of `EventSourceable`.
   * @param  events - List of instances implementing `Event` interface.
   * @return Instance implementing `Commit` interface.
   */
  async createCommit(
    eventSourceableId: string | EvebleTypes.Stringifiable,
    version: number,
    events: EvebleTypes.Event[]
  ): Promise<EvebleTypes.Commit> {
    const appId = this.scenario.getApp().config.get('appId');

    const versionedEvents: EvebleTypes.Event[] = [];
    for (const event of events) {
      versionedEvents.push(
        new (event as any).constructor({ ...event, version })
      );
    }

    const commitReceiver = new CommitReceiver({
      appId,
      receivedAt: new Date(),
      state: 'received',
    });

    const props = {
      id: new Guid().toString(),
      sourceId: eventSourceableId.toString(),
      version,
      eventSourceableType: this.scenario.getSUT().getTypeName(),
      commands: [],
      events: versionedEvents,
      insertedAt: new Date(),
      sentBy: appId,
      receivers: [commitReceiver],
    };
    const commitStore = await this.scenario
      .getApp()
      .injector.getAsync<EvebleTypes.CommitStore>(BINDINGS.CommitStore);
    const commitId = await commitStore.generateId();
    if (commitId !== undefined) {
      props.id = commitId.toString();
    }
    return new Commit(props);
  }

  /**
   * Sets version on event.
   * @param event - Instance implementing `Event` interface.
   * @param version - Version number.
   */
  protected setEventVersion(event: EvebleTypes.Event, version: number): void {
    event.version = version;
  }

  /**
   * Executes test.
   * @async
   */
  protected async run(): Promise<void> {
    try {
      const eventBus = await this.scenario
        .getApp()
        .injector.getAsync<EvebleTypes.EventBus>(BINDINGS.EventBus);
      const boundHandler = this.onPublishedEvent.bind(this);
      boundHandler.original = this.onPublishedEvent;

      eventBus.onPublish('on-publishing-events', boundHandler, true);
      if (this.test !== undefined) {
        await this.test();
      }
    } finally {
      await this.cleanup();
    }
  }

  /**
   * Cleans after test execution.
   * @async
   */
  protected async cleanup(): Promise<void> {
    // Restore error stack traces after testing
    (ExtendableError.prototype as any).fillErrorProps =
      this.originalFillErrorProps;
  }

  /**
   * Sends all queued messages through app.
   * @async
   */
  protected async sendMessagesThroughApp(): Promise<void> {
    for (const message of this.queue) {
      if (message instanceof Command) {
        await this.scenario.getApp().send(message);
      } else {
        this.ignoreNextEvent = true;
        await this.scenario.getApp().publish(message as EvebleTypes.Event);
      }
    }
  }

  /**
   * Compares if provided actual message is equal to expected one(untested
   * properties set on `TestConfig` configuration will not be taken
   * in to account on comparison(like `timestamp`, `version`, `schemaVersion`, `metadata` etc.)
   * @param actualMessage - Instance implementing `Message` interface.
   * @param expectedMessage - Instance implementing `Message` interface.
   * @returns Returns `true` if actual and expected messages are the same, else `false`.
   */
  protected isSameMessage(
    actualMessage: EvebleTypes.Message,
    expectedMessage: EvebleTypes.Message
  ): boolean {
    const untestedProps = this.scenario.getConfig().get('untestedProperties');

    const processedActual = omit(
      JSON.parse(JSON.stringify(actualMessage)),
      untestedProps
    );
    const processedExpected = omit(
      JSON.parse(JSON.stringify(expectedMessage)),
      untestedProps
    );

    return isEqual(processedActual, processedExpected);
  }
}
