import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';
import {
  Aggregate,
  Process,
  define,
  Command,
  Guid,
  Event,
  EvebleTypes,
  DomainError,
} from '@eveble/eveble';
import { stubInterface } from 'ts-sinon';
import sinon from 'sinon';
import {
  InvalidAppError,
  InvalidSUTError,
  InvalidExpectationError,
} from '../../src/errors';
import { on, TestConfig } from '../../src/index';
import { types } from '../../src/types';
import { Scenario } from '../../src/scenario';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe(`on`, () => {
  @define('on.MyCommand')
  class MyCommand extends Command<MyCommand> {}
  @define('on.FirstCommand')
  class FirstCommand extends Command<FirstCommand> {}
  @define('on.SecondCommand')
  class SecondCommand extends Command<SecondCommand> {}

  @define('on.MyEvent')
  class MyEvent extends Event<MyEvent> {}
  @define('on.FirstEvent')
  class FirstEvent extends Event<FirstEvent> {}
  @define('on.SecondEvent')
  class SecondEvent extends Event<SecondEvent> {}

  @define('on.MyDomainError')
  class MyDomainError extends DomainError {}

  let app: any;
  let asserter: any;
  let asserterInstance: any;
  let command: MyCommand;
  let firstCommand: FirstCommand;
  let secondCommand: SecondCommand;
  let event: MyEvent;
  let firstEvent: FirstEvent;
  let secondEvent: SecondEvent;

  beforeEach(() => {
    app = stubInterface<EvebleTypes.App>();
    asserterInstance = stubInterface<types.EventSourceableBDDAsserter>();

    asserter = sinon.stub();
    asserter.returns(asserterInstance);
    // Returns
    asserterInstance.given.resolves(true);
    asserterInstance.when.resolves(true);
    asserterInstance.schedules.resolves(true);
    asserterInstance.unschedules.resolves(true);
    asserterInstance.expectToFailWith.resolves(true);
    asserterInstance.expectToInclude.resolves(true);
    asserterInstance.expect.resolves(true);

    command = new MyCommand({
      targetId: new Guid(),
    });
    firstCommand = new FirstCommand({
      targetId: new Guid(),
    });
    secondCommand = new SecondCommand({
      targetId: new Guid(),
    });
    event = new MyEvent({
      sourceId: new Guid(),
    });
  });

  @define('on.MyAggregate')
  class MyAggregate extends Aggregate {}
  @define('on.MyProcess')
  class MyProcess extends Process {}

  describe('construction', () => {
    it(`throws InvalidAppError when app argument is not provided`, () => {
      expect(() => on(undefined as any)).to.throw(
        InvalidAppError,
        'Application was not provided for the test'
      );

      it('creates scenario for passe app as instance of App', () => {
        const scenario = on(app);
        expect(scenario).to.be.instanceof(Scenario);
        expect(scenario.getApp()).to.be.equal(app);
      });

      it('ensures that application is not initialized upon creating new scenario', () => {
        on(app);
        expect(app.initialize).to.not.be.called;
      });

      it('takes optional asserter as second argument on construction as asserter constructor matching EventSourceableBDDAsserterType interface', () => {
        const scenario = on(app, { asserter });
        expect(scenario.getApp()).to.be.equal(app);
        expect(scenario.getAsserter()).to.be.equal(asserter);
      });
      it('takes optional config as second argument on construction as TestConfig instance', () => {
        const scenario = on(app, { config: new TestConfig() });
        expect(scenario.getApp()).to.be.equal(app);
        expect(scenario.getAsserter()).to.be.equal(asserter);
      });
    });
  });

  describe('testing', () => {
    it(`throws InvalidSUTError when SUT argument is not provided`, () => {
      const scenario = on(app);

      expect(() => scenario.test(undefined as any)).to.throw(
        InvalidSUTError,
        'System Under Test(SUT) must be a valid subclass(constructor type) of EventSourceable like Aggregate or Process, got undefined'
      );
    });

    it(`throws InvalidSUTError when provided SUT is not a subclass of EventSourceable(Aggregate or Process)`, () => {
      class MyNotApplicableSUT {}
      const scenario = on(app);
      expect(() => scenario.test(MyNotApplicableSUT as any)).to.throw(
        InvalidSUTError,
        `System Under Test(SUT) must be a valid subclass(constructor type) of EventSourceable like Aggregate or Process, got MyNotApplicableSUT`
      );
    });

    it(`takes SUT as subclass of Aggregate`, () => {
      const scenario = on(app);
      expect(() => scenario.test(MyAggregate)).to.not.throw(InvalidSUTError);
    });

    it(`takes SUT as subclass of Process`, () => {
      const scenario = on(app);
      expect(() => scenario.test(MyProcess)).to.not.throw(InvalidSUTError);
    });
  });

  describe('given', () => {
    it(`takes array of messages that will be used to define test pre-conditions`, async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.given([command]);
      scenario.expect([event]);
      await scenario.verify();
      expect(asserterInstance.given).to.be.calledOnce;
      expect(asserterInstance.given).to.be.calledWithExactly([command]);
    });

    it(`allows chaining given`, async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.given([firstCommand]);
      scenario.given([secondCommand]);
      scenario.expect([event]);
      await scenario.verify();
      expect(asserterInstance.given).to.be.calledOnce;
      expect(asserterInstance.given).to.be.calledWithExactly([
        firstCommand,
        secondCommand,
      ]);
    });
  });

  describe('when', () => {
    it(`takes array of messages that will be used to define testing scenario`, async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.when([command]);
      scenario.expect([event]);
      await scenario.verify();
      expect(asserterInstance.when).to.be.calledOnce;
      expect(asserterInstance.when).to.be.calledWithExactly([command]);
    });

    it(`allows chaining when`, async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.when([firstCommand]);
      scenario.when([secondCommand]);
      scenario.expect([event]);
      await scenario.verify();
      expect(asserterInstance.when).to.be.calledOnce;
      expect(asserterInstance.when).to.be.calledWithExactly([
        firstCommand,
        secondCommand,
      ]);
    });
  });

  describe('expect', () => {
    it(`takes array of Events that will be used to define exact test expectation`, async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.when([command]);
      scenario.expect([event]);
      await scenario.verify();
      expect(asserterInstance.expect).to.be.calledOnce;
      expect(asserterInstance.expect).to.be.calledWithExactly([event]);
    });

    it(`allows chaining expectations`, async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.expect([firstEvent]);
      scenario.expect([secondEvent]);
      await scenario.verify();
      expect(asserterInstance.expect).to.be.calledOnce;
      expect(asserterInstance.expect).to.be.calledWithExactly([
        firstEvent,
        secondEvent,
      ]);
    });

    it(`throws InvalidExpectationError if the inclufing expectation is set prior to defining expectation`, async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.expectToInclude([event]);
      expect(() => scenario.expect([event])).to.throw(
        InvalidExpectationError,
        `Provided scenario must have defined expectation with 'expect', 'expectToInclude'  or 'expectToFail' methods(only one!)`
      );
    });

    it(`throws InvalidExpectationError if the failing expectation is set prior to defining expectation`, async () => {
      const errorMessage = 'my-error-message';

      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.expectToFailWith(MyDomainError, errorMessage);
      expect(() => scenario.expect([event])).to.throw(
        InvalidExpectationError,
        `Provided scenario must have defined expectation with 'expect', 'expectToInclude'  or 'expectToFail' methods(only one!)`
      );
    });
  });

  describe('expectToInclude', () => {
    it(`takes array of Events that will be used to define partial test expectation`, async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.when([command]);
      scenario.expectToInclude([event]);
      await scenario.verify();
      expect(asserterInstance.expectToInclude).to.be.calledOnce;
      expect(asserterInstance.expectToInclude).to.be.calledWithExactly([event]);
    });

    it(`allows chaining including expectations`, async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.expectToInclude([firstEvent]);
      scenario.expectToInclude([secondEvent]);
      await scenario.verify();
      expect(asserterInstance.expectToInclude).to.be.calledOnce;
      expect(asserterInstance.expectToInclude).to.be.calledWithExactly([
        firstEvent,
        secondEvent,
      ]);
    });

    it(`throws InvalidExpectationError if the expectation is set prior to defining inclufing expectation`, async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.expect([event]);
      expect(() => scenario.expectToInclude([event])).to.throw(
        InvalidExpectationError,
        `Provided scenario must have defined expectation with 'expect', 'expectToInclude'  or 'expectToFail' methods(only one!)`
      );
    });

    it(`throws InvalidExpectationError if the failing expectation is set prior to defining including expectation`, async () => {
      const errorMessage = 'my-error-message';

      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.expectToFailWith(MyDomainError, errorMessage);
      expect(() => scenario.expectToInclude([event])).to.throw(
        InvalidExpectationError,
        `Provided scenario must have defined expectation with 'expect', 'expectToInclude'  or 'expectToFail' methods(only one!)`
      );
    });
  });

  describe('expectToFailWith', () => {
    it(`takes subclass of DomainError constructor and message as a string to define exception expectation`, async () => {
      const errorMessage = 'my-error-message';

      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.expectToFailWith(MyDomainError, errorMessage);
      await scenario.verify();
      expect(asserterInstance.expectToFailWith).to.be.calledOnce;
      expect(asserterInstance.expectToFailWith).to.be.calledWithExactly(
        MyDomainError,
        errorMessage
      );
    });

    it(`throws InvalidExpectationError if the expectation is set prior to defining failing expectation`, async () => {
      const errorMessage = 'my-error-message';

      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.expect([event]);
      expect(() =>
        scenario.expectToFailWith(MyDomainError, errorMessage)
      ).to.throw(
        InvalidExpectationError,
        `Provided scenario must have defined expectation with 'expect', 'expectToInclude'  or 'expectToFail' methods(only one!)`
      );
    });
  });

  describe('throws', () => {
    it(`takes subclass of DomainError constructor and message as a string to define exception expectation`, async () => {
      const errorMessage = 'my-error-message';

      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.expectToFailWith(MyDomainError, errorMessage);
      await scenario.verify();
      expect(asserterInstance.expectToFailWith).to.be.calledOnce;
      expect(asserterInstance.expectToFailWith).to.be.calledWithExactly(
        MyDomainError,
        errorMessage
      );
    });
  });

  describe('schedules', () => {
    it(`takes subclass of DomainError constructor and message as a string to define exception expectation`, async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.schedules([command]);
      scenario.expect([event]);
      await scenario.verify();
      expect(asserterInstance.schedules).to.be.calledOnce;
      expect(asserterInstance.schedules).to.be.calledWithExactly([command]);
    });

    it(`allows chaining schedules`, async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.schedules([firstCommand]);
      scenario.schedules([secondCommand]);
      scenario.expect([event]);
      await scenario.verify();
      expect(asserterInstance.schedules).to.be.calledOnce;
      expect(asserterInstance.schedules).to.be.calledWithExactly([
        firstCommand,
        secondCommand,
      ]);
    });
  });

  describe('unschedules', () => {
    it(`takes subclass of DomainError constructor and message as a string to define exception expectation`, async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.unschedules([command]);
      scenario.expect([event]);
      await scenario.verify();
      expect(asserterInstance.unschedules).to.be.calledOnce;
      expect(asserterInstance.unschedules).to.be.calledWithExactly([command]);
    });

    it(`allows chaining unschedules`, async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.unschedules([firstCommand]);
      scenario.unschedules([secondCommand]);
      scenario.expect([event]);
      await scenario.verify();
      expect(asserterInstance.unschedules).to.be.calledOnce;
      expect(asserterInstance.unschedules).to.be.calledWithExactly([
        firstCommand,
        secondCommand,
      ]);
    });
  });

  describe('verify', () => {
    it('throws InvalidExpectationError if expectation is not defined on scenario with expect, expectToInclude or expectToFail', async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      await expect(scenario.verify()).to.eventually.be.rejectedWith(
        InvalidExpectationError,
        `Provided scenario must have defined expectation with 'expect', 'expectToInclude'  or 'expectToFail' methods(only one!)`
      );
    });

    it(`allows to pass expected state on verification`, async () => {
      const scenario = on(app, { asserter });
      scenario.test(MyAggregate);
      scenario.expect([event]);

      const state = sinon.stub();
      await scenario.verify(state);
      expect(asserterInstance.expectState).to.be.calledOnce;
      expect(asserterInstance.expectState).to.be.calledWithExactly(state);
    });
  });
});
