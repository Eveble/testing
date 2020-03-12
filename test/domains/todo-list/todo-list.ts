import { Aggregate, define, initial, route, subscribe } from '@eveble/eveble';
import { Title } from './title-vo';
import { Todo } from './todo';
import {
  CreateTodoList,
  AddTodo,
  CompleteTodo,
  ExpireTodo,
} from './todo-list-commands';
import {
  TodoListCreated,
  TodoAdded,
  TodoCompleted,
  TodoExpired,
} from './todo-list-events';
import { TodoExceededError } from './domain-errors';

@define('TodoList.TodoList')
export class TodoList extends Aggregate {
  title: Title;

  todos: Todo[];

  maxItems: number;

  /*
  HANDLES
  */
  /*
  TODO LIST
  */
  CreateTodoList(@initial command: CreateTodoList): void {
    this.record(
      new TodoListCreated(
        this.pickEventProps(command, {
          todos: [],
        })
      )
    );
  }

  /*
  TODO
  */
  AddTodo(@route command: AddTodo): void {
    if (this.in<Todo>('todos').length >= this.maxItems) {
      throw new TodoExceededError(
        this.maxItems.toString(),
        this.title.toString()
      );
    }

    const todo = Todo.from(command);
    this.record(new TodoAdded({ ...this.eventProps(), todo }));

    // In this example we require each todo to be finished in 10 hours
    this.schedule(
      new ExpireTodo({ targetId: this.getId(), id: todo.id }),
      new Date(new Date().getTime() + 36000)
    );
  }

  CompleteTodo(@route command: CompleteTodo): void {
    const foundTodo = this.in<Todo>('todos').findById(command.id);
    foundTodo.on('complete').ensure.is.ableTo();
    this.record(new TodoCompleted({ ...this.eventProps(), todo: foundTodo }));

    // Cancel todo expiration do to its completion
    const assignmentId = foundTodo.id;
    this.unschedule(assignmentId, ExpireTodo);
  }

  ExpireTodo(@route command: ExpireTodo): void {
    const foundTodo = this.in<Todo>('todos').findById(command.id);

    // In case todo is already expired or is completed - ignore delayed command;
    if (foundTodo.on('expire').is.ableTo()) {
      this.record(new TodoExpired({ ...this.eventProps(), todo: foundTodo }));
    }
  }

  /*
  SUBSCRIPTIONS3
  */
  /*
  TODO LIST
  */
  TodoListCreated(@subscribe event: TodoListCreated): void {
    this.assign(event);
  }

  /*
  TODO
  */
  TodoAdded(@subscribe event: TodoAdded): void {
    this.in<Todo>('todos').add(event.todo);
  }

  TodoCompleted(@subscribe event: TodoCompleted): void {
    this.in<Todo>('todos')
      .findById(event.todo.id)
      .complete();
  }

  TodoExpired(@subscribe event: TodoExpired): void {
    this.in<Todo>('todos')
      .findById(event.todo.id)
      .expire();
  }
}
