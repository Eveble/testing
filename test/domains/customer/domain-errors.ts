import { define, DomainError } from '@eveble/eveble';

@define('Customer.InvalidCustomerName')
export class InvalidCustomerName extends DomainError {
  constructor(name: string) {
    super(`Invalid customer name '${name}'`);
  }
}
