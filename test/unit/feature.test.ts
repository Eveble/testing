import { stubInterface } from 'ts-sinon';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import { Aggregate, Type } from '@eveble/eveble';
import sinonChai from 'sinon-chai';
import { Feature } from '../../src/components/feature';
import { MyAggregate } from '../domains/test-examples';
import { Scenario } from '../../src/components/scenario';

chai.use(sinonChai);

describe(`Feature`, () => {
  const name = 'my-feature';
  let feature: Feature<MyAggregate>;
  let scenario: any;

  beforeEach(() => {
    feature = new Feature<MyAggregate>(name, MyAggregate);
    scenario = stubInterface<Scenario<MyAggregate>>();
  });

  describe('creation', () => {
    const description = 'my-description';

    it('defines helper function for defined Resolver', () => {
      const helpers = Feature.create<MyAggregate>(MyAggregate);
      expect(helpers.feature).to.be.a('function');
    });

    it('ensures that test is executed', async () => {
      const executeSpy = sinon.spy(Feature.prototype, 'execute');

      const callback = sinon.stub();

      const helpers = Feature.create<MyAggregate>(MyAggregate);
      await helpers.feature(description, {}, callback);

      expect(executeSpy).to.be.calledOnce;
      expect(executeSpy).to.be.calledWith(description, callback);

      (Feature as any).prototype.execute.restore();
    });

    it('defines options for feature test', async () => {
      const setOptionsSpy = sinon.spy(Feature.prototype, 'setOptions');

      const callback = sinon.stub();
      const options = {};

      const helpers = Feature.create<MyAggregate>(MyAggregate);
      await helpers.feature(description, options, callback);

      expect(setOptionsSpy).to.be.calledOnce;
      expect(setOptionsSpy).to.be.calledWith(options);

      (Feature as any).prototype.setOptions.restore();
    });

    it('ensures that feature test is stored on Feature.features mapping for easier testing', async () => {
      @Type('OtherAggregate')
      class OtherAggregate extends Aggregate {}

      const callback = sinon.stub();

      const helpers = Feature.create<OtherAggregate>(OtherAggregate);
      await helpers.feature(description, {}, callback);

      expect(Feature.features.has('OtherAggregate')).to.be.true;
      expect(Feature.features.get('OtherAggregate')).to.be.a('map');
      expect(Feature.features.get('OtherAggregate')?.size).to.be.equal(1);
    });

    it('allows to skip defining option argument', async () => {
      const executeSpy = sinon.spy(Feature.prototype, 'execute');
      const setOptionsSpy = sinon.spy(Feature.prototype, 'setOptions');

      const callback = sinon.stub();

      const helpers = Feature.create<MyAggregate>(MyAggregate);
      await helpers.feature(description, callback);

      expect(setOptionsSpy).to.be.calledOnce;
      expect(setOptionsSpy).to.be.calledWithMatch({});
      expect(executeSpy).to.be.calledOnce;
      expect(executeSpy).to.be.calledWith(description, callback);

      (Feature as any).prototype.execute.restore();
      (Feature as any).prototype.setOptions.restore();
    });
  });

  describe('setScenario', () => {
    it('sets the scenario on feature', () => {
      feature.setScenario(scenario);

      expect(feature.scenario).to.equal(scenario);
    });
  });
});
