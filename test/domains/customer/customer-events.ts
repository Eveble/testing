import { Guid, Event, Type } from '@eveble/eveble';

@Type('Customer.CustomerRegistrationInitiated')
export class CustomerRegistrationInitiated extends Event<CustomerRegistrationInitiated> {
  customerId: string | Guid;

  name: string;
}

@Type('Customer.CustomerCreated')
export class CustomerCreated extends Event<CustomerCreated> {
  name: string;
}

@Type('Customer.CustomerNameChanged')
export class CustomerNameChanged extends Event<CustomerNameChanged> {
  name: string;
}

@Type('Customer.WelcomeEmailTriggered')
export class WelcomeEmailTriggered extends Event<WelcomeEmailTriggered> {
  customerId: string | Guid;
}

@Type('Customer.WelcomeEmailSent')
export class WelcomeEmailSent extends Event<WelcomeEmailSent> {
  email: string;

  customerId: string | Guid;
}

@Type('Customer.CustomerRegistrationCompleted')
export class CustomerRegistrationCompleted extends Event<CustomerRegistrationCompleted> {}
