import { Guid } from '@eveble/eveble';

import { types } from '../types';
import { Scenario } from './scenario';
import { EventSourceableFeatureMappingsNotFoundError } from '../errors';

/**
 * Authorization testing framework.
 */
export class Feature<EventSourceable> {
  static features: Map<any, Map<string, Feature<any>>> = new Map();

  name: string;

  EventSourceableClass: any;

  scenario: Scenario<EventSourceable>;

  options: types.FeatureOptions;

  expect: Function;

  /**
   * Creates an instance of Bouncer.
   * @param name - Name of the feature.
   * @param EventSourceableClass - EventSourceable class.
   */
  constructor(name: string, EventSourceableClass: any) {
    this.name = name;
    this.EventSourceableClass = EventSourceableClass;
  }

  /**
   * Factory method for generating testing api.
   * @param EventSourceableClass - EventSourceable class.
   * @returns Object with feature as a function.
   */
  static create<EvntSrcble>(EventSourceableClass: any): {
    feature: (
      _description: string,
      optionsOrCallback:
        | types.FeatureOptions
        | types.FeatureCallback<EvntSrcble>, // [⚠️] Keep same API style like E2E testing framework for futureproofing the design and extendability
      callback?: types.FeatureCallback<EvntSrcble>
    ) => void;
  } {
    function feature(
      description: string,
      optionsOrCallback:
        | types.FeatureOptions
        | types.FeatureCallback<EvntSrcble>,
      callback?: types.FeatureCallback<EvntSrcble>
    ) {
      let cb: types.FeatureCallback<EvntSrcble>;
      let options: types.FeatureOptions = {};
      if (typeof optionsOrCallback === 'function') {
        cb = optionsOrCallback as types.FeatureCallback<EvntSrcble>;
      } else {
        cb = callback as types.FeatureCallback<EvntSrcble>;
        options = optionsOrCallback;
      }
      const instance = new Feature<EvntSrcble>(
        description,
        EventSourceableClass
      );
      instance.setOptions(options);

      const eventSourceableName = EventSourceableClass.name;
      if (Feature.features.has(eventSourceableName) === false) {
        Feature.features.set(eventSourceableName, new Map());
      }
      const esFeatures = Feature.features.get(eventSourceableName);
      if (esFeatures === undefined) {
        throw new EventSourceableFeatureMappingsNotFoundError(
          eventSourceableName
        );
      }
      esFeatures.set(new Guid().toString(), instance);
      instance.execute(description, cb);
    }

    return { feature };
  }

  /**
   * Sets scenario instance.
   * @param scenario - Instance of `Scenario`.
   */
  public setScenario(scenario: Scenario<EventSourceable>): void {
    this.scenario = scenario;
  }

  /**
   * Sets feature options.
   * @param options - Type matching `FeatureOptions`.
   */
  public setOptions(options: types.FeatureOptions): void {
    this.options = options;
  }

  /**
   * Executes feature.
   * @param description - Description of the feature.
   * @param callback - Callback function that will be defined for each test case actor.

   */
  public execute(
    description: string,
    callback: types.FeatureCallback<EventSourceable>
  ): void {
    it(description, async () => {
      await callback(this.generateApi());
    });
  }

  /**
   * Generates feature api.
   * @returns Type matching `FeatureApi<EventSourceable>`.
   */
  protected generateApi(): types.FeatureApi<EventSourceable> {
    return {
      scenario: this.scenario,
    };
  }
}
