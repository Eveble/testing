import { EvebleTypes } from '@eveble/eveble';

// Types
import { types } from './types';
// Api
import { Scenario } from './scenario';
import { TestConfig } from './test-config';

// BDD Chain
export {
  BaseChain,
  BaseThenChain,
  WhenThenChain,
  GivenWhenThenChain,
  GivenWhenChain,
} from './components/bdd-chain';
// Asserters
export { EventSourceableBDDAsserter } from './bdd-asserters/event-sourceable-bdd-asserter';
// Chai
export { evebleChai } from './chai-assertions/eveble-chai-assertion';
// Errors
export {
  TestError,
  InvalidAppError,
  InvalidEventSourceableError,
  InvalidMessageError,
  InvalidExpectationError,
} from './errors';
// Environment
export { TestConfig } from './test-config';

export function on(
  app: EvebleTypes.App,
  options?: {
    asserter?: types.EventSourceableBDDAsserterType;
    config?: TestConfig;
  }
): Scenario {
  return new Scenario(app, options);
}

export { types, Scenario };
