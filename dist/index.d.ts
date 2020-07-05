import { EvebleTypes } from '@eveble/eveble';
import { types } from './types';
import { Scenario } from './scenario';
export { EventSourceableBDDAsserter } from './bdd-asserters/event-sourceable-bdd-asserter';
export { chaiStructAssertion } from './chai-assertions/chai-struct-assertion';
export { TestError, InvalidAppError, InvalidSUTError, InvalidMessageError, InvalidExpectationError, } from './errors';
export { TestConfig } from './test-config';
export declare function on(app: EvebleTypes.App, asserter?: types.EventSourceableBDDAsserterType): Scenario;
export { types, Scenario };
