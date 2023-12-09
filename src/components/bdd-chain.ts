import { DomainError, EvebleTypes } from '@eveble/eveble';
import { Scenario } from './scenario';
import { types } from '../types';

export abstract class BaseChain<EventSourceable> {
  public scenario: Scenario<EventSourceable>;

  /**
   * Creates an instance of BaseChain.
   * @param scenario - Instance of `Scenario`.
   */
  constructor(scenario: Scenario<EventSourceable>) {
    this.scenario = scenario;
  }
}

export class BaseThenChain<EventSourceable> extends BaseChain<EventSourceable> {
  /**
   * Creates exception expectation.
   * @param description - Description of case.
   * @param throwsFn - Callback function.
   */
  public async throws(
    _description: string,
    throwsFn: (error: DomainError) => void
  ): Promise<void> {
    this.scenario.throwsFn = throwsFn;
    await this.scenario.verify();
  }
}

export class WhenThenChain<
  EventSourceable
> extends BaseThenChain<EventSourceable> {
  /**
   * The scheduling command behavior that test scenario specifies.
   * @param description - Description of case.
   * @param scheduledFn - Callback function.
   * @returns Type matching `WhenThenChain<EventSourceable>`
   */
  public schedules(
    _description: string,
    scheduledFn: () => Promise<EvebleTypes.Command[]>
  ): GivenWhenThenChain<EventSourceable> {
    this.scenario.scheduledFn = scheduledFn;
    return this;
  }

  /**
   * The unscheduling command behavior that test scenario specifies.
   * @param description - Description of case.
   * @param unscheduledFn - Callback function.
   * @returns Type matching `WhenThenChain<EventSourceable>`
   */
  public unschedules(
    _description: string,
    unscheduledFn: () => Promise<EvebleTypes.Command[]>
  ): GivenWhenThenChain<EventSourceable> {
    this.scenario.unscheduledFn = unscheduledFn;
    return this;
  }

  /**
   * Creates test expectation describing the changes you exactly expect
   * due to the specified behavior.
   * @async
   * @param description - Description of case.
   * @param thenFn - Callback function.
   */
  public async then(
    _description: string,
    thenFnOrOptions: types.ThenCallback<EventSourceable> | types.RuntimeOptions,
    thenFn?: types.ThenCallback<EventSourceable>
  ): Promise<void> {
    if (typeof thenFnOrOptions === 'function') {
      this.scenario.thenFn = thenFnOrOptions;
    } else {
      this.scenario.thenFn = thenFn;
      this.scenario.setRuntimeOptions(thenFnOrOptions);
    }
    await this.scenario.verify();
  }
}

export class GivenWhenThenChain<
  EventSourceable
> extends BaseThenChain<EventSourceable> {
  /**
   * The scheduling command behavior that test scenario specifies.
   * @param description - Description of case.
   * @param scheduledFn - Callback function.
   * @returns Type matching `GivenWhenChain<EventSourceable>`
   */
  public schedules(
    _description: string,
    scheduledFn: () => Promise<EvebleTypes.Command[]>
  ): GivenWhenThenChain<EventSourceable> {
    this.scenario.scheduledFn = scheduledFn;
    return this;
  }

  /**
   * The unscheduling command behavior that test scenario specifies.
   * @param description - Description of case.
   * @param unscheduledFn - Callback function.
   * @returns Type matching `GivenWhenChain<EventSourceable>`
   */
  public unschedules(
    _description: string,
    unscheduledFn: () => Promise<EvebleTypes.Command[]>
  ): GivenWhenThenChain<EventSourceable> {
    this.scenario.unscheduledFn = unscheduledFn;
    return this;
  }

  /**
   * Creates test expectation describing the changes you exactly expect
   * due to the specified behavior.
   * @async
   * @param description - Description of case.
   * @param thenFn - Callback function.
   */
  public async then(
    _description: string,
    thenFnOrOptions: types.ThenCallback<EventSourceable> | types.RuntimeOptions,
    thenFn?: types.ThenCallback<EventSourceable>
  ): Promise<void> {
    if (typeof thenFnOrOptions === 'function') {
      this.scenario.thenFn = thenFnOrOptions;
    } else {
      this.scenario.thenFn = thenFn;
      this.scenario.setRuntimeOptions(thenFnOrOptions);
    }
    await this.scenario.verify();
  }
}

export class GivenWhenChain<
  EventSourceable
> extends BaseChain<EventSourceable> {
  /**
   * The behavior that test scenario specifies.
   * @param description - Description of case.
   * @param whenFn - Callback function.
   * @returns Type matching `GivenWhenThenChain<EventSourceable>`
   */
  public when(
    _description: string,
    whenFn: () => Promise<EvebleTypes.Message[]>
  ): GivenWhenThenChain<EventSourceable> {
    this.scenario.whenFn = whenFn;
    return new GivenWhenThenChain<EventSourceable>(this.scenario);
  }
}
