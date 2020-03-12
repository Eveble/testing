import { Guid, Command, define } from '@eveble/eveble';

@define('Customer.RegisterCustomer')
export class RegisterCustomer extends Command {
  customerId: string | Guid;

  customerName: string;
}

@define('Customer.CreateCustomer')
export class CreateCustomer extends Command {
  name: string;
}

@define('Customer.ChangeCustomerName')
export class ChangeCustomerName extends Command {
  name: string;
}

@define('Customer.SendWelcomeEmail')
export class SendWelcomeEmail extends Command {
  customerId: string | Guid;

  customerName: string;
}
