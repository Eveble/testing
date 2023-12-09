import { EvebleTypes } from '@eveble/eveble';
import { types } from '../types';
import { GivenWhenChain, WhenThenChain } from './bdd-chain';
import { TestConfig } from '../test-config';
export declare class Scenario<EventSourceable> implements types.EventSourceableBDDFramework<EventSourceable> {
    app: EvebleTypes.App;
    EventSourceableClass: EvebleTypes.EventSourceableType;
    config: TestConfig;
    protected asserter: types.EventSourceableBDDAsserterType<EventSourceable>;
    givenFn?: Function;
    whenFn?: Function;
    scheduledFn?: Function;
    unscheduledFn?: Function;
    thenFn?: Function;
    throwsFn?: Function;
    options?: types.RuntimeOptions;
    constructor(EventSourceableClass: EvebleTypes.EventSourceableType, app: EvebleTypes.App, config?: TestConfig, asserter?: types.EventSourceableBDDAsserterType<EventSourceable>);
    static create<EvntSrcble>(props: types.SUTOptions<EvntSrcble>): {
        scenario: Scenario<EvntSrcble>;
    };
    getEventSourceable(): EvebleTypes.EventSourceableType;
    getApp(): EvebleTypes.App;
    getSUT(): EvebleTypes.EventSourceableType;
    getAsserter(): types.EventSourceableBDDAsserterType<EventSourceable>;
    getConfig(): TestConfig;
    setRuntimeOptions(options: types.RuntimeOptions): void;
    getRuntimeOptions(): types.RuntimeOptions | undefined;
    hasRuntimeOptions(): boolean;
    given(_description: string, givenFn: () => Promise<EvebleTypes.Message[]>): GivenWhenChain<EventSourceable>;
    when(_description: string, whenFn: () => Promise<EvebleTypes.Message[]>): WhenThenChain<EventSourceable>;
    verify(): Promise<void>;
    protected isValidScenario(): boolean;
    protected reset(): Promise<void>;
}
