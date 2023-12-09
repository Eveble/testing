import {
  Guid,
  UnscheduleCommand,
  AppConfig,
  Injector,
  LoggingConfig,
  EvebleTypes,
} from '@eveble/eveble';
import chai, { expect } from 'chai';
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
import { Feature } from '../../src/components/feature';
import { evebleChai } from '../../src/chai-assertions/eveble-chai-assertion';
import { Scenario } from '../../src/components/scenario';

chai.use(evebleChai);

describe(`Aggregate BDD api`, () => {
  let todoList: Record<string, any>;
  let todo: Record<string, any>;

  let injector: EvebleTypes.Injector;
  let app: TodoListApp;

  const { feature } = Feature.create<TodoList>(TodoList);

  before(async () => {
    injector = new Injector();
    app = new TodoListApp({
      injector,
      config: new AppConfig({
        appId: 'my-app-id',
        logging: new LoggingConfig({ isEnabled: false }),
      }),
    });

    Scenario.create({
      app,
      EventSourceable: TodoList,
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

  afterEach(async () => {
    await app.reset();
  });

  after(async () => {
    await app.shutdown();
  });

  feature(`can be used to test Aggregate creation`, async ({ scenario }) => {
    await scenario
      .when('a created empty todo list', async () => [
        new CreateTodoList({
          targetId: todoList.id,
          title: todoList.title,
          maxItems: todoList.maxItems,
        }),
      ])
      .then('a empty todo list should be created', async ({ events }) => {
        expect(events).to.have.events([
          new TodoListCreated({
            sourceId: todoList.id,
            title: todoList.title,
            maxItems: todoList.maxItems,
            todos: [],
          }),
        ]);
      });
  });

  feature(`can be used to test Aggregate state`, async ({ scenario }) => {
    await scenario
      .when('a created empty todo list', async () => [
        new CreateTodoList({
          targetId: todoList.id,
          title: todoList.title,
          maxItems: todoList.maxItems,
        }),
      ])
      .then(
        'the actual state of todo should match',
        { targetId: todoList.id },
        async ({ target }) => {
          expect(target).to.have.state(
            new TodoList({
              id: todoList.id,
              title: todoList.title,
              maxItems: todoList.maxItems,
              todos: [],
            })
          );
        }
      );
  });

  feature(`can be used to test resulting events`, async ({ scenario }) => {
    await scenario
      .given('a created empty todo list', async () => [
        new CreateTodoList({
          targetId: todoList.id,
          title: todoList.title,
          maxItems: todoList.maxItems,
        }),
      ])
      .when('a todo is added to todo list', async () => [
        new AddTodo({
          targetId: todoList.id,
          id: todo.id,
          title: todo.title,
        }),
      ])
      .then('a todo should be added to the list', async ({ events }) => {
        expect(events).to.have.events([
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
      });
  });

  feature(`can be used to test schedule commands`, async ({ scenario }) => {
    await scenario
      .given('a created todo list', async () => [
        new CreateTodoList({
          targetId: todoList.id,
          title: todoList.title,
          maxItems: todoList.maxItems,
        }),
      ])
      .when('a todo is added', async () => [
        new AddTodo({
          targetId: todoList.id,
          id: todo.id,
          title: todo.title,
        }),
      ])
      .schedules('a todo expiration should be scheduled', async () => [
        new ExpireTodo({ targetId: todoList.id, id: todo.id }),
      ])
      .then('a todo should expire', async ({ events, scheduled }) => {
        expect(scheduled).to.have.commands([
          new ExpireTodo({
            targetId: todoList.id,
            id: todo.id,
          }),
        ]);
        expect(events).to.have.events([
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
      });
  });

  feature(`can be used to test unscheduling commands`, async ({ scenario }) => {
    await scenario
      .given('a created todo list', async () => [
        new CreateTodoList({
          targetId: todoList.id,
          title: todoList.title,
          maxItems: todoList.maxItems,
        }),
      ])
      .when('a todo is completed', async () => [
        new AddTodo({
          targetId: todoList.id,
          id: todo.id,
          title: todo.title,
        }),
        new CompleteTodo({ targetId: todoList.id, id: todo.id }),
      ])
      .unschedules('a expiration command should be unscheduled', async () => [
        new UnscheduleCommand({
          targetId: todoList.id,
          assignmentId: todo.id,
          assignerId: todoList.id,
          assignerType: TodoList.getTypeName(),
          commandType: ExpireTodo.getTypeName(),
        }),
      ])
      .then(
        'a TodoExpired event should be not present on published events',
        async ({ events, unscheduled }) => {
          expect(unscheduled).to.have.commands([
            new UnscheduleCommand({
              targetId: todoList.id,
              assignmentId: todo.id,
              assignerId: todoList.id,
              assignerType: TodoList.getTypeName(),
              commandType: ExpireTodo.getTypeName(),
            }),
          ]);
          expect(events).to.have.events([
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
        }
      );
  });

  feature(`can be used to test rehydrated aggregate`, async ({ scenario }) => {
    await scenario
      .given('a already existing todo list with todos', async () => [
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
      .when('another todo is added', async () => [
        new AddTodo({
          targetId: todoList.id,
          id: 'my-second-todo',
          title: new Title('my-second-title'),
        }),
      ])
      .then(
        'only AddTodo event should be present on events',
        async ({ events }) => {
          expect(events).to.have.events([
            new TodoAdded({
              sourceId: todoList.id,
              todo: new Todo({
                id: 'my-second-todo',
                title: new Title('my-second-title'),
                state: 'created',
              }),
            }),
          ]);
        }
      );
  });

  feature(
    `can be used to test domain errors by exceeding number of allowed todos(maxItems) and throwing TodoExceededError`,
    async ({ scenario }) => {
      const maxItems = 1;
      await scenario
        .given('a already existing todo list with todos', async () => [
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
        .when('a todo is added', async () => [
          new AddTodo({
            targetId: todoList.id,
            id: 'my-second-todo',
            title: new Title('my-second-title'),
          }),
        ])
        .throws(
          `a error if todo items exceed max items of: ${maxItems}`,
          async (error) => {
            expect(error).to.be.instanceof(TodoExceededError);
            expect(error.message).to.be.equal(
              `Cannot add more than ${maxItems} item to list ${todoList.title}`
            );
          }
        );
    }
  );
});
