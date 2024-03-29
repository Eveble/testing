import { Event, Type } from '@eveble/eveble';
import { Todo } from './todo';
import { Title } from './title-vo';

/*
TODO LIST
*/
@Type('TodoList.TodoListCreated')
export class TodoListCreated extends Event<TodoListCreated> {
  title: Title;

  maxItems: number;

  todos: Todo[];
}

@Type('TodoList.TodoAdded')
export class TodoAdded extends Event<TodoAdded> {
  todo: Todo;
}

/*
TODO
*/
@Type('TodoList.TodoCompleted')
export class TodoCompleted extends Event<TodoCompleted> {
  todo: Todo;
}

@Type('TodoList.TodoExpired')
export class TodoExpired extends Event<TodoExpired> {
  todo: Todo;
}
