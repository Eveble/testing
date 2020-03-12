import {
  App,
  EvebleTypes,
  DomainError,
  EventSourceable,
  kernel,
} from '@eveble/eveble';
import { isEmpty } from 'lodash';
import { types } from './types';
import {
  InvalidAppError,
  InvalidSUTError,
  InvalidExpectationError,
} from './errors';
import { EventSourceableBDDAsserter } from './bdd-asserters/event-sourceable-bdd-asserter';
import { TestConfig } from './test-config';

export class Scenario implements types.Scenario {
  protected app: EvebleTypes.App;

  protected asserter: types.EventSourceableBDDAsserterType;

  protected sut: EvebleTypes.EventSourceableType;

  protected givenMessages: EvebleTypes.Message[];

  protected whenMessages: EvebleTypes.Message[];

  protected expected: {
    events?: EvebleTypes.Event[];
    includedEvents?: EvebleTypes.Event[];
    error?: DomainError;
    errorMessage?: string;
    scheduledCommands?: EvebleTypes.Command[];
    unscheduledCommands?: EvebleTypes.Command[];
  };

  /**
   * Creates an instance of `Scenario`.
   * @param app - Instance implementing `App` interface.
   * @param asserter - Optional asserter constructor implementing `EventSourceableBDDAsserterType` interface.
   */
  constructor(
    app: EvebleTypes.App,
    asserter: types.EventSourceableBDDAsserterType = EventSourceableBDDAsserter
  ) {
    if (app === undefined) {
      throw new InvalidAppError();
    }
    this.app = app;
    this.asserter = asserter;
    this.givenMessages = [];
    this.whenMessages = [];
    this.expected = {};
  }

  /**
   * Returns application instance against which test is performed.
   * @returns Instance implementing `App` interface.
   */
  public getApp(): EvebleTypes.App {
    return this.app;
  }

  /**
   * Returns asserter constructor implementing `EventSourceableBDDAsserterType` interface.
   * @returns Instance implementing `EventSourceableBDDAsserterType` interface.
   */
  public getAsserter(): types.EventSourceableBDDAsserterType {
    return this.asserter;
  }

  /**
   * Returns system under test.
   * @returns `EventSourceable` type constructor.
   */
  public getSUT(): EvebleTypes.EventSourceableType {
    return this.sut;
  }

  /**
   * Sets **S**ystem **U**nder **T**est.
   * @param sut - Constructor type implementing `EventSourceableType` interface.
   * @returns Instance of `this`.
   */
  public test(sut: EvebleTypes.EventSourceableType): this {
    if (
      sut === undefined ||
      sut.prototype === undefined ||
      !(sut.prototype instanceof EventSourceable)
    ) {
      throw new InvalidSUTError(kernel.describer.describe(sut));
    }
    this.sut = sut;
    return this;
  }

  /**
  /**
   * Describes the state **before** testing the behavior specified in this scenario(i.e.
   * **pre-conditions** to the test).
   * @param messages - List of instances implementing `Message` interface.
   * @param messages
   * @returns Instance of `this`.
   */
  public given(messages: EvebleTypes.Message[] = []): this {
    this.givenMessages = this.givenMessages.concat(messages);
    return this;
  }

  /**
   * The behavior that test scenario specifies. Adds message(s) that will be send
   * to application.
   * @async
   * @param messages - List of instances implementing `Message` interface.
   * @returns Instance of `this`.
   */
  public when(messages: EvebleTypes.Message[] = []): this {
    this.whenMessages = this.whenMessages.concat(messages);
    return this;
  }

  /**
   * Creates test expectation describing the changes you exactly expect due to the specified
   * behavior(all events published must match).
   * @param expectedEvents - List of all expected `Events` that should be published on app.
   * @returns Instance of `this`.
   */
  public expect(events: EvebleTypes.Event[] = []): this {
    if (
      !isEmpty(this.expected.includedEvents) ||
      this.expected.error !== undefined
    ) {
      throw new InvalidExpectationError();
    }

    if (this.expected.events === undefined) this.expected.events = [];
    this.expected.events = this.expected.events.concat(events);
    return this;
  }

  /**
   * Creates test expectation describing the changes you partially expect due to the specified
   * behavior(only part of events published can match).
   * @param includedEvents - List of partially expected `Events` that should be published on app.
   * @returns Instance of `this`.
   */
  public expectToInclude(includedEvents: EvebleTypes.Event[] = []): this {
    if (!isEmpty(this.expected.events) || this.expected.error !== undefined) {
      throw new InvalidExpectationError();
    }

    if (this.expected.includedEvents === undefined)
      this.expected.includedEvents = [];

    this.expected.includedEvents = this.expected.includedEvents.concat(
      includedEvents
    );
    return this;
  }

  /**
   * Creates **exception** expectation.
   * @param error - Expected error type as subclass of `DomainError` type constructor.
   * @param errorMessage - Optional expected error message that should be thrown.
   * @returns Instance of `this`.
   */
  public expectToFailWith(error: any, errorMessage?: string): this {
    if (
      !isEmpty(this.expected.includedEvents) ||
      !isEmpty(this.expected.events)
    ) {
      throw new InvalidExpectationError();
    }

    this.expected.error = error;
    if (errorMessage) this.expected.errorMessage = errorMessage;
    return this;
  }

  /**
   * @alias expectToFailWith
   */
  public throws(error: any, errorMessage?: string): this {
    return this.expectToFailWith(error, errorMessage);
  }

  /**
   * Adds scheduled commands that will be resolved immediately with application.
   * @param commands - Instances implementing `Command` interface that should be
   * scheduled in testing scenario.
   * @returns Instance of `this`.
   */
  public schedules(commands: EvebleTypes.Command[] = []): this {
    if (this.expected.scheduledCommands === undefined)
      this.expected.scheduledCommands = [];

    this.expected.scheduledCommands = this.expected.scheduledCommands.concat(
      commands
    );
    return this;
  }

  /**
   * Adds commands types that will be removed from scheduled queue thus will never be
   * send to application.
   * @param commands - Instances implementing `Command` interface that should be
   * unscheduled in testing scenario.
   * @returns Instance of `this`.
   */
  public unschedules(commands: EvebleTypes.Command[] = []): this {
    if (this.expected.unscheduledCommands === undefined)
      this.expected.unscheduledCommands = [];

    this.expected.unscheduledCommands = this.expected.unscheduledCommands.concat(
      commands
    );
    return this;
  }

  /**
   * Verify the assertion.
   * @param config - Instance of `TestConfig`
   * @returns Returns `true` if assertion is truthful, else throws.
   * @throws {AssertionError}
   * Thrown if assertion does not match expectation.
   */
  public async verify(config: TestConfig = new TestConfig()): Promise<boolean> {
    if (this.sut === undefined) {
      throw new InvalidSUTError(kernel.describer.describe(this.sut));
    }
    if (this.app.isInState(App.STATES.constructed)) {
      await this.app.initialize();
    }
    await this.app.reset();
    if (!this.app.isInState(App.STATES.running)) {
      await this.app.start();
    }

    const asserter = new (this.asserter as any)(this.sut, this.app, config);
    await asserter.given(this.givenMessages);
    await asserter.when(this.whenMessages);

    if (this.expected.scheduledCommands) {
      await asserter.schedules(this.expected.scheduledCommands);
    }

    if (this.expected.unscheduledCommands) {
      await asserter.unschedules(this.expected.unscheduledCommands);
    }

    // Expected to fail
    if (this.expected.error) {
      await asserter.expectToFailWith(
        this.expected.error,
        this.expected.errorMessage
      );
      return false;
    }

    // Expect to include
    if (
      this.expected.includedEvents !== undefined &&
      !isEmpty(this.expected.includedEvents)
    ) {
      await asserter.expectToInclude(this.expected.includedEvents);
      // Expect
    } else if (
      this.expected.events !== undefined &&
      !isEmpty(this.expected.events)
    ) {
      await asserter.expect(this.expected.events);
    } else {
      // Invalid assertion
      throw new InvalidExpectationError();
    }

    return true;
  }
}
