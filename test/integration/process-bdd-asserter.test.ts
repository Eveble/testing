import {
  Guid,
  AppConfig,
  Injector,
  LoggingConfig,
  EvebleTypes,
} from '@eveble/eveble';
import chai, { expect } from 'chai';
import { CustomerApp } from '../domains/customer/app';
import { CustomerRegistration } from '../domains/customer/customer-registration';
import { RegisterCustomer } from '../domains/customer/customer-commands';
import { evebleChai } from '../../src/chai-assertions/eveble-chai-assertion';
import {
  CustomerRegistrationInitiated,
  CustomerCreated,
  WelcomeEmailSent,
  CustomerRegistrationCompleted,
  WelcomeEmailTriggered,
} from '../domains/customer/customer-events';
import { Feature } from '../../src/components/feature';
import { Scenario } from '../../src/components/scenario';

chai.use(evebleChai);

describe(`Process BDD api`, () => {
  let processId: Guid;
  let customerId: Guid;
  let name: string;

  let injector: EvebleTypes.Injector;
  let app: CustomerApp;

  const { feature } =
    Feature.create<CustomerRegistration>(CustomerRegistration);

  before(async () => {
    injector = new Injector();
    app = new CustomerApp({
      injector,
      config: new AppConfig({
        appId: 'my-app-id',
        logging: new LoggingConfig({ isEnabled: false }),
      }),
    });

    Scenario.create({
      app,
      EventSourceable: CustomerRegistration,
    });
    await app.initialize();
  });

  beforeEach(() => {
    processId = new Guid();
    customerId = new Guid();
    name = 'Jane Doe';
  });

  after(async () => {
    await app.shutdown();
  });

  feature(`can be used to test triggered commands`, async ({ scenario }) => {
    await scenario
      .when('a customer registers', async () => [
        new RegisterCustomer({
          targetId: processId,
          customerId,
          name,
        }),
      ])
      .then('a customer should be created', async ({ events }) => {
        expect(events).to.include.events([
          new CustomerCreated({
            sourceId: customerId,
            name,
          }),
        ]);
      });
  });

  feature(`can be used to test Process state`, async ({ scenario }) => {
    await scenario
      .when('customer is registered', async () => [
        new RegisterCustomer({
          targetId: processId,
          customerId,
          name,
        }),
      ])
      .then(
        'the actual state of registration process should match',
        { targetId: processId },
        async ({ target }) => {
          expect(target).to.have.state(
            new CustomerRegistration({
              id: processId,
              state: 'completed',
              customerId,
              name,
            })
          );
        }
      );
  });

  feature(`can be used to verify process completion`, async ({ scenario }) => {
    await scenario
      .when('customer is registered', async () => [
        new RegisterCustomer({
          targetId: processId,
          customerId,
          name,
        }),
      ])
      .then(
        'the whole registration process should be completed',
        async ({ events }) => {
          expect(events).to.have.events([
            new CustomerRegistrationInitiated({
              sourceId: processId,
              customerId,
              name,
            }),
            new CustomerCreated({
              sourceId: customerId,
              name,
            }),
            new WelcomeEmailTriggered({
              sourceId: processId,
              customerId,
            }),
            new WelcomeEmailSent({
              sourceId: 'email-sending-instance-id',
              customerId,
              email: `Hello ${name}`,
            }),
            new CustomerRegistrationCompleted({
              sourceId: processId,
            }),
          ]);
        }
      );
  });
});
