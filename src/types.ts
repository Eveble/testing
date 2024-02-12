/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Struct, EvebleTypes, App, Guid } from '@eveble/eveble';
import { TestConfig } from './test-config';
import { GivenWhenChain, WhenThenChain } from './components/bdd-chain';
import { Scenario } from './components/scenario';

/*
https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines

Any type or interface exported in 'root' level of declaration is considered
'first-class' building block.

Types or interfaces enclosed in new dedicated namespace are considered
contracts building blocks for replaceable parts of the system.

This unclutters the availability of names for any other prioritized contracts
that would made naming hard.
*/
declare global {
  export namespace Chai {
    export interface Assertion {
      structs(expected: Struct[], untestedProps?: string[]): Assertion;
    }
  }
}

export namespace types {
  export type FeatureCallback<EventSourceable> = ({
    scenario,
  }: {
    scenario: Scenario<EventSourceable>;
  }) => Promise<void>;

  export type FeatureOptions = {};

  export type FeatureApi<EventSourceable> = {
    scenario: Scenario<EventSourceable>;
  };

  export type SUTOptions<EventSourceable> = {
    app: App;
    EventSourceable: any;
    config?: TestConfig;
  };

  export type ThenCallback<EventSourceable> = (
    result: types.Result<EventSourceable>
  ) => Promise<void> | void;

  export type RuntimeOptions = { targetId: string | Guid };

  export interface EventSourceableBDDFramework<EventSourceable> {
    getSUT(): EvebleTypes.EventSourceableType;
    getApp(): EvebleTypes.App;
    getAsserter(): types.EventSourceableBDDAsserterType<EventSourceable>;
    given(
      description: string,
      givenFn: () => Promise<EvebleTypes.Message[]>
    ): GivenWhenChain<EventSourceable>;
    when(
      description: string,
      whenFn: () => Promise<EvebleTypes.Message[]>
    ): WhenThenChain<EventSourceable>;
  }

  export type Result<EventSourceable> = {
    events: EvebleTypes.Event[];
    scheduled: EvebleTypes.Command[];
    unscheduled: EvebleTypes.Command[];
    target?: EventSourceable;
  };

  export interface EventSourceableBDDAsserter<EventSourceable> {
    getScenario(): Scenario<EventSourceable>;
    getQueue(): EvebleTypes.Message[];
    getExpectedEvents(): EvebleTypes.Event[];
    getPublishedEvents(): EvebleTypes.Event[];
    getScheduledCommands(): EvebleTypes.Command[];
    getExpectedScheduledCommands(): EvebleTypes.Command[];
    getUnscheduledCommands(): EvebleTypes.Command[];
    getExpectedUnscheduledCommands(): EvebleTypes.Command[];
    given(messages: EvebleTypes.Message[]): Promise<this>;
    when(messages: EvebleTypes.Message[]): Promise<this>;
    unschedules(commands: EvebleTypes.Command[]): Promise<this>;
    schedules(commands: EvebleTypes.Command[]): Promise<this>;
    execute(): Promise<Result<EventSourceable>>;
  }

  export interface EventSourceableBDDAsserterType<EventSourceable> {
    new (
      sut: EvebleTypes.EventSourceableType,
      app: EvebleTypes.App,
      config: TestConfig
    ): EventSourceableBDDAsserter<EventSourceable>;
  }
}
