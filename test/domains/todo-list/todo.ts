import { define, Entity } from '@eveble/eveble';
import { Title } from './title-vo';

@define('TodoList.Todo')
export class Todo extends Entity {
  static STATES = {
    created: 'created',
    completed: 'completed',
    expired: 'expired',
  };

  title: Title;

  constructor(props: Partial<Todo>) {
    super(props);
    if (!props.state) {
      this.setState(Todo.STATES.created);
    }
  }

  complete(): void {
    this.on('complete').ensure.is.inState(Todo.STATES.created);
    this.setState(Todo.STATES.completed);
  }

  expire(): void {
    this.on('expire').ensure.is.inState(Todo.STATES.created);
    this.setState(Todo.STATES.expired);
  }
}
