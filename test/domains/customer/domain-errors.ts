import { Type, DomainError } from '@eveble/eveble';

@Type('Customer.InvalidCustomerName')
export class InvalidCustomerName extends DomainError {
  constructor(name: string) {
    super(`Invalid customer name '${name}'`);
  }
}
