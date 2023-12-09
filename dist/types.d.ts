import { Struct, EvebleTypes, App, Guid } from '@eveble/eveble';
import { TestConfig } from './test-config';
import { GivenWhenChain, WhenThenChain } from './components/bdd-chain';
import { Scenario } from './components/scenario';
declare global {
    export namespace Chai {
        interface Assertion {
            structs(expected: Struct[], untestedProps?: string[]): Assertion;
        }
    }
}
export declare namespace types {
    type FeatureCallback<EventSourceable> = ({ scenario, }: {
        scenario: Scenario<EventSourceable>;
    }) => Promise<void>;
    type FeatureOptions = {};
    type FeatureApi<EventSourceable> = {
        scenario: Scenario<EventSourceable>;
    };
    type SUTOptions<EventSourceable> = {
        app: App;
        EventSourceable: any;
        config?: TestConfig;
    };
    type ThenCallback<EventSourceable> = (result: types.Result<EventSourceable>) => Promise<void> | void;
    type RuntimeOptions = {
        targetId: string | Guid;
    };
    interface EventSourceableBDDFramework<EventSourceable> {
        getSUT(): EvebleTypes.EventSourceableType;
        getApp(): EvebleTypes.App;
        getAsserter(): types.EventSourceableBDDAsserterType<EventSourceable>;
        given(description: string, givenFn: () => Promise<EvebleTypes.Message[]>): GivenWhenChain<EventSourceable>;
        when(description: string, whenFn: () => Promise<EvebleTypes.Message[]>): WhenThenChain<EventSourceable>;
    }
    type Result<EventSourceable> = {
        events: EvebleTypes.Event[];
        scheduled: EvebleTypes.Command[];
        unscheduled: EvebleTypes.Command[];
        target?: EventSourceable;
    };
    interface EventSourceableBDDAsserter<EventSourceable> {
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
    interface EventSourceableBDDAsserterType<EventSourceable> {
        new (sut: EvebleTypes.EventSourceableType, app: EvebleTypes.App, config: TestConfig): EventSourceableBDDAsserter<EventSourceable>;
    }
}
