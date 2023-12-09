import { types } from '../types';
import { Scenario } from './scenario';
export declare class Feature<EventSourceable> {
    static features: Map<any, Map<string, Feature<any>>>;
    name: string;
    EventSourceableClass: any;
    scenario: Scenario<EventSourceable>;
    options: types.FeatureOptions;
    expect: Function;
    constructor(name: string, EventSourceableClass: any);
    static create<EvntSrcble>(EventSourceableClass: any): {
        feature: (_description: string, optionsOrCallback: types.FeatureOptions | types.FeatureCallback<EvntSrcble>, callback?: types.FeatureCallback<EvntSrcble>) => void;
    };
    setScenario(scenario: Scenario<EventSourceable>): void;
    setOptions(options: types.FeatureOptions): void;
    execute(description: string, callback: types.FeatureCallback<EventSourceable>): void;
    protected generateApi(): types.FeatureApi<EventSourceable>;
}
