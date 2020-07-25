import { EvebleTypes } from '@eveble/eveble';

// Types
import { types } from './types';
// Api
import { Scenario } from './scenario';
import { TestConfig } from './test-config';

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
  options?: {
    asserter?: types.EventSourceableBDDAsserterType;
    config?: TestConfig;
  }
): Scenario {
  return new Scenario(app, options);
}

export { types, Scenario };
