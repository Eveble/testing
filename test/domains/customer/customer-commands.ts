import { Guid, Command, define } from '@eveble/eveble';

@define('Customer.RegisterCustomer')
export class RegisterCustomer extends Command<RegisterCustomer> {
  customerId: string | Guid;

  name: string;
}

@define('Customer.CreateCustomer')
export class CreateCustomer extends Command<CreateCustomer> {
  name: string;
}

@define('Customer.ChangeCustomerName')
export class ChangeCustomerName extends Command<ChangeCustomerName> {
  name: string;
}

@define('Customer.SendWelcomeEmail')
export class SendWelcomeEmail extends Command<SendWelcomeEmail> {
  customerId: string | Guid;

  customerName: string;
}
