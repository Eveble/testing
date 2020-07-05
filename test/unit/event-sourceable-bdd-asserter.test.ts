import chai, { expect, AssertionError } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';
import {
  ExtendableError,
  Command,
  Event,
  App,
  EventSourceable,
  define,
  Guid,
  DomainError,
  ScheduleCommand,
  UnscheduleCommand,
  AppConfig,
  Commit,
  CommitReceiver,
  BINDINGS,
  EvebleTypes,
  Injector,
  LoggingConfig,
  Assignment,
} from '@eveble/eveble';
import { stubInterface } from 'ts-sinon';
import sinon from 'sinon';
import { EventSourceableBDDAsserter } from '../../src/bdd-asserters/event-sourceable-bdd-asserter';
import { TestConfig } from '../../src/test-config';
import { InvalidMessageError } from '../../src/errors';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe(`EventSourceableBDDAsserter`, function () {
  @define('EventSourceableBDDAsserter.MyCommand')
  class MyCommand extends Command {}
  @define('EventSourceableBDDAsserter.MyOtherCommand')
  class MyOtherCommand extends Command {}
  @define('EventSourceableBDDAsserter.MyEvent')
  class MyEvent extends Event {}
  @define('EventSourceableBDDAsserter.MyOtherEvent')
  class MyOtherEvent extends Event {}

  @define('EventSourceableBDDAsserter.MyDomainError')
  class MyDomainError extends DomainError {
    constructor() {
      super('We need more lemon pledge!');
    }
  }

  @define('EventSourceableBDDAsserter.MyEventSourceable')
  class MyEventSourceable extends EventSourceable {}

  class MyApp extends App {}

  // Props
  let now: Date;
  let appId: string;
  // Test
  let app: any;
  let asserter: EventSourceableBDDAsserter;
  let testConfig: TestConfig;
  // Injector
  let injector: EvebleTypes.Injector;
  let log: any;
  // Dependencies
  let commandBus: any;
  let eventBus: any;
  let commitStore: any;
  let commitObserver: any;
  let commandScheduler: any;

  const setupInjector = function (): void {
    injector = new Injector();
    log = stubInterface<EvebleTypes.Logger>();

    injector.bind<EvebleTypes.Logger>(BINDINGS.log).toConstantValue(log);
  };

  const setupEvebleDependencies = function (): void {
    commandBus = stubInterface<EvebleTypes.CommandBus>();
    eventBus = stubInterface<EvebleTypes.EventBus>();
    commitStore = stubInterface<EvebleTypes.CommitStore>();
    commitObserver = stubInterface<EvebleTypes.CommitObserver>();
    commandScheduler = stubInterface<EvebleTypes.CommandScheduler>();

    // Buses
    injector
      .bind<EvebleTypes.CommandBus>(BINDINGS.CommandBus)
      .toConstantValue(commandBus);
    injector
      .bind<EvebleTypes.EventBus>(BINDINGS.EventBus)
      .toConstantValue(eventBus);
    // Commit
    injector
      .bind<EvebleTypes.CommitStore>(BINDINGS.CommitStore)
      .toConstantValue(commitStore);
    injector
      .bind<EvebleTypes.CommitObserver>(BINDINGS.CommitObserver)
      .toConstantValue(commitObserver);
    // Scheduler
    injector
      .bind<EvebleTypes.CommandScheduler>(BINDINGS.CommandScheduler)
      .toConstantValue(commandScheduler);
  };

  const rebindEvebleDependencies = function (): void {
    commandBus = stubInterface<EvebleTypes.CommandBus>();
    eventBus = stubInterface<EvebleTypes.EventBus>();
    commitStore = stubInterface<EvebleTypes.CommitStore>();
    commitObserver = stubInterface<EvebleTypes.CommitObserver>();
    commandScheduler = stubInterface<EvebleTypes.CommandScheduler>();

    // Buses
    injector
      .rebind<EvebleTypes.CommandBus>(BINDINGS.CommandBus)
      .toConstantValue(commandBus);
    injector
      .rebind<EvebleTypes.EventBus>(BINDINGS.EventBus)
      .toConstantValue(eventBus);
    // Commit
    injector
      .rebind<EvebleTypes.CommitStore>(BINDINGS.CommitStore)
      .toConstantValue(commitStore);
    injector
      .rebind<EvebleTypes.CommitObserver>(BINDINGS.CommitObserver)
      .toConstantValue(commitObserver);
    // Scheduler
    injector
      .rebind<EvebleTypes.CommandScheduler>(BINDINGS.CommandScheduler)
      .toConstantValue(commandScheduler);
  };

  before(async () => {
    now = new Date();
    appId = 'my-app-id';

    setupInjector();
    setupEvebleDependencies();

    app = new MyApp({
      config: new AppConfig({
        appId,
        logging: new LoggingConfig({ isEnabled: false }),
      }),
      injector,
    });
    await app.initialize();
    await app.start();
  });

  beforeEach(async () => {
    testConfig = new TestConfig();
    asserter = new EventSourceableBDDAsserter(
      MyEventSourceable,
      app,
      testConfig
    );

    rebindEvebleDependencies();
  });

  afterEach(() => {
    log.reset();
    commandBus.reset();
    eventBus.reset();
    commitStore.reset();
    commandScheduler.reset();
  });

  after(async () => {
    await app.shutdown();
  });

  describe('construction', () => {
    it('takes system under test as EventSourceable class, app as App instance, and config as TestConfig and assigns them', () => {
      const asserterInstance = new EventSourceableBDDAsserter(
        MyEventSourceable,
        app,
        testConfig
      );
      expect(asserterInstance.getSUT()).to.be.equal(MyEventSourceable);
      expect(asserterInstance.getApp()).to.be.equal(app);
      expect(asserterInstance.getConfig()).to.be.equal(testConfig);
    });

    it('initializes with empty queue for messages array', () => {
      expect(asserter.getQueue()).to.be.instanceof(Array);
      expect(asserter.getQueue()).to.be.empty;
    });

    it('initializes with empty published(actual) events array', () => {
      expect(asserter.getPublishedEvents()).to.be.instanceof(Array);
      expect(asserter.getPublishedEvents()).to.be.empty;
    });

    it('initializes with empty send(actual) scheduled commands array', () => {
      expect(asserter.getScheduledCommands()).to.be.instanceof(Array);
      expect(asserter.getScheduledCommands()).to.be.empty;
    });

    it('initializes with empty send(actual) unscheduled commands array', () => {
      expect(asserter.getUnscheduledCommands()).to.be.instanceof(Array);
      expect(asserter.getUnscheduledCommands()).to.be.empty;
    });

    it('initializes with empty expected events array', () => {
      expect(asserter.getExpectedEvents()).to.be.instanceof(Array);
      expect(asserter.getExpectedEvents()).to.be.empty;
    });

    it('initializes with empty expected scheduled commands array', () => {
      expect(asserter.getExpectedScheduledCommands()).to.be.instanceof(Array);
      expect(asserter.getExpectedScheduledCommands()).to.be.empty;
    });

    it('initializes with empty expected unscheduled commands array', () => {
      expect(asserter.getExpectedUnscheduledCommands()).to.be.instanceof(Array);
      expect(asserter.getExpectedUnscheduledCommands()).to.be.empty;
    });

    it(`overrides ExtendableError's fillErrorProps instance method do to stubbing issues`, () => {
      @define()
      class MyExtendableError extends ExtendableError {
        customField: string;
      }
      const error = new MyExtendableError();
      const props = {
        message: 'not found',
        code: 404,
        customField: 'foo',
        name: 'MyCustomError',
        stack: error.stack,
      };
      const extendableError = new MyExtendableError(props);
      expect(extendableError.message).to.be.equal(props.message);
      expect(extendableError.code).to.be.equal(props.code);
      expect(extendableError.customField).to.be.equal(props.customField);
      expect(extendableError.name).to.be.equal(props.name);
      expect(extendableError.stack).to.be.undefined;
    });
  });

  describe(`given`, () => {
    it('throws InvalidMessageError if provided message(s) are not instances of Command or Event', async () => {
      class MyInvalidMessage {}

      await expect(
        asserter.given([new MyInvalidMessage() as any])
      ).to.eventually.be.rejectedWith(
        InvalidMessageError,
        `Provided item must be a valid domain message: Command or Event, got MyInvalidMessage`
      );
    });

    it(`can be called without data`, async () => {
      await expect(asserter.given()).to.not.eventually.be.rejectedWith(Error);
    });

    it(`returns self after execution for chaining`, async () => {
      expect(await asserter.given()).to.be.equal(asserter);
    });

    it(`adds a single Command to the run queue to establish state before 'when'`, async () => {
      const command = new MyCommand({
        targetId: new Guid(),
      });

      await asserter.given([command]);
      expect(asserter.getQueue()).to.be.eql([command]);
    });

    it(`adds an array of Commands to the run queue to establish state before 'when'`, async () => {
      const commands = [
        new MyCommand({
          targetId: new Guid(),
        }),
        new MyCommand({
          targetId: new Guid(),
        }),
      ];
      await asserter.given(commands);
      expect(asserter.getQueue()).to.be.eql(commands);
    });

    it(`adds a single Event to the CommitStore as a Commit`, async () => {
      commitStore.generateId.returns(new Guid().toString());
      const event = new MyEvent({
        sourceId: new Guid(),
      });

      await asserter.given([event]);
      expect(commitStore.generateId).to.be.calledOnce;
      expect(commitStore.save).to.be.calledOnce;
    });

    it(`adds an array of Events to the CommitStore as a single Commit`, async () => {
      const eventSourceableId = new Guid();
      const events = [
        new MyEvent({
          sourceId: eventSourceableId,
        }),
        new MyEvent({
          sourceId: eventSourceableId,
        }),
      ];

      await asserter.given(events);
      expect(commitStore.generateId).to.be.calledOnce;
      expect(commitStore.save).to.be.calledOnce;
    });

    it(`ensures correct data on created Commit from single Event`, async () => {
      const clock = sinon.useFakeTimers(now.getTime());

      const eventSourceableId = new Guid();
      const commitId = new Guid().toString();

      const event = new MyEvent({
        sourceId: eventSourceableId,
      });

      const versionedEvent = new MyEvent({
        sourceId: eventSourceableId,
        version: 1,
      });

      const expectedCommit = new Commit({
        id: commitId,
        sourceId: eventSourceableId.toString(),
        version: 1,
        eventSourceableType: 'EventSourceableBDDAsserter.MyEventSourceable',
        events: [versionedEvent],
        commands: [],
        insertedAt: now,
        sentBy: appId,
        receivers: [
          new CommitReceiver({
            appId,
            receivedAt: now,
            state: 'received',
          }),
        ],
      });

      commitStore.generateId.resolves(commitId);

      await asserter.given([event]);
      expect(commitStore.generateId).to.be.calledOnce;
      expect(commitStore.save).to.be.calledOnce;
      expect(commitStore.save).to.be.calledWithMatch(expectedCommit);

      clock.restore();
    });

    it(`ensures correct data on created Commit from array of Events`, async () => {
      const clock = sinon.useFakeTimers(now.getTime());

      const eventSourceableId = new Guid();
      const commitId = new Guid().toString();

      const firstEvent = new MyEvent({
        sourceId: eventSourceableId,
      });
      const secondEvent = new MyOtherEvent({
        sourceId: eventSourceableId,
      });

      const verFirstEvent = new MyEvent({
        sourceId: eventSourceableId,
        version: 1,
      });
      const verSecondEvent = new MyOtherEvent({
        sourceId: eventSourceableId,
        version: 1,
      });

      const expectedCommit = new Commit({
        id: commitId,
        sourceId: eventSourceableId.toString(),
        version: 1,
        eventSourceableType: 'EventSourceableBDDAsserter.MyEventSourceable',
        events: [verFirstEvent, verSecondEvent],
        commands: [],
        insertedAt: now,
        sentBy: appId,
        receivers: [
          new CommitReceiver({
            appId,
            receivedAt: now,
            state: 'received',
          }),
        ],
      });

      commitStore.generateId.resolves(commitId);

      await asserter.given([firstEvent, secondEvent]);
      expect(commitStore.generateId).to.be.calledOnce;
      expect(commitStore.save).to.be.calledOnce;
      expect(commitStore.save).to.be.calledWithMatch(expectedCommit);

      clock.restore();
    });
  });

  describe(`when`, () => {
    it(`returns self after execution for chaining`, async () => {
      expect(await asserter.when()).to.be.equal(asserter);
    });

    it(`adds a single Command to the run queue`, async () => {
      const command = new MyCommand({
        targetId: new Guid(),
      });
      await asserter.when([command]);
      expect(asserter.getQueue()).to.eql([command]);
    });

    it(`adds an array of Commands to the run queue`, async () => {
      const commands = [
        new MyCommand({
          targetId: new Guid(),
        }),
        new MyCommand({
          targetId: new Guid(),
        }),
      ];
      await asserter.when(commands);
      expect(asserter.getQueue()).to.eql(commands);
    });

    it(`adds a single Event to the run queue with existing items`, async () => {
      const command = new MyCommand({
        targetId: new Guid(),
      });
      await asserter.given([command]);

      const event = new MyEvent({
        sourceId: new Guid(),
      });
      await asserter.when([event]);
      expect(asserter.getQueue()).to.eql([command, event]);
    });

    it(`adds an array of Events to the run queue`, async () => {
      const events = [
        new MyEvent({
          sourceId: new Guid(),
        }),
        new MyEvent({
          sourceId: new Guid(),
        }),
      ];
      await asserter.when(events);
      expect(asserter.getQueue()).to.eql(events);
    });
  });

  describe(`expect`, () => {
    it(`ensures that app must be shutdown manually after expectation test`, async () => {
      await asserter.expect([]);
      expect(app.isInState(MyApp.STATES.shutdown)).to.be.false;
    });

    it(`can take a function that returns an array of Events and runs the initialized test as a result`, async () => {
      const events = [
        new MyEvent({
          sourceId: new Guid(),
        }),
        new MyEvent({
          sourceId: new Guid(),
        }),
      ];
      // Fake run with onPublished hook invoked on EventBus
      asserter.onPublishedEvent(events[0]);
      asserter.onPublishedEvent(events[1]);

      await asserter.expect(() => {
        return events;
      });
      expect(asserter.getExpectedEvents()).to.eql(events);
    });

    it(`ensures that added onPublish hook to EventBus is bound to instance of asserter`, async () => {
      const events = [
        new MyEvent({
          sourceId: new Guid(),
        }),
        new MyEvent({
          sourceId: new Guid(),
        }),
      ];
      // Fake run of onPublished hook
      asserter.onPublishedEvent(events[0]);
      asserter.onPublishedEvent(events[1]);

      await asserter.expect(events);

      expect(eventBus.onPublish).to.be.calledOnce;
      // Resolve bound callback from call
      expect(eventBus.onPublish.getCall(0).args[0]).to.be.equal(
        'on-publishing-events'
      );
      expect(eventBus.onPublish.getCall(0).args[1]).to.be.instanceof(Function);
      expect(eventBus.onPublish.getCall(0).args[1].original).to.be.equal(
        asserter.onPublishedEvent
      ); // Compare bound function
    });

    it(`can take an array of Events and runs the initialized test as a result`, async () => {
      const events = [
        new MyEvent({
          sourceId: new Guid(),
        }),
        new MyEvent({
          sourceId: new Guid(),
        }),
      ];
      // Fake run of onPublished hook
      asserter.onPublishedEvent(events[0]);
      asserter.onPublishedEvent(events[1]);

      await asserter.expect(events);
      expect(asserter.getExpectedEvents()).to.eql(events);
    });

    it(`sends Command messages through CommandBus on test run`, async () => {
      const commands = [
        new MyCommand({
          targetId: new Guid(),
        }),
        new MyOtherCommand({
          targetId: new Guid(),
        }),
      ];

      await asserter.given([commands[0]]);
      await asserter.when([commands[1]]);
      await asserter.expect([]);

      expect(commandBus.send).to.be.calledTwice;
      expect(commandBus.send).to.be.calledWithExactly(commands[0]);
      expect(commandBus.send).to.be.calledWithExactly(commands[1]);
    });

    it(`sends Events messages through EventBus on test run`, async () => {
      const events = [
        new MyEvent({
          sourceId: new Guid(),
        }),
        new MyEvent({
          sourceId: new Guid(),
        }),
      ];

      await asserter.given([]);
      await asserter.when([events[0], events[1]]);
      await asserter.expect([]);

      expect(eventBus.publish).to.be.calledTwice;
      expect(eventBus.publish).to.be.calledWithExactly(events[0]);
      expect(eventBus.publish).to.be.calledWithExactly(events[1]);
    });

    it(`throws error if expected list of published Events does not match the one that was actually published`, async () => {
      const events = [
        new MyEvent({
          sourceId: new Guid(),
        }),
        new MyEvent({
          sourceId: new Guid(),
        }),
      ];

      await expect(asserter.expect(events)).to.eventually.be.rejectedWith(
        AssertionError,
        'List of actual published event does not match the expected ones'
      );
    });
  });

  describe(`expect to fail`, () => {
    it(`ensures that app must be shutdown manually after fail expectation test`, async () => {
      commandBus.send.rejects(new MyDomainError());

      await expect(
        asserter.expectToFailWith(MyDomainError)
      ).to.eventually.not.be.rejectedWith(Error);
      expect(app.isInState(MyApp.STATES.shutdown)).to.be.false;
    });

    it(`catches only thrown subclass of DomainError type`, async () => {
      commandBus.send.rejects(new MyDomainError());

      const command = new MyCommand({
        targetId: new Guid(),
      });

      await asserter.given([command]);
      expect(
        asserter.expectToFailWith(MyDomainError)
      ).to.eventually.not.be.rejectedWith(Error);
    });

    it(`catches thrown DomainError type with message`, async () => {
      commandBus.send.rejects(new MyDomainError());

      const command = new MyCommand({
        targetId: new Guid(),
      });

      await asserter.given([command]);
      await asserter.expectToFailWith(
        MyDomainError,
        'We need more lemon pledge!'
      );
    });

    it(`ensures that thrown DomainError message matches only the expected one`, async () => {
      commandBus.send.rejects(new MyDomainError());

      const command = new MyCommand({
        targetId: new Guid(),
      });

      await asserter.given([command]);
      expect(
        asserter.expectToFailWith(
          MyDomainError,
          'We need more totally invalid, not matching error messages... or pylons'
        )
      ).to.eventually.be.rejectedWith(AssertionError);
    });

    it(`aliases failed expectation as 'throws'`, async () => {
      commandBus.send.rejects(new MyDomainError());

      const command = new MyCommand({
        targetId: new Guid(),
      });

      await asserter.given([command]);
      await asserter.throws(MyDomainError, 'We need more lemon pledge!');
    });
  });

  describe(`schedules`, () => {
    it(`returns self after execution for chaining`, async () => {
      expect(await asserter.schedules()).to.be.equal(asserter);
    });

    it(`adds a single Command to expected scheduled commands queue that should be send immediately on test execution`, async () => {
      const expected = new MyCommand({ targetId: new Guid() });

      await asserter.schedules([expected]);
      expect(asserter.getExpectedScheduledCommands()).to.be.eql([expected]);
    });

    it(`adds a array of Commands to scheduled commands queue that should be send immediately on test execution`, async () => {
      const firstCommand = new MyCommand({ targetId: new Guid() });
      const secondCommand = new MyOtherCommand({
        targetId: new Guid(),
      });

      await asserter.schedules([firstCommand, secondCommand]);
      expect(asserter.getExpectedScheduledCommands()).to.be.eql([
        firstCommand,
        secondCommand,
      ]);
    });

    it(`ensures that scheduling metadata is added to expected scheduled commands for structural consistency`, async () => {
      const firstCommand = new MyCommand({ targetId: new Guid() });
      const secondCommand = new MyOtherCommand({
        targetId: new Guid(),
      });

      expect(firstCommand.isScheduled()).to.be.false;
      expect(secondCommand.isScheduled()).to.be.false;
      await asserter.schedules([firstCommand, secondCommand]);
      expect(firstCommand.isScheduled()).to.be.true;
      expect(secondCommand.isScheduled()).to.be.true;
    });

    it(`ensures that added onSend hook to CommandBus is bound to instance of asserter`, async () => {
      const id = new Guid();
      const expectedCommand = new MyCommand({ targetId: id });

      await asserter.schedules([expectedCommand]);
      expect(commandBus.onSend).to.be.calledOnce;
      // Resolve bound callback from call
      expect(commandBus.onSend.getCall(0).args[0]).to.be.equal(
        'on-scheduled-command'
      );
      expect(commandBus.onSend.getCall(0).args[1]).to.be.instanceof(Function);
      expect(commandBus.onSend.getCall(0).args[1].original).to.be.equal(
        asserter.onScheduleCommandSend
      ); // Compare bound function
    });

    it(`adds onSend hook to CommandBus that changes ScheduleCommand delivery time - to the past time`, async () => {
      const targetId = new Guid();

      const expectedAssignment = new Assignment({
        assignmentId: targetId,
        deliverAt: new Date(new Date().getTime() + 1000),
        assignerId: targetId,
        assignerType: asserter.getSUT().getTypeName(),
      });
      const expectedCommand = new MyCommand({ targetId });
      expectedCommand.schedule(expectedAssignment);

      // Command that is scheduled on EventSourceable with EventSourceable.prototype.schedule
      const actualCommand = new MyCommand({ targetId });
      const actualAssignment = new Assignment({
        assignmentId: targetId,
        deliverAt: new Date(new Date().getTime() + 1000),
        assignerId: targetId,
        assignerType: asserter.getSUT().getTypeName(),
      });
      actualCommand.schedule(actualAssignment);

      // The actual instance of ScheduleCommand that is generated with
      // EventSourceable.prototype.schedule
      const actualScheduleCommand = new ScheduleCommand({
        targetId,
        command: actualCommand,
      });

      await asserter.schedules([expectedCommand]);
      expect(actualScheduleCommand.isDeliverable()).to.be.false;

      // Simulate invoking hook
      asserter.onScheduleCommandSend(actualScheduleCommand);
      expect(actualScheduleCommand.isDeliverable()).to.be.true;
      expect(asserter.getScheduledCommands()).to.be.instanceof(Array);
      expect(asserter.getScheduledCommands()).to.be.eql([actualCommand]);
    });

    it(`ensures that added onSend hook changes command's scheduling metadata's delivery time to past`, async () => {
      const targetId = new Guid();

      const expectedAssignment = new Assignment({
        assignmentId: targetId,
        deliverAt: new Date(new Date().getTime() + 1000),
        assignerId: targetId,
        assignerType: asserter.getSUT().getTypeName(),
      });
      const expectedCommand = new MyCommand({ targetId });
      expectedCommand.schedule(expectedAssignment);

      // Command that is scheduled on EventSourceable with EventSourceable.prototype.schedule
      const actualCommand = new MyCommand({ targetId });
      const actualAssignment = new Assignment({
        assignmentId: targetId,
        deliverAt: new Date(new Date().getTime() + 1000),
        assignerId: targetId,
        assignerType: asserter.getSUT().getTypeName(),
      });
      actualCommand.schedule(actualAssignment);

      // The actual instance of ScheduleCommand that is generated with
      // EventSourceable.prototype.schedule
      const actualScheduleCommand = new ScheduleCommand({
        targetId,
        command: actualCommand,
      });

      await asserter.schedules([expectedCommand]);
      expect(actualCommand.isDeliverable()).to.be.false;
      // Simulate invoking hook
      asserter.onScheduleCommandSend(actualScheduleCommand);
      expect(actualCommand.isDeliverable()).to.be.true;
    });

    it(`ensures that CommandBus hook does not change delivery time of not expected scheduled commands on test execution`, async () => {
      const firstTargetId = new Guid();
      const secondTargetId = new Guid();

      const firstExpectedAssignment = new Assignment({
        assignmentId: firstTargetId,
        deliverAt: new Date(new Date().getTime() + 1000),
        assignerId: firstTargetId,
        assignerType: asserter.getSUT().getTypeName(),
      });
      const firstExpectedCommand = new MyCommand({ targetId: firstTargetId });
      firstExpectedCommand.schedule(firstExpectedAssignment);

      // Command that is scheduled on EventSourceable with EventSourceable.prototype.schedule
      const firstActualCommand = new MyCommand({ targetId: firstTargetId });
      const firstActualAssignment = new Assignment({
        assignmentId: firstTargetId,
        deliverAt: new Date(new Date().getTime() + 1000),
        assignerId: firstTargetId,
        assignerType: asserter.getSUT().getTypeName(),
      });
      firstActualCommand.schedule(firstActualAssignment);

      const secondActualCommand = new MyCommand({ targetId: secondTargetId });
      const secondActualAssignment = new Assignment({
        assignmentId: secondTargetId,
        deliverAt: new Date(new Date().getTime() + 1000),
        assignerId: secondTargetId,
        assignerType: asserter.getSUT().getTypeName(),
      });
      secondActualCommand.schedule(secondActualAssignment);

      // The actual instance of ScheduleCommand that is generated with
      // EventSourceable.prototype.schedule
      const actualFirstScheduleCommand = new ScheduleCommand({
        targetId: firstTargetId,
        command: firstActualCommand,
      });
      const actualSecondScheduleCommand = new ScheduleCommand({
        targetId: secondTargetId,
        command: secondActualCommand,
      });

      await asserter.schedules([firstExpectedCommand]);

      asserter.onScheduleCommandSend(actualFirstScheduleCommand);
      asserter.onScheduleCommandSend(actualSecondScheduleCommand);
      expect(actualFirstScheduleCommand.isDeliverable()).to.be.true;
      expect(actualSecondScheduleCommand.isDeliverable()).to.be.false;
    });

    it('adds delay on expect test after sending messages through app if there are expected scheduled commands', async () => {
      asserter.delay = sinon.stub();
      const interval = 10;
      commandScheduler.getInterval.returns(interval);

      const expectedCommand = new MyCommand({ targetId: new Guid() });

      await asserter.schedules([expectedCommand]);
      await asserter.expect();
      expect(asserter.delay).to.be.calledOnce;
      expect(asserter.delay).to.be.calledWith(interval * 2 + 500);
    });
  });

  describe(`unschedule`, () => {
    it(`returns self after execution for chaining`, async () => {
      expect(await asserter.unschedules()).to.be.equal(asserter);
    });

    it(`unschedules single Commands that is added to expected unscheduled commands list`, async () => {
      const expected = new UnscheduleCommand({
        targetId: new Guid(),
        assignmentId: new Guid(),
        commandType: MyCommand.typeName(),
        assignerId: new Guid(),
        assignerType: 'EventSourceableBDDAsserter.MyEventSourceable',
      });

      await asserter.unschedules([expected]);
      expect(asserter.getExpectedUnscheduledCommands()).to.be.eql([expected]);
    });

    it(`unschedules an array of Commands that are added to expected unscheduled commands list`, async () => {
      const firstExpected = new UnscheduleCommand({
        targetId: new Guid(),
        assignmentId: new Guid(),
        commandType: MyCommand.typeName(),
        assignerId: new Guid(),
        assignerType: 'EventSourceableBDDAsserter.MyEventSourceable',
      });
      const secondExpected = new UnscheduleCommand({
        targetId: new Guid(),
        assignmentId: new Guid(),
        commandType: MyOtherCommand.typeName(),
        assignerId: new Guid(),
        assignerType: 'EventSourceableBDDAsserter.MyEventSourceable',
      });

      await asserter.unschedules([firstExpected, secondExpected]);
      expect(asserter.getExpectedUnscheduledCommands()).to.be.eql([
        firstExpected,
        secondExpected,
      ]);
    });

    it(`adds onSend hook to CommandBus that indexes all actual undscheduled commands that was send to CommandBus on test`, async () => {
      const actual = new UnscheduleCommand({
        targetId: new Guid(),
        assignmentId: new Guid(),
        commandType: MyCommand.typeName(),
        assignerId: new Guid(),
        assignerType: 'EventSourceableBDDAsserter.MyEventSourceable',
      });

      asserter.onUnscheduleCommandSend(actual);
      expect(asserter.getUnscheduledCommands()).to.be.eql([actual]);
    });

    it(`ensures that added onSend hook to CommandBus is bound to instance of asserter`, async () => {
      const expected = new UnscheduleCommand({
        targetId: new Guid(),
        assignmentId: new Guid(),
        commandType: MyCommand.typeName(),
        assignerId: new Guid(),
        assignerType: 'EventSourceableBDDAsserter.MyEventSourceable',
      });

      await asserter.unschedules([expected]);
      expect(commandBus.onSend).to.be.calledOnce;
      // Resolve bound callback from call
      expect(commandBus.onSend.getCall(0).args[0]).to.be.equal(
        'on-unschedule-command'
      );
      expect(commandBus.onSend.getCall(0).args[1]).to.be.instanceof(Function);
      expect(commandBus.onSend.getCall(0).args[1].original).to.be.equal(
        asserter.onUnscheduleCommandSend
      ); // Compare bound function
    });

    it(`passes expectation if expected list of unscheduled commands matches the one that was unscheduled`, async () => {
      const firstProps = {
        targetId: new Guid(),
        assignmentId: new Guid(),
        commandType: MyCommand.typeName(),
        assignerId: new Guid(),
        assignerType: 'EventSourceableBDDApi.MyEventSourceable',
      };
      const secondProps = {
        targetId: new Guid(),
        assignmentId: new Guid(),
        commandType: MyOtherCommand.typeName(),
        assignerId: new Guid(),
        assignerType: 'EventSourceableBDDApi.MyEventSourceable',
      };

      const firstExpected = new UnscheduleCommand(firstProps);
      const firstActual = new UnscheduleCommand(firstProps);
      const secondExpected = new UnscheduleCommand(secondProps);
      const secondActual = new UnscheduleCommand(secondProps);

      await asserter.unschedules([firstExpected, secondExpected]);

      asserter.onUnscheduleCommandSend(firstActual);
      asserter.onUnscheduleCommandSend(secondActual);

      await asserter.expect();
    });

    it(`throws error if expected list of uscheduled commands does not match the one that was unscheduled`, async () => {
      const firstProps = {
        targetId: new Guid(),
        assignmentId: new Guid(),
        commandType: MyCommand.typeName(),
        assignerId: new Guid(),
        assignerType: 'EventSourceableBDDApi.MyEventSourceable',
      };
      const secondProps = {
        targetId: new Guid(),
        assignmentId: new Guid(),
        commandType: MyOtherCommand.typeName(),
        assignerId: new Guid(),
        assignerType: 'EventSourceableBDDApi.MyEventSourceable',
      };

      const firstExpected = new UnscheduleCommand(firstProps);
      const firstActual = new UnscheduleCommand(firstProps);
      const secondExpected = new UnscheduleCommand(secondProps);

      await asserter.unschedules([firstExpected, secondExpected]);

      asserter.onUnscheduleCommandSend(firstActual);
      await expect(asserter.expect()).to.eventually.be.rejectedWith(
        AssertionError,
        'List of actual unscheduled commands does not match the expected ones'
      );
    });
  });
});
