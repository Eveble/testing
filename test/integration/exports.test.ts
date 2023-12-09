import { EvebleTypes } from '@eveble/eveble';
import { expect } from 'chai';

// Asserters
import { stubInterface } from 'ts-sinon';
import { EventSourceableBDDAsserter } from '../../src/bdd-asserters/event-sourceable-bdd-asserter';
// Chai
import { evebleChai } from '../../src/chai-assertions/eveble-chai-assertion';
// Errors
import {
  TestError,
  InvalidAppError,
  InvalidEventSourceableError,
  InvalidMessageError,
  InvalidExpectationError,
  InvalidScenarioError,
  EventSourceableFeatureMappingsNotFoundError,
} from '../../src/errors';
// Api
import { Scenario } from '../../src/scenario';
// Environment
import { TestConfig } from '../../src/test-config';
// BDD Chain
import {
  BaseChain,
  BaseThenChain,
  WhenThenChain,
  GivenWhenThenChain,
  GivenWhenChain,
} from '../../src/components/bdd-chain';

import {
  // Asserters
  EventSourceableBDDAsserter as EventSourceableBDDAsserterExported,
  // Chai
  evebleChai as evebleChaiExported,
  // Errors
  TestError as TestErrorExported,
  InvalidAppError as InvalidAppErrorExported,
  InvalidEventSourceableError as InvalidEventSourceableErrorExported,
  InvalidMessageError as InvalidMessageErrorExported,
  InvalidExpectationError as InvalidExpectationErrorExported,
  InvalidScenarioError as InvalidScenarioErrorExported,
  EventSourceableFeatureMappingsNotFoundError as EventSourceableFeatureMappingsNotFoundErrorExported,
  // Api
  Scenario as ScenarioExported,
  // Environment
  TestConfig as TestConfigExported,
  // BDD Chain
  BaseChain as BaseChainExported,
  BaseThenChain as BaseThenChainExported,
  WhenThenChain as WhenThenChainExported,
  GivenWhenThenChain as GivenWhenThenChainExported,
  GivenWhenChain as GivenWhenChainExported,
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
    it('evebleChai', () => {
      expect(evebleChai).to.be.equal(evebleChaiExported);
    });
  });
  describe('errors', () => {
    it('TestError', () => {
      expect(TestError).to.be.equal(TestErrorExported);
    });
    it('InvalidAppError', () => {
      expect(InvalidAppError).to.be.equal(InvalidAppErrorExported);
    });
    it('InvalidEventSourceableError', () => {
      expect(InvalidEventSourceableError).to.be.equal(
        InvalidEventSourceableErrorExported
      );
    });
    it('InvalidMessageError', () => {
      expect(InvalidMessageError).to.be.equal(InvalidMessageErrorExported);
    });
    it('InvalidExpectationError', () => {
      expect(InvalidExpectationError).to.be.equal(
        InvalidExpectationErrorExported
      );
    });
    it('InvalidScenarioError', () => {
      expect(InvalidScenarioError).to.be.equal(InvalidScenarioErrorExported);
    });
    it('EventSourceableFeatureMappingsNotFoundError', () => {
      expect(EventSourceableFeatureMappingsNotFoundError).to.be.equal(
        EventSourceableFeatureMappingsNotFoundErrorExported
      );
    });
  });
  describe('api', () => {
    it('Scenario', () => {
      expect(Scenario).to.be.equal(ScenarioExported);
    });
  describe('BDD chain', () => {
    it('BaseChain', () => {
      expect(BaseChain).to.be.equal(BaseChainExported);
    });
    it('BaseThenChain', () => {
      expect(BaseThenChain).to.be.equal(BaseThenChainExported);
    });
    it('WhenThenChain', () => {
      expect(WhenThenChain).to.be.equal(WhenThenChainExported);
    });
    it('GivenWhenThenChain', () => {
      expect(GivenWhenThenChain).to.be.equal(GivenWhenThenChainExported);
    });
    it('GivenWhenChain', () => {
      expect(GivenWhenChain).to.be.equal(GivenWhenChainExported);
    });
  });
  describe('environment', () => {
    it('TestConfig', () => {
      expect(TestConfig).to.be.equal(TestConfigExported);
    });
  });
});
