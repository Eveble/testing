import {
  Guid,
  UnscheduleCommand,
  AppConfig,
  Injector,
  LoggingConfig,
  EvebleTypes,
} from '@eveble/eveble';
import { Title } from '../domains/todo-list/title-vo';
import { Todo } from '../domains/todo-list/todo';
import { TodoList } from '../domains/todo-list/todo-list';
import {
  CreateTodoList,
  AddTodo,
  CompleteTodo,
  ExpireTodo,
} from '../domains/todo-list/todo-list-commands';
import {
  TodoListCreated,
  TodoAdded,
  TodoCompleted,
  TodoExpired,
} from '../domains/todo-list/todo-list-events';
import { TodoExceededError } from '../domains/todo-list/domain-errors';
import { TodoListApp } from '../domains/todo-list/app';
import { on } from '../../src/index';

describe(`Aggregate BDD api`, function() {
  let todoList: Record<string, any>;
  let todo: Record<string, any>;
  let injector: EvebleTypes.Injector;
  let app: TodoListApp;

  before(async () => {
    injector = new Injector();
    app = new TodoListApp({
      injector,
      config: new AppConfig({
        appId: 'my-app-id',
        logging: new LoggingConfig({ isEnabled: false }),
      }),
    });
    await app.initialize();
  });

  beforeEach(() => {
    todoList = {
      id: new Guid(),
      title: new Title('My list'),
      maxItems: 1,
    };
    todo = {
      id: new Guid(),
      title: new Title('My todo'),
    };
  });

  after(async () => {
    await app.shutdown();
  });

  it(`can be used to test Aggregate creation`, async () => {
    const scenario = on(app)
      .test(TodoList)
      .when([
        new CreateTodoList({
          targetId: todoList.id,
          title: todoList.title,
          maxItems: todoList.maxItems,
        }),
      ])
      .expect([
        new TodoListCreated({
          sourceId: todoList.id,
          title: todoList.title,
          maxItems: todoList.maxItems,
          todos: [],
        }),
      ]);
    await scenario.verify();
  });

  it(`can be used to test resulting events`, async () => {
    const scenario = on(app)
      .test(TodoList)
      .given([
        new CreateTodoList({
          targetId: todoList.id,
          title: todoList.title,
          maxItems: todoList.maxItems,
        }),
      ])
      .when([
        new AddTodo({
          targetId: todoList.id,
          id: todo.id,
          title: todo.title,
        }),
      ])
      .expect([
        new TodoListCreated({
          sourceId: todoList.id,
          title: todoList.title,
          maxItems: todoList.maxItems,
          todos: [],
        }),
        new TodoAdded({
          sourceId: todoList.id,
          todo: new Todo({
            id: todo.id,
            title: todo.title,
            state: 'created',
          }),
        }),
      ]);
    await scenario.verify();
  });

  it(`can be used to test schedule commands`, async () => {
    const scenario = on(app)
      .test(TodoList)
      .given([
        new CreateTodoList({
          targetId: todoList.id,
          title: todoList.title,
          maxItems: todoList.maxItems,
        }),
      ])
      .when([
        new AddTodo({
          targetId: todoList.id,
          id: todo.id,
          title: todo.title,
        }),
      ])
      .schedules([new ExpireTodo({ targetId: todoList.id, id: todo.id })])
      .expect([
        new TodoListCreated({
          sourceId: todoList.id,
          title: todoList.title,
          maxItems: todoList.maxItems,
          todos: [],
        }),
        new TodoAdded({
          sourceId: todoList.id,
          todo: new Todo({
            id: todo.id,
            title: todo.title,
            state: 'created',
          }),
        }),
        new TodoExpired({
          sourceId: todoList.id,
          todo: new Todo({
            id: todo.id,
            title: todo.title,
            state: 'expired',
          }),
        }),
      ]);
    await scenario.verify();
  });

  it(`can be used to test unscheduling commands`, async () => {
    const scenario = on(app)
      .test(TodoList)
      .given([
        new CreateTodoList({
          targetId: todoList.id,
          title: todoList.title,
          maxItems: todoList.maxItems,
        }),
      ])
      .when([
        new AddTodo({
          targetId: todoList.id,
          id: todo.id,
          title: todo.title,
        }),
        new CompleteTodo({ targetId: todoList.id, id: todo.id }),
      ])
      .unschedules([
        new UnscheduleCommand({
          targetId: todoList.id,
          assignmentId: todo.id,
          assignerId: todoList.id,
          assignerType: TodoList.getTypeName(),
          commandType: ExpireTodo.getTypeName(),
        }),
      ])
      .expect([
        new TodoListCreated({
          sourceId: todoList.id,
          title: todoList.title,
          maxItems: todoList.maxItems,
          todos: [],
        }),
        new TodoAdded({
          sourceId: todoList.id,
          todo: new Todo({
            id: todo.id,
            title: todo.title,
            state: 'created',
          }),
        }),
        new TodoCompleted({
          sourceId: todoList.id,
          todo: new Todo({
            id: todo.id,
            title: todo.title,
            state: 'completed',
          }),
        }),
      ]);
    await scenario.verify();
  });

  it(`can be used to test rehydrated aggregate`, async () => {
    const scenario = on(app)
      .test(TodoList)
      .given([
        new TodoListCreated({
          sourceId: todoList.id,
          title: todoList.title,
          maxItems: 2,
          todos: [],
        }),
        new TodoAdded({
          sourceId: todoList.id,
          todo: new Todo({
            id: 'my-first-todo',
            title: new Title('my-first-title'),
            state: 'created',
          }),
        }),
      ])
      .when([
        new AddTodo({
          targetId: todoList.id,
          id: 'my-second-todo',
          title: new Title('my-second-title'),
        }),
      ])
      .expect([
        new TodoAdded({
          sourceId: todoList.id,
          todo: new Todo({
            id: 'my-second-todo',
            title: new Title('my-second-title'),
            state: 'created',
          }),
        }),
      ]);
    await scenario.verify();
  });

  it(`can be used to test domain errors by exceeding number of allowed todos(maxItems) and throwing TodoExceededError`, async () => {
    const maxItems = 1;
    const scenario = on(app)
      .test(TodoList)
      .given([
        new TodoListCreated({
          sourceId: todoList.id,
          title: todoList.title,
          maxItems,
          todos: [],
        }),
        new TodoAdded({
          sourceId: todoList.id,
          todo: new Todo({
            id: 'my-first-todo',
            title: new Title('my-first-title'),
            state: 'created',
          }),
        }),
      ])
      .when([
        new AddTodo({
          targetId: todoList.id,
          id: 'my-second-todo',
          title: new Title('my-second-title'),
        }),
      ])
      .expectToFailWith(
        TodoExceededError,
        `Cannot add more than ${maxItems} item to list ${todoList.title}`
      );
    await scenario.verify();
  });
});
