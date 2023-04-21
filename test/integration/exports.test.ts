import { EvebleTypes } from '@eveble/eveble';
import { expect } from 'chai';

// Asserters
import { stubInterface } from 'ts-sinon';
import { EventSourceableBDDAsserter } from '../../src/bdd-asserters/event-sourceable-bdd-asserter';
// Chai
import { chaiStructAssertion } from '../../src/chai-assertions/chai-struct-assertion';
// Errors
import {
  TestError,
  InvalidAppError,
  InvalidSUTError,
  InvalidMessageError,
  InvalidExpectationError,
} from '../../src/errors';
// Api
import { Scenario } from '../../src/scenario';
// Environment
import { TestConfig } from '../../src/test-config';

import {
  // Asserters
  EventSourceableBDDAsserter as EventSourceableBDDAsserterExported,
  // Chai
  chaiStructAssertion as chaiStructAssertionExported,
  // Errors
  TestError as TestErrorExported,
  InvalidAppError as InvalidAppErrorExported,
  InvalidSUTError as InvalidSUTErrorExported,
  InvalidMessageError as InvalidMessageErrorExported,
  InvalidExpectationError as InvalidExpectationErrorExported,
  // Api
  Scenario as ScenarioExported,
  on,
  // Environment
  TestConfig as TestConfigExported,
} from '../../src/index';

describe(`exports`, () => {
  describe('asserters', () => {
    it('EventSourceableBDDAsserter', () => {
      expect(EventSourceableBDDAsserter).to.be.equal(
        EventSourceableBDDAsserterExported
      );
    });
  });
  describe('chai', () => {
    it('chaiStructAssertion', () => {
      expect(chaiStructAssertion).to.be.equal(chaiStructAssertionExported);
    });
  });
  describe('errors', () => {
    it('TestError', () => {
      expect(TestError).to.be.equal(TestErrorExported);
    });
    it('InvalidAppError', () => {
      expect(InvalidAppError).to.be.equal(InvalidAppErrorExported);
    });
    it('InvalidSUTError', () => {
      expect(InvalidSUTError).to.be.equal(InvalidSUTErrorExported);
    });
    it('InvalidMessageError', () => {
      expect(InvalidMessageError).to.be.equal(InvalidMessageErrorExported);
    });
    it('InvalidExpectationError', () => {
      expect(InvalidExpectationError).to.be.equal(
        InvalidExpectationErrorExported
      );
    });
  });
  describe('api', () => {
    it('Scenario', () => {
      expect(Scenario).to.be.equal(ScenarioExported);
    });
    it('on', () => {
      const app = stubInterface<EvebleTypes.App>();
      expect(on(app)).to.be.instanceof(Scenario);
    });
  });
  describe('environment', () => {
    it('TestConfig', () => {
      expect(TestConfig).to.be.equal(TestConfigExported);
    });
  });
});
