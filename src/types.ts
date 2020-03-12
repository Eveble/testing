import { Struct } from '@eveble/eveble';
import { EvebleTypes } from '@eveble/eveble';
import { TestConfig } from './test-config';

/*
https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines

Any type or interface exported in 'root' level of declaration is considered
'first-class' building block.

Types or interfaces enclosed in new dedicated namespace are considered
contracts building blocks for replaceable parts of the system.

This unclutters the availability of names for any other prioritized contracts that would made naming rea
*/
declare global {
  export namespace Chai {
    export interface Assertion {
      structs(expected: Struct[], untestedProps?: string[]): Assertion;
    }
  }
}

export namespace types {
  export interface Scenario {
    getSUT(): EvebleTypes.EventSourceableType;
    getApp(): EvebleTypes.App;
    getAsserter(): types.EventSourceableBDDAsserterType;

    test(sut: EvebleTypes.EventSourceableType): this;
    given(messages: EvebleTypes.Message[]): this;
    when(messages: EvebleTypes.Message[]): this;
    expect(events: EvebleTypes.Event[]): this;
    expectToInclude(includedEvents: EvebleTypes.Event[]): this;
    expectToFailWith(error: any, errorMessage?: string): this;
    throws(error: any, errorMessage?: string): this;
    schedules(commands: EvebleTypes.Command[]): this;
    unschedules(commands: EvebleTypes.Command[]): this;
    verify(config: TestConfig): Promise<boolean>;
  }

  export interface EventSourceableBDDAsserter {
    getSUT(): EvebleTypes.EventSourceableType;
    getApp(): EvebleTypes.App;
    getConfig(): TestConfig;

    getQueue(): EvebleTypes.Message[];
    getExpectedEvents(): EvebleTypes.Event[];
    getPublishedEvents(): EvebleTypes.Event[];
    getScheduledCommands(): EvebleTypes.Command[];
    getExpectedScheduledCommands(): EvebleTypes.Command[];
    getUnscheduledCommands(): EvebleTypes.Command[];
    getExpectedUnscheduledCommands(): EvebleTypes.Command[];

    given(messages: EvebleTypes.Message[]): Promise<this>;
    when(messages: EvebleTypes.Message[]): Promise<this>;
    expect(expectedEvents: EvebleTypes.Event[] | Function): Promise<void>;
    expectToInclude(
      expectedEvents: EvebleTypes.Event[] | Function
    ): Promise<void>;
    expectToFailWith(error: any, errorMessage?: string): Promise<void>;
    throws(error: any, errorMessage: string): Promise<void>;
    schedules(commands: EvebleTypes.Command[]): Promise<this>;
    unschedules(commands: EvebleTypes.Command[]): Promise<this>;
  }

  export interface EventSourceableBDDAsserterType {
    new (
      sut: EvebleTypes.EventSourceableType,
      app: EvebleTypes.App,
      config: TestConfig
    ): EventSourceableBDDAsserter;
  }
}
