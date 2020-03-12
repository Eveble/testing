import { Guid, Event, define } from '@eveble/eveble';

@define('Customer.CustomerRegistrationInitiated')
export class CustomerRegistrationInitiated extends Event {
  customerId: string | Guid;

  customerName: string;
}

@define('Customer.CustomerCreated')
export class CustomerCreated extends Event {
  name: string;
}

@define('Customer.CustomerNameChanged')
export class CustomerNameChanged extends Event {
  name: string;
}

@define('Customer.WelcomeEmailTriggered')
export class WelcomeEmailTriggered extends Event {
  customerId: string | Guid;
}

@define('Customer.WelcomeEmailSent')
export class WelcomeEmailSent extends Event {
  email: string;

  customerId: string | Guid;
}

@define('Customer.CustomerRegistrationCompleted')
export class CustomerRegistrationCompleted extends Event {}
