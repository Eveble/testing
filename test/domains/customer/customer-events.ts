import { Guid, Event, define } from '@eveble/eveble';

@define('Customer.CustomerRegistrationInitiated')
export class CustomerRegistrationInitiated extends Event<CustomerRegistrationInitiated> {
  customerId: string | Guid;

  name: string;
}

@define('Customer.CustomerCreated')
export class CustomerCreated extends Event<CustomerCreated> {
  name: string;
}

@define('Customer.CustomerNameChanged')
export class CustomerNameChanged extends Event<CustomerNameChanged> {
  name: string;
}

@define('Customer.WelcomeEmailTriggered')
export class WelcomeEmailTriggered extends Event<WelcomeEmailTriggered> {
  customerId: string | Guid;
}

@define('Customer.WelcomeEmailSent')
export class WelcomeEmailSent extends Event<WelcomeEmailSent> {
  email: string;

  customerId: string | Guid;
}

@define('Customer.CustomerRegistrationCompleted')
export class CustomerRegistrationCompleted extends Event<CustomerRegistrationCompleted> {}
