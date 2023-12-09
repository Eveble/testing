import { Guid, Command, Type } from '@eveble/eveble';
import { Title } from './title-vo';

/*
TODO LIST
*/
@Type('TodoList.CreateTodoList')
export class CreateTodoList extends Command<CreateTodoList> {
  title: Title;

  maxItems: number;
}

@Type('TodoList.AddTodo')
export class AddTodo extends Command<AddTodo> {
  id: string | Guid;

  title: Title;
}

/*
TODO
*/
@Type('TodoList.CompleteTodo')
export class CompleteTodo extends Command<CompleteTodo> {
  id: string | Guid;
}

@Type('TodoList.ExpireTodo')
export class ExpireTodo extends Command<ExpireTodo> {
  id: string | Guid;
}
