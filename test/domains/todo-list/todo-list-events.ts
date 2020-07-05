import { Event, define } from '@eveble/eveble';
import { Todo } from './todo';
import { Title } from './title-vo';

/*
TODO LIST
*/
@define('TodoList.TodoListCreated')
export class TodoListCreated extends Event {
  title: Title;

  maxItems: number;

  todos: Todo[];
}

@define('TodoList.TodoAdded')
export class TodoAdded extends Event {
  todo: Todo;
}

/*
TODO
*/
@define('TodoList.TodoCompleted')
export class TodoCompleted extends Event {
  todo: Todo;
}

@define('TodoList.TodoExpired')
export class TodoExpired extends Event {
  todo: Todo;
}
