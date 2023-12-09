/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-loop-func */
import {
  App,
  EvebleTypes,
  EventSourceable as ES,
  kernel,
} from '@eveble/eveble';
import {
  EventSourceableFeatureMappingsNotFoundError,
  InvalidAppError,
  InvalidEventSourceableError,
  InvalidScenarioError,
} from '../errors';
import { types } from '../types';
import { GivenWhenChain, WhenThenChain } from './bdd-chain';
import { TestConfig } from '../test-config';
import { EventSourceableBDDAsserter } from '../bdd-asserters/event-sourceable-bdd-asserter';
import { Feature } from './feature';

export class Scenario<EventSourceable>
  implements types.EventSourceableBDDFramework<EventSourceable>
{
  public app: EvebleTypes.App;

  public EventSourceableClass: EvebleTypes.EventSourceableType;

  public config: TestConfig;

  protected asserter: types.EventSourceableBDDAsserterType<EventSourceable>;

  public givenFn?: Function;

  public whenFn?: Function;

  public scheduledFn?: Function;

  public unscheduledFn?: Function;

  public thenFn?: Function;

  public throwsFn?: Function;

  public options?: types.RuntimeOptions;

  /**
   * Creates an instance of Scenario.
   * @param EventSourceableClass - `EventSourceable` constructor class.
   * @param app - Instance of `App`
   * @param [config] - Optional instance of `TestConfig`.
   * @param [asserter] - Optional type matching `EventSourceableBDDAsserterType<EventSourceable>`.
   */
  constructor(
    EventSourceableClass: EvebleTypes.EventSourceableType,
    app: EvebleTypes.App,
    config?: TestConfig,
    asserter?: types.EventSourceableBDDAsserterType<EventSourceable>
  ) {
    if (
      EventSourceableClass === undefined ||
      EventSourceableClass.prototype === undefined ||
      !(EventSourceableClass.prototype instanceof ES)
    ) {
      throw new InvalidEventSourceableError(
        kernel.describer.describe(EventSourceableClass)
      );
    }
    this.EventSourceableClass = EventSourceableClass;
    if (app === undefined) {
      throw new InvalidAppError();
    }
    this.app = app;
    this.config = config || new TestConfig();
    this.asserter = asserter || (EventSourceableBDDAsserter as any);
  }

  /**
   * Creates scenario and sets system under test.
   * @param props - Type matching `SUTOptions`.
   * @returns Object with properties scenario as a instance of `Scenario`.
   */
  public static create<EvntSrcble>(props: types.SUTOptions<EvntSrcble>): {
    scenario: Scenario<EvntSrcble>;
  } {
    const eventSourceableName = props.EventSourceable.name;

    const esFeatures = Feature.features.get(eventSourceableName);
    if (esFeatures === undefined) {
      throw new EventSourceableFeatureMappingsNotFoundError(
        eventSourceableName
      );
    }

    const scenario = new Scenario<EvntSrcble>(
      props.EventSourceable,
      props.app,
      props.config
    );
    for (const feature of esFeatures.values()) {
      feature.setScenario(scenario);
    }

    return { scenario };
  }

  /**
   * Returns EventSourceable class.
   * @returns Instance of `EventSourceableType`.
   */
  public getEventSourceable(): EvebleTypes.EventSourceableType {
    return this.EventSourceableClass;
  }

  /**
   * Returns application instance.
   * @returns Instance of `App`.
   */
  public getApp(): EvebleTypes.App {
    return this.app;
  }

  /**
   * Returns system under test.
   * @returns `EventSourceable` type constructor.
   */
  public getSUT(): EvebleTypes.EventSourceableType {
    return this.EventSourceableClass;
  }

  /**
   * Returns asserter constructor implementing `EventSourceableBDDAsserter` interface.
   * @returns Instance implementing `EventSourceableBDDAsserter` interface.
   */
  public getAsserter(): types.EventSourceableBDDAsserterType<EventSourceable> {
    return this.asserter;
  }

  /**
   * Returns test config.
   * @returns Instance of `TestConfig`.
   */
  public getConfig(): TestConfig {
    return this.config;
  }

  /**
   * Sets runtime options.
   * @param options - Type matching `RuntimeOptions`.
   */
  public setRuntimeOptions(options: types.RuntimeOptions): void {
    this.options = options;
  }

  /**
   * Returns runtime options.
   * @returns Type matching `RuntimeOptions`, else `undefined`.
   */
  public getRuntimeOptions(): types.RuntimeOptions | undefined {
    return this.options;
  }

  /**
   * Determines whether runtime options are set on scenario.
   * @returns `true` if set, else `false`.
   */
  public hasRuntimeOptions(): boolean {
    return this.options !== undefined;
  }

  /**
   * Describes the state **before** testing the behavior specified in
   * this scenario(i.e. **pre-conditions** to the test).
   * @param givenFn - Callback function.
   * @returns Type matching `GivenWhenChain<EventSourceable>`
   */
  public given(
    _description: string,
    givenFn: () => Promise<EvebleTypes.Message[]>
  ): GivenWhenChain<EventSourceable> {
    this.givenFn = givenFn;
    return new GivenWhenChain<EventSourceable>(this);
  }

  /**
   * The behavior that test scenario specifies.
   * @param whenFn - Callback function.
   * @returns Type matching `WhenThenChain<EventSourceable>`
   */
  public when(
    _description: string,
    whenFn: () => Promise<EvebleTypes.Message[]>
  ): WhenThenChain<EventSourceable> {
    this.whenFn = whenFn;
    return new WhenThenChain<EventSourceable>(this);
  }

  /**
   * Verifies the BDD scenario.
   * @returns verify
   */
  public async verify(): Promise<void> {
    if (this.isValidScenario() === false) {
      throw new InvalidScenarioError();
    }

    if (this.app.isInState(App.STATES.constructed)) {
      await this.app.initialize();
    }
    if (this.app.isInState(App.STATES.running) === false) {
      await this.app.start();
    }

    const asserter: types.EventSourceableBDDAsserter<EventSourceable> =
      new (this.asserter as any)(this);

    try {
      if (this.givenFn !== undefined) {
        await asserter.given(await this.givenFn());
      }
      if (this.whenFn !== undefined) {
        await asserter.when(await this.whenFn());
      }
      if (this.scheduledFn !== undefined) {
        await asserter.schedules(await this.scheduledFn());
      }
      if (this.unscheduledFn !== undefined) {
        await asserter.unschedules(await this.unscheduledFn());
      }
      const result = await asserter.execute();
      if (this.thenFn !== undefined) {
        await this.thenFn(result);
      }
    } catch (e) {
      if (this.throwsFn !== undefined) {
        await this.throwsFn(e);
      } else {
        throw e;
      }
    } finally {
      await this.reset();
    }
  }

  /**
   * Determines whether scenario is defined in valid steps.
   * @returns `true` if scenario is valid, else `false`.
   */
  protected isValidScenario(): boolean {
    return (
      (this.givenFn !== undefined &&
        this.whenFn !== undefined &&
        this.thenFn !== undefined) ||
      (this.givenFn !== undefined &&
        this.whenFn !== undefined &&
        this.throwsFn !== undefined) ||
      (this.whenFn !== undefined && this.throwsFn !== undefined) ||
      (this.whenFn !== undefined && this.thenFn !== undefined) ||
      (this.whenFn !== undefined && this.throwsFn !== undefined)
    );
  }

  /**
   * Resets the state of the scenario.
   * @async
   */
  protected async reset(): Promise<void> {
    this.givenFn = undefined;
    this.whenFn = undefined;
    this.thenFn = undefined;
    this.throwsFn = undefined;
    this.scheduledFn = undefined;
    this.unscheduledFn = undefined;
    this.options = undefined;
  }
}
