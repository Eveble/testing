import { Struct, EvebleTypes } from '@eveble/eveble';
import { TestConfig } from './test-config';
declare global {
    export namespace Chai {
        interface Assertion {
            structs(expected: Struct[], untestedProps?: string[]): Assertion;
        }
    }
}
export declare namespace types {
    interface Scenario {
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
    interface EventSourceableBDDAsserter {
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
        expectToInclude(expectedEvents: EvebleTypes.Event[] | Function): Promise<void>;
        expectToFailWith(error: any, errorMessage?: string): Promise<void>;
        throws(error: any, errorMessage: string): Promise<void>;
        schedules(commands: EvebleTypes.Command[]): Promise<this>;
        unschedules(commands: EvebleTypes.Command[]): Promise<this>;
        expectState(expectedState: EvebleTypes.Props): this;
    }
    interface EventSourceableBDDAsserterType {
        new (sut: EvebleTypes.EventSourceableType, app: EvebleTypes.App, config: TestConfig): EventSourceableBDDAsserter;
    }
}
