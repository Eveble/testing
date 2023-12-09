import { Process, Type, initial, route, Guid, subscribe } from '@eveble/eveble';
import {
  RegisterCustomer,
  CreateCustomer,
  SendWelcomeEmail,
} from './customer-commands';
import {
  CustomerRegistrationInitiated,
  CustomerCreated,
  WelcomeEmailTriggered,
  WelcomeEmailSent,
  CustomerRegistrationCompleted,
} from './customer-events';
import { InvalidCustomerName } from './domain-errors';

@Type('ProcessBDDApi.CustomerRegistration')
export class CustomerRegistration extends Process {
  public static STATES = {
    creatingCustomer: 'creatingCustomer',
    sendingWelcomeEmail: 'sendingWelcomeEmail',
    completed: 'completed',
  };

  customerId: string | Guid;

  name: string;

  /*
    HANDLES
  */
  RegisterCustomer(@initial command: RegisterCustomer): void {
    if (command.name === 'Invalid') {
      throw new InvalidCustomerName(command.name);
    }

    this.trigger(
      new CreateCustomer({
        targetId: command.customerId,
        name: command.name,
      })
    );

    this.record(
      new CustomerRegistrationInitiated({
        ...this.eventProps(),
        customerId: command.customerId,
        name: command.name,
      })
    );
  }

  /*
    EXTERNAL SUBSCRIPTIONS
  */
  CustomerCreated(@route _event: CustomerCreated): void {
    this.trigger(
      new SendWelcomeEmail({
        targetId: this.customerId,
        customerId: this.customerId,
        customerName: this.name,
      })
    );

    this.record(
      new WelcomeEmailTriggered({
        ...this.eventProps(),
        customerId: this.customerId,
      })
    );
  }

  WelcomeEmailSent(@route _event: WelcomeEmailSent): void {
    this.record(new CustomerRegistrationCompleted(this.eventProps()));
  }

  /*
    INTERNAL SUBSCRIPTIONS
  */
  CustomerRegistrationInitiated(
    @subscribe event: CustomerRegistrationInitiated
  ): void {
    this.assign(event);
    this.setState(CustomerRegistration.STATES.creatingCustomer);
  }

  WelcomeEmailTriggered(@subscribe _event: WelcomeEmailTriggered): void {
    this.setState(CustomerRegistration.STATES.sendingWelcomeEmail);
  }

  CustomerRegistrationCompleted(
    @subscribe _event: CustomerRegistrationCompleted
  ): void {
    this.setState(CustomerRegistration.STATES.completed);
  }
}
