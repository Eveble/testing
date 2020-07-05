import { Aggregate, define, initial, subscribe, route } from '@eveble/eveble';
import { CreateCustomer, ChangeCustomerName } from './customer-commands';
import { CustomerCreated, CustomerNameChanged } from './customer-events';

@define('Customer.Customer')
export class Customer extends Aggregate {
  name: string;

  /*
  HANDLES
  */
  CreateCustomer(@initial command: CreateCustomer): void {
    this.record(new CustomerCreated(this.pickEventProps(command)));
  }

  ChangeCustomerName(@route command: ChangeCustomerName): void {
    this.record(new CustomerNameChanged(this.pickEventProps(command)));
  }

  /*
  SUBSCRIPTIONS
  */
  CustomerCreated(@subscribe event: CustomerCreated): void {
    this.assign(event);
  }

  CustomerNameChanged(@subscribe event: CustomerNameChanged): void {
    this.assign(event);
  }
}
