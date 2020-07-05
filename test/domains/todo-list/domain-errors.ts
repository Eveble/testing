import { define, DomainError } from '@eveble/eveble';

@define('TodoList.TodoExceededError')
export class TodoExceededError extends DomainError {
  constructor(maxItems: string, title: string) {
    super(`Cannot add more than ${maxItems} item to list ${title}`);
  }
}
