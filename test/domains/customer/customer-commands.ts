import { Guid, Command, Type } from '@eveble/eveble';

@Type('Customer.RegisterCustomer')
export class RegisterCustomer extends Command<RegisterCustomer> {
  customerId: string | Guid;

  name: string;
}

@Type('Customer.CreateCustomer')
export class CreateCustomer extends Command<CreateCustomer> {
  name: string;
}

@Type('Customer.ChangeCustomerName')
export class ChangeCustomerName extends Command<ChangeCustomerName> {
  name: string;
}

@Type('Customer.SendWelcomeEmail')
export class SendWelcomeEmail extends Command<SendWelcomeEmail> {
  customerId: string | Guid;

  customerName: string;
}
