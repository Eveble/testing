import { define, Entity, can } from '@eveble/eveble';
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

  @can((task: Todo) => {
    task.on('complete').ensure.is.inState(Todo.STATES.created);
  })
  complete(): void {
    this.setState(Todo.STATES.completed);
  }

  @can((task: Todo) => {
    task.on('expire').ensure.is.inState(Todo.STATES.created);
  })
  expire(): void {
    this.setState(Todo.STATES.expired);
  }
}
