import { DomainError, EvebleTypes } from '@eveble/eveble';
import { Scenario } from './scenario';
import { types } from '../types';
export declare abstract class BaseChain<EventSourceable> {
    scenario: Scenario<EventSourceable>;
    constructor(scenario: Scenario<EventSourceable>);
}
export declare class BaseThenChain<EventSourceable> extends BaseChain<EventSourceable> {
    throws(_description: string, throwsFn: (error: DomainError) => void): Promise<void>;
}
export declare class WhenThenChain<EventSourceable> extends BaseThenChain<EventSourceable> {
    schedules(_description: string, scheduledFn: () => Promise<EvebleTypes.Command[]>): GivenWhenThenChain<EventSourceable>;
    unschedules(_description: string, unscheduledFn: () => Promise<EvebleTypes.Command[]>): GivenWhenThenChain<EventSourceable>;
    then(_description: string, thenFnOrOptions: types.ThenCallback<EventSourceable> | types.RuntimeOptions, thenFn?: types.ThenCallback<EventSourceable>): Promise<void>;
}
export declare class GivenWhenThenChain<EventSourceable> extends BaseThenChain<EventSourceable> {
    schedules(_description: string, scheduledFn: () => Promise<EvebleTypes.Command[]>): GivenWhenThenChain<EventSourceable>;
    unschedules(_description: string, unscheduledFn: () => Promise<EvebleTypes.Command[]>): GivenWhenThenChain<EventSourceable>;
    then(_description: string, thenFnOrOptions: types.ThenCallback<EventSourceable> | types.RuntimeOptions, thenFn?: types.ThenCallback<EventSourceable>): Promise<void>;
}
export declare class GivenWhenChain<EventSourceable> extends BaseChain<EventSourceable> {
    when(_description: string, whenFn: () => Promise<EvebleTypes.Message[]>): GivenWhenThenChain<EventSourceable>;
}
