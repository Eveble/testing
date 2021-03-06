import { Guid, Command, define } from '@eveble/eveble';
import { Title } from './title-vo';

/*
TODO LIST
*/
@define('TodoList.CreateTodoList')
export class CreateTodoList extends Command<CreateTodoList> {
  title: Title;

  maxItems: number;
}

@define('TodoList.AddTodo')
export class AddTodo extends Command<AddTodo> {
  id: string | Guid;

  title: Title;
}

/*
TODO
*/
@define('TodoList.CompleteTodo')
export class CompleteTodo extends Command<CompleteTodo> {
  id: string | Guid;
}

@define('TodoList.ExpireTodo')
export class ExpireTodo extends Command<ExpireTodo> {
  id: string | Guid;
}
