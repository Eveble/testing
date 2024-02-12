import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';
import { Guid, EvebleTypes, App, Aggregate, Type } from '@eveble/eveble';
import { stubInterface } from 'ts-sinon';
import sinon from 'sinon';
import {
  EventSourceableFeatureMappingsNotFoundError,
  InvalidAppError,
  InvalidEventSourceableError,
  InvalidScenarioError,
} from '../../src/errors';
import {
  GivenWhenChain,
  GivenWhenThenChain,
  WhenThenChain,
} from '../../src/components/bdd-chain';
import { types } from '../../src/types';
import { Scenario } from '../../src/components/scenario';
import { TestConfig } from '../../src/test-config';
import {
  MyAggregate,
  MyDomainError,
  MyProcess,
} from '../domains/test-examples';
import { Feature } from '../../src/components/feature';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe(`Scenario`, () => {
  let app: any;
  let scenario;
  const config = new TestConfig();
  let asserter: any;
  let asserterInstance: any;

  const errorMessage = 'my-error-message';
  const error = new MyDomainError({ message: errorMessage });

  let givenFn: any;
  let whenFn: any;
  let thenFn: any;
  let throwsFn: any;
  let scheduledFn: any;
  let unscheduledFn: any;
  const givenDesc = 'my-given-description';
  const whenDesc = 'my-when-description';
  const thenDesc = 'my-then-description';
  const throwsDesc = 'my-throws-description';
  const schedulesDesc = 'my-schedules-description';
  const unscheduledDesc = 'my-unschedules-description';

  beforeEach(() => {
    app = stubInterface<EvebleTypes.App>();
    asserterInstance =
      stubInterface<types.EventSourceableBDDAsserter<MyAggregate>>();

    asserter = sinon.stub();
    asserter.returns(asserterInstance);

    givenFn = sinon.stub();
    whenFn = sinon.stub();
    thenFn = sinon.stub();
    throwsFn = sinon.stub();
    scheduledFn = sinon.stub();
    unscheduledFn = sinon.stub();

    scenario = new Scenario(MyAggregate, app, config, asserter);
  });

  describe('construction', () => {
    it('takes EventSourceable as MyAggregate', () => {
      const scnr = new Scenario(MyAggregate, app);
      expect(scnr.getEventSourceable()).to.be.equal(MyAggregate);
    });

    it('takes EventSourceable as MyProcess', () => {
      const scnr = new Scenario(MyProcess, app);
      expect(scnr.getEventSourceable()).to.be.equal(MyProcess);
    });

    it('should throw InvalidEventSourceableError if EventSourceableClass is invalid', () => {
      class MyClass {}
      expect(() => new Scenario(MyClass as any, app)).to.throw(
        InvalidEventSourceableError,
        `System Under Test(SUT) must be a valid subclass(constructor type) of EventSourceable like Aggregate or Process, got MyClass`
      );
    });

    it('takes app as instance of App', () => {
      const scnr = new Scenario(MyAggregate, app);
      expect(scnr.getApp()).to.be.equal(app);
    });

    it('should throw InvalidAppError if app is undefined', () => {
      expect(() => new Scenario(MyAggregate, undefined as any)).to.throw(
        InvalidAppError,
        'Application was not provided for the test'
      );
    });

    it('takes optional third argument config as TestConfig', () => {
      const cfg = new TestConfig({ untestedProperties: ['foo', 'bar'] });

      const scnr = new Scenario(MyAggregate, app, cfg);
      expect(scnr.getConfig()).to.equal(cfg);
    });

    it('takes optional asserter as fourth argument on construction as asserter constructor matching EventSourceableBDDAsserterType interface', () => {
      const scnr = new Scenario(MyAggregate, app, undefined, asserter);
      expect(scnr.getApp()).to.be.equal(app);
      expect(scnr.getAsserter()).to.be.equal(asserter);
    });

    it('does not initialize application upon creating new scenario', () => {
      new Scenario(MyAggregate, app);
      expect(app.initialize).to.not.be.called;
    });
  });

  describe('creation', () => {
    const description = 'my-description';
    const options = {};
    let callback: any;

    beforeEach(() => {
      Feature.features.set('MyAggregate', new Map());
      callback = sinon.stub();
    });
    it('throws EventSourceableFeatureMappingsNotFoundError if there are no features present for EventSourceable', () => {
      @Type('NonFeaturedAggregated')
      class NonFeaturedAggregated extends Aggregate {}

      expect(() =>
        Scenario.create({
          app,
          EventSourceable: NonFeaturedAggregated,
        })
      ).to.throw(
        EventSourceableFeatureMappingsNotFoundError,
        `Mapping for event sourceable 'NonFeaturedAggregated' not found`
      );
    });

    it('sets the scenario to each feature for defined EventSourceable and returns object with scenario as instance Scenario', async () => {
      const { feature } = Feature.create<MyAggregate>(MyAggregate);
      await feature(description, options, callback);

      const obj = Scenario.create({
        app,
        EventSourceable: MyAggregate,
      });
      const features = Feature.features.get('MyAggregate') as Map<
        string,
        Feature<MyAggregate>
      >;
      for (const [, feat] of features.entries()) {
        expect(feat.scenario).to.be.equal(obj.scenario);
      }
    });
  });

  describe('given-when-then', () => {
    describe('given', () => {
      it('should define the given callback and return GivenWhenChain chain', async () => {
        const given = scenario.given(givenDesc, givenFn);
        expect(given).to.be.instanceof(GivenWhenChain);
        expect(scenario.givenFn).to.be.equal(givenFn);
        expect(given.scenario).to.be.equal(scenario);
      });
    });

    describe('when', () => {
      it('should define the when callback and return GivenWhenThenChain chain', async () => {
        const given = scenario.given(givenDesc, givenFn);

        const when = given.when(whenDesc, whenFn);
        expect(when).to.be.instanceof(GivenWhenThenChain);
        expect(scenario.givenFn).to.be.equal(givenFn);
        expect(scenario.whenFn).to.be.equal(whenFn);
        expect(when.scenario).to.be.equal(scenario);
      });

      it('allows define the schedules callback and return GivenWhenThenChain chain', async () => {
        const given = scenario.given(givenDesc, givenFn);
        const when = given.when(whenDesc, whenFn);

        const chain = when.schedules(schedulesDesc, scheduledFn);
        expect(chain).to.be.instanceof(GivenWhenThenChain);
        expect(scenario.scheduledFn).to.be.equal(scheduledFn);
      });

      it('allows define the unscheduled callback and return GivenWhenThenChain chain', async () => {
        const given = scenario.given(givenDesc, givenFn);
        const when = given.when(whenDesc, whenFn);

        const chain = when.unschedules(unscheduledDesc, unscheduledFn);
        expect(chain).to.be.instanceof(GivenWhenThenChain);
        expect(scenario.unscheduledFn).to.be.equal(unscheduledFn);
      });
    });

    describe('then', () => {
      it('should define the then callback and verify scenario', async () => {
        const verifySpy = sinon.spy(scenario, 'verify');

        const given = scenario.given(givenDesc, givenFn);
        const when = given.when(whenDesc, whenFn);
        when.schedules(schedulesDesc, scheduledFn);
        when.unschedules(unscheduledDesc, unscheduledFn);

        await when.then(thenDesc, thenFn);
        expect(verifySpy).to.be.calledOnce;
      });

      it('allows to define runtime options with id property as a string', async () => {
        const given = scenario.given(givenDesc, givenFn);
        const when = given.when(whenDesc, whenFn);
        const runtimeOptions = { id: 'my-id' };
        const setRuntimeOptionsSpy = sinon.spy(scenario, 'setRuntimeOptions');

        await when.then(thenDesc, runtimeOptions, thenFn);

        expect(setRuntimeOptionsSpy).to.be.calledOnce;
        expect(setRuntimeOptionsSpy).to.be.calledWith(runtimeOptions);
      });

      it('allows to define runtime options with id property as a Guid', async () => {
        const given = scenario.given(givenDesc, givenFn);
        const when = given.when(whenDesc, whenFn);
        const runtimeOptions = { id: new Guid() };
        const setRuntimeOptionsSpy = sinon.spy(scenario, 'setRuntimeOptions');

        await when.then(thenDesc, runtimeOptions, thenFn);

        expect(setRuntimeOptionsSpy).to.be.calledOnce;
        expect(setRuntimeOptionsSpy).to.be.calledWith(runtimeOptions);
      });
    });

    describe('throws', () => {
      it('should define the throws callback and verify scenario', async () => {
        const verifySpy = sinon.spy(scenario, 'verify');
        whenFn.throws(error);

        const given = scenario.given(givenDesc, givenFn);
        const when = given.when(whenDesc, whenFn);

        await when.throws(throwsDesc, throwsFn);
        expect(verifySpy).to.be.calledOnce;
      });
    });
  });

  describe('when-then', () => {
    describe('when', () => {
      it('should define the when callback and return WhenThenChain chain', async () => {
        const when = scenario.when(whenDesc, whenFn);
        expect(when).to.be.instanceof(WhenThenChain);
        expect(scenario.givenFn).to.be.undefined;
        expect(scenario.whenFn).to.be.equal(whenFn);
        expect(when.scenario).to.be.equal(scenario);
      });
    });

    describe('then', () => {
      it('allows define the schedules callback and return WhenThenChain chain', async () => {
        const when = scenario.when(whenDesc, whenFn);

        const chain = when.schedules(schedulesDesc, scheduledFn);
        expect(chain).to.be.instanceof(WhenThenChain);
        expect(scenario.scheduledFn).to.be.equal(scheduledFn);
      });

      it('allows define the unscheduled callback and return WhenThenChain chain', async () => {
        const when = scenario.when(whenDesc, whenFn);

        const chain = when.unschedules(unscheduledDesc, unscheduledFn);
        expect(chain).to.be.instanceof(WhenThenChain);
        expect(scenario.unscheduledFn).to.be.equal(unscheduledFn);
      });

      it('should define the then callback and verify scenario', async () => {
        const verifySpy = sinon.spy(scenario, 'verify');

        const when = scenario.when(whenDesc, whenFn);
        when.schedules(schedulesDesc, scheduledFn);
        when.unschedules(unscheduledDesc, unscheduledFn);

        await when.then(thenDesc, thenFn);
        expect(verifySpy).to.be.calledOnce;
        expect(verifySpy).to.be.calledWith();
      });

      it('allows to define runtime options with id property as a string', async () => {
        const when = scenario.when(whenDesc, whenFn);

        const runtimeOptions = { id: 'my-id' };
        const setRuntimeOptionsSpy = sinon.spy(scenario, 'setRuntimeOptions');

        await when.then(thenDesc, runtimeOptions, thenFn);

        expect(setRuntimeOptionsSpy).to.be.calledOnce;
        expect(setRuntimeOptionsSpy).to.be.calledWith(runtimeOptions);
      });

      it('allows to define runtime options with id property as a Guid', async () => {
        const when = scenario.when(whenDesc, whenFn);

        const runtimeOptions = { id: new Guid() };
        const setRuntimeOptionsSpy = sinon.spy(scenario, 'setRuntimeOptions');

        await when.then(thenDesc, runtimeOptions, thenFn);

        expect(setRuntimeOptionsSpy).to.be.calledOnce;
        expect(setRuntimeOptionsSpy).to.be.calledWith(runtimeOptions);
      });
    });

    describe('throws', () => {
      it('should define the throws callback and verify scenario', async () => {
        const verifySpy = sinon.spy(scenario, 'verify');
        whenFn.throws(error);

        const when = scenario.when(whenDesc, whenFn);

        await when.throws(throwsDesc, throwsFn);
        expect(verifySpy).to.be.calledOnce;
        expect(verifySpy).to.be.calledWith();
      });
    });
  });

  describe('verifying', () => {
    it('throws error if scenario is not valid', async () => {
      await expect(scenario.verify()).to.eventually.be.rejectedWith(
        InvalidScenarioError,
        'Please define testing scenario in valid, behavior driven form'
      );
    });

    it('initializes application if its in constructed state', async () => {
      app.isInState.withArgs(App.STATES.constructed).returns(true);

      const scnr = new Scenario(MyProcess, app, config, asserter);
      const given = scnr.given(givenDesc, givenFn);
      const when = given.when(whenDesc, whenFn);

      await when.then(thenDesc, thenFn);

      expect(app.initialize).to.be.calledOnce;
    });

    it('starts application if its not in running state', async () => {
      app.isInState.withArgs(App.STATES.running).returns(false);

      const scnr = new Scenario(MyProcess, app, config, asserter);
      const given = scnr.given(givenDesc, givenFn);
      const when = given.when(whenDesc, whenFn);

      await when.then(thenDesc, thenFn);

      expect(app.start).to.be.calledOnce;
    });

    describe('given-when-then', () => {
      it('ensures all callback are called in given-when-then-chain', async () => {
        const given = scenario.given(givenDesc, givenFn);
        const when = given.when(whenDesc, whenFn);

        await when.then(thenDesc, thenFn);

        expect(givenFn).to.be.calledOnce;
        expect(givenFn).to.be.calledWith();
        expect(whenFn).to.be.calledOnce;
        expect(whenFn).to.be.calledWith();
        expect(thenFn).to.be.calledOnce;
        expect(thenFn).to.be.calledWith();

        expect(unscheduledFn).to.not.be.called;
        expect(scheduledFn).to.not.be.called;
        expect(throwsFn).to.not.be.called;
      });
      it('ensures all callback are called in given-when-throws-chain', async () => {
        asserterInstance.execute.throws(error);

        const given = scenario.given(givenDesc, givenFn);
        const when = given.when(whenDesc, whenFn);

        await when.throws(throwsDesc, throwsFn);

        expect(givenFn).to.be.calledOnce;
        expect(givenFn).to.be.calledWith();
        expect(whenFn).to.be.calledOnce;
        expect(whenFn).to.be.calledWith();
        expect(throwsFn).to.be.calledOnce;
        expect(throwsFn).to.be.calledWith(error);

        expect(unscheduledFn).to.not.be.called;
        expect(scheduledFn).to.not.be.called;
        expect(thenFn).to.not.be.called;
      });

      it('ensures all callback are called in given-when-schedules-unschedules-then-chain', async () => {
        const given = scenario.given(givenDesc, givenFn);
        const when = given.when(whenDesc, whenFn);
        when.schedules(schedulesDesc, scheduledFn);
        when.unschedules(unscheduledDesc, unscheduledFn);

        await when.then(thenDesc, thenFn);
        expect(givenFn).to.be.calledOnce;
        expect(givenFn).to.be.calledWith();
        expect(whenFn).to.be.calledOnce;
        expect(whenFn).to.be.calledWith();
        expect(scheduledFn).to.be.calledOnce;
        expect(scheduledFn).to.be.calledWith();
        expect(unscheduledFn).to.be.calledOnce;
        expect(unscheduledFn).to.be.calledWith();
        expect(thenFn).to.be.calledOnce;
        expect(thenFn).to.be.calledWith();
      });

      it('ensures that scenario properties are reset(set to undefined) on successful finish', async () => {
        const given = scenario.given(givenDesc, givenFn);
        const when = given.when(whenDesc, whenFn);
        when.schedules(schedulesDesc, scheduledFn);
        when.unschedules(unscheduledDesc, unscheduledFn);

        await when.then(thenDesc, thenFn);

        expect(scenario.givenFn).to.be.undefined;
        expect(scenario.whenFn).to.be.undefined;
        expect(scenario.thenFn).to.be.undefined;
        expect(scenario.throwsFn).to.be.undefined;
        expect(scenario.scheduledFn).to.be.undefined;
        expect(scenario.unscheduledFn).to.be.undefined;
        expect(scenario.options).to.be.undefined;
      });
    });

    describe('when-then', () => {
      it('ensures all callback are called in when-then-chain', async () => {
        const when = scenario.when(whenDesc, whenFn);

        await when.then(thenDesc, thenFn);

        expect(whenFn).to.be.calledOnce;
        expect(whenFn).to.be.calledWith();
        expect(thenFn).to.be.calledOnce;
        expect(thenFn).to.be.calledWith();

        expect(givenFn).to.not.be.called;
        expect(unscheduledFn).to.not.be.called;
        expect(scheduledFn).to.not.be.called;
        expect(throwsFn).to.not.be.called;
      });
      it('ensures all callback are called in when-throws-chain', async () => {
        asserterInstance.execute.throws(error);

        const when = scenario.when(whenDesc, whenFn);

        await when.throws(throwsDesc, throwsFn);

        expect(whenFn).to.be.calledOnce;
        expect(whenFn).to.be.calledWith();
        expect(throwsFn).to.be.calledOnce;
        expect(throwsFn).to.be.calledWith(error);

        expect(givenFn).to.not.be.called;
        expect(unscheduledFn).to.not.be.called;
        expect(scheduledFn).to.not.be.called;
        expect(thenFn).to.not.be.called;
      });

      it('ensures all callback are called in when-schedules-unschedules-then-chain', async () => {
        const when = scenario.when(whenDesc, whenFn);
        when.schedules(schedulesDesc, scheduledFn);
        when.unschedules(unscheduledDesc, unscheduledFn);

        await when.then(thenDesc, thenFn);
        expect(whenFn).to.be.calledOnce;
        expect(whenFn).to.be.calledWith();
        expect(scheduledFn).to.be.calledOnce;
        expect(scheduledFn).to.be.calledWith();
        expect(unscheduledFn).to.be.calledOnce;
        expect(unscheduledFn).to.be.calledWith();
        expect(thenFn).to.be.calledOnce;
        expect(thenFn).to.be.calledWith();

        expect(givenFn).to.not.be.called;
        expect(throwsFn).to.not.be.called;
      });

      it('ensures that scenario properties are reset(set to undefined) on successful finish', async () => {
        const when = scenario.when(whenDesc, whenFn);
        when.schedules(schedulesDesc, scheduledFn);
        when.unschedules(unscheduledDesc, unscheduledFn);

        await when.then(thenDesc, thenFn);

        expect(scenario.givenFn).to.be.undefined;
        expect(scenario.whenFn).to.be.undefined;
        expect(scenario.thenFn).to.be.undefined;
        expect(scenario.throwsFn).to.be.undefined;
        expect(scenario.scheduledFn).to.be.undefined;
        expect(scenario.unscheduledFn).to.be.undefined;
        expect(scenario.options).to.be.undefined;
      });
    });
  });
});
