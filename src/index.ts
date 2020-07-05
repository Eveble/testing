import { EvebleTypes } from '@eveble/eveble';

// Types
import { types } from './types';
// Api
import { Scenario } from './scenario';

// Asserters
export { EventSourceableBDDAsserter } from './bdd-asserters/event-sourceable-bdd-asserter';
// Chai
export { chaiStructAssertion } from './chai-assertions/chai-struct-assertion';
// Errors
export {
  TestError,
  InvalidAppError,
  InvalidSUTError,
  InvalidMessageError,
  InvalidExpectationError,
} from './errors';
// Environment
export { TestConfig } from './test-config';

export function on(
  app: EvebleTypes.App,
  asserter?: types.EventSourceableBDDAsserterType
): Scenario {
  return new Scenario(app, asserter);
}

export { types, Scenario };
