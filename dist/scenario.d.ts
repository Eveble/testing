import { EvebleTypes, DomainError } from '@eveble/eveble';
import { types } from './types';
import { TestConfig } from './test-config';
export declare class Scenario implements types.Scenario {
    protected app: EvebleTypes.App;
    protected asserter: types.EventSourceableBDDAsserterType;
    protected config: TestConfig;
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
        state?: EvebleTypes.Props;
    };
    constructor(app: EvebleTypes.App, options?: {
        asserter?: types.EventSourceableBDDAsserterType;
        config?: TestConfig;
    });
    getApp(): EvebleTypes.App;
    getAsserter(): types.EventSourceableBDDAsserterType;
    getSUT(): EvebleTypes.EventSourceableType;
    test(sut: EvebleTypes.EventSourceableType): this;
    given(messages?: EvebleTypes.Message[]): this;
    when(messages?: EvebleTypes.Message[]): this;
    expect(events?: EvebleTypes.Event[]): this;
    expectToInclude(includedEvents?: EvebleTypes.Event[]): this;
    expectToFailWith(error: any, errorMessage?: string): this;
    throws(error: any, errorMessage?: string): this;
    schedules(commands?: EvebleTypes.Command[]): this;
    unschedules(commands?: EvebleTypes.Command[]): this;
    verify(expectedState?: EvebleTypes.Props): Promise<boolean>;
}
