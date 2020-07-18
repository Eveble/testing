import { Event, define } from '@eveble/eveble';
import { Todo } from './todo';
import { Title } from './title-vo';

/*
TODO LIST
*/
@define('TodoList.TodoListCreated')
export class TodoListCreated extends Event<TodoListCreated> {
  title: Title;

  maxItems: number;

  todos: Todo[];
}

@define('TodoList.TodoAdded')
export class TodoAdded extends Event<TodoAdded> {
  todo: Todo;
}

/*
TODO
*/
@define('TodoList.TodoCompleted')
export class TodoCompleted extends Event<TodoCompleted> {
  todo: Todo;
}

@define('TodoList.TodoExpired')
export class TodoExpired extends Event<TodoExpired> {
  todo: Todo;
}
