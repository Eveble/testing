import {
  Guid,
  AppConfig,
  Injector,
  LoggingConfig,
  EvebleTypes,
} from '@eveble/eveble';
import { CustomerApp } from '../domains/customer/app';
import { CustomerRegistration } from '../domains/customer/customer-registration';
import { RegisterCustomer } from '../domains/customer/customer-commands';
import { on } from '../../src/index';
import {
  CustomerRegistrationInitiated,
  CustomerCreated,
  WelcomeEmailSent,
  CustomerRegistrationCompleted,
  WelcomeEmailTriggered,
} from '../domains/customer/customer-events';

describe(`Process BDD api`, function () {
  let processId: Guid;
  let customerId: Guid;
  let customerName: string;

  let injector: EvebleTypes.Injector;
  let app: CustomerApp;

  before(async () => {
    injector = new Injector();
    app = new CustomerApp({
      injector,
      config: new AppConfig({
        appId: 'my-app-id',
        logging: new LoggingConfig({ isEnabled: false }),
      }),
    });
    await app.initialize();
  });

  beforeEach(() => {
    processId = new Guid();
    customerId = new Guid();
    customerName = 'Jane Doe';
  });

  after(async () => {
    await app.shutdown();
  });

  it(`can be used to test triggered commands`, async () => {
    const scenario = on(app)
      .test(CustomerRegistration)
      .when([
        new RegisterCustomer({
          targetId: processId,
          customerId,
          customerName,
        }),
      ])
      .expectToInclude([
        new CustomerCreated({
          sourceId: customerId,
          name: customerName,
        }),
      ]);
    await scenario.verify();
  });

  it(`can be used to verify process completion`, async () => {
    const scenario = on(app)
      .test(CustomerRegistration)
      .when([
        new RegisterCustomer({
          targetId: processId,
          customerId,
          customerName,
        }),
      ])
      .expect([
        new CustomerRegistrationInitiated({
          sourceId: processId,
          customerId,
          customerName,
        }),
        new CustomerCreated({
          sourceId: customerId,
          name: customerName,
        }),
        new WelcomeEmailTriggered({
          sourceId: processId,
          customerId,
        }),
        new WelcomeEmailSent({
          sourceId: 'email-sending-instance-id',
          customerId,
          email: `Hello ${customerName}`,
        }),
        new CustomerRegistrationCompleted({
          sourceId: processId,
        }),
      ]);
    await scenario.verify();
  });
});
