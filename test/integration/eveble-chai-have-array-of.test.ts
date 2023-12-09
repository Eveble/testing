import chai, { expect } from 'chai';
import { Guid } from '@eveble/eveble';
import { evebleChai } from '../../src/chai-assertions/eveble-chai-assertion';
import { Title } from '../domains/todo-list/title-vo';
import { Todo } from '../domains/todo-list/todo';
import {
  CreateTodoList,
  AddTodo,
} from '../domains/todo-list/todo-list-commands';
import {
  TodoListCreated,
  TodoAdded,
} from '../domains/todo-list/todo-list-events';

chai.use(evebleChai);

describe('haveArrayOfStructs', () => {
  const untestedProps = ['timestamp'];

  describe(`commands`, () => {
    it('returns true if both collections contains same structs', () => {
      const todoListId = new Guid();
      const todoId = new Guid();

      const actual = [
        new CreateTodoList({
          targetId: todoListId,
          title: new Title('my-todo-list-title'),
          maxItems: 10,
        }),
        new AddTodo({
          targetId: todoListId,
          id: todoId,
          title: new Title('my-todo-title'),
        }),
      ];
      const expected = [
        new CreateTodoList({
          targetId: todoListId,
          title: new Title('my-todo-list-title'),
          maxItems: 10,
        }),
        new AddTodo({
          targetId: todoListId,
          id: todoId,
          title: new Title('my-todo-title'),
        }),
      ];

      (expect(actual) as any).to.have.structs(expected, untestedProps);
      (expect(actual) as any).to.have.commands(expected, untestedProps);
    });

    it('returns false if collections contains only partial selection of structs', () => {
      const todoListId = new Guid();
      const todoId = new Guid();

      const actual = [
        new CreateTodoList({
          targetId: todoListId,
          title: new Title('my-todo-list-title'),
          maxItems: 10,
        }),
        new AddTodo({
          targetId: todoListId,
          id: todoId,
          title: new Title('my-todo-title'),
        }),
      ];
      const expected = [
        new CreateTodoList({
          targetId: todoListId,
          title: new Title('my-todo-list-title'),
          maxItems: 10,
        }),
      ];
      (expect(actual) as any).to.not.have.structs(expected, untestedProps);
      (expect(actual) as any).to.not.have.commands(expected, untestedProps);
    });

    describe(`omitting untested properties`, () => {
      it('returns true if structs contains different values for timestamp', () => {
        const todoListId = new Guid();
        const actual = [
          new CreateTodoList({
            targetId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            timestamp: new Date('Tue Mar 14 2017 01:00:00 GMT+0100 (CET)'),
          }),
        ];
        const expected = [
          new CreateTodoList({
            targetId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            timestamp: new Date('Tue Mar 14 2017 12:00:00 GMT+0100 (CET)'),
          }),
        ];
        (expect(actual) as any).to.have.structs(expected, ['timestamp']);
        (expect(actual) as any).to.have.commands(expected, ['timestamp']);
      });

      it('returns true if structs contains different values for metadata', () => {
        const todoListId = new Guid();
        const actual = [
          new CreateTodoList({
            targetId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            metadata: {
              my: 'meta-data',
            },
          }),
        ];
        const expected = [
          new CreateTodoList({
            targetId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
          }),
        ];
        (expect(actual) as any).to.have.structs(expected, [
          'timestamp',
          'metadata',
        ]);
        (expect(actual) as any).to.have.commands(expected, [
          'timestamp',
          'metadata',
        ]);
      });

      it('returns true if structs contains different values for schemaVersion', () => {
        const todoListId = new Guid();
        const actual = [
          new CreateTodoList({
            targetId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            schemaVersion: 10,
          }),
        ];
        const expected = [
          new CreateTodoList({
            targetId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
          }),
        ];
        (expect(actual) as any).to.have.structs(expected, [
          'timestamp',
          'schemaVersion',
        ]);
        (expect(actual) as any).to.have.commands(expected, [
          'timestamp',
          'schemaVersion',
        ]);
      });
    });
  });

  describe(`events`, () => {
    it('returns true if both collections contains same structs', () => {
      const todoListId = new Guid();
      const todoId = new Guid();

      const actual = [
        new TodoListCreated({
          sourceId: todoListId,
          title: new Title('my-todo-list-title'),
          maxItems: 10,
          todos: [],
        }),
        new TodoAdded({
          sourceId: todoListId,
          todo: new Todo({
            id: todoId,
            title: new Title('my-todo-title'),
          }),
        }),
      ];
      const expected = [
        new TodoListCreated({
          sourceId: todoListId,
          title: new Title('my-todo-list-title'),
          maxItems: 10,
          todos: [],
        }),
        new TodoAdded({
          sourceId: todoListId,
          todo: new Todo({
            id: todoId,
            title: new Title('my-todo-title'),
          }),
        }),
      ];
      (expect(actual) as any).to.have.events(expected, untestedProps);
      (expect(actual) as any).to.have.structs(expected, untestedProps);
    });

    it('returns false if collections contains only partial selection of structs', () => {
      const todoListId = new Guid();
      const todoId = new Guid();

      const actual = [
        new TodoListCreated({
          sourceId: todoListId,
          title: new Title('my-todo-list-title'),
          maxItems: 10,
          todos: [],
        }),
        new TodoAdded({
          sourceId: todoListId,
          todo: new Todo({
            id: todoId,
            title: new Title('my-todo-title'),
          }),
        }),
      ];
      const expected = [
        new TodoListCreated({
          sourceId: todoListId,
          title: new Title('my-todo-list-title'),
          maxItems: 10,
          todos: [],
        }),
      ];
      (expect(actual) as any).to.not.have.events(expected, untestedProps);
      (expect(actual) as any).to.not.have.structs(expected, untestedProps);
    });

    describe(`omitting untested properties`, () => {
      it('returns true even if structs contains different values for timestamp', () => {
        const todoListId = new Guid();
        const actual = [
          new TodoListCreated({
            sourceId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            todos: [],
            timestamp: new Date('Tue Mar 14 2017 01:00:00 GMT+0100 (CET)'),
          }),
        ];
        const expected = [
          new TodoListCreated({
            sourceId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            todos: [],
            timestamp: new Date('Tue Mar 14 2017 12:00:00 GMT+0100 (CET)'),
          }),
        ];
        (expect(actual) as any).to.have.events(expected, ['timestamp']);
        (expect(actual) as any).to.have.structs(expected, ['timestamp']);
      });

      it('returns true even if structs contains different values for metadata', () => {
        const todoListId = new Guid();
        const actual = [
          new TodoListCreated({
            sourceId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            todos: [],
            metadata: {
              my: 'meta-data',
            },
          }),
        ];
        const expected = [
          new TodoListCreated({
            sourceId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            todos: [],
          }),
        ];
        (expect(actual) as any).to.have.events(expected, [
          'timestamp',
          'metadata',
        ]);
        (expect(actual) as any).to.have.structs(expected, [
          'timestamp',
          'metadata',
        ]);
      });

      it('returns true even if structs contains different values for schemaVersion', () => {
        const todoListId = new Guid();
        const actual = [
          new TodoListCreated({
            sourceId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            todos: [],
            schemaVersion: 10,
          }),
        ];
        const expected = [
          new TodoListCreated({
            sourceId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            todos: [],
          }),
        ];
        (expect(actual) as any).to.have.events(expected, [
          'timestamp',
          'schemaVersion',
        ]);
        (expect(actual) as any).to.have.structs(expected, [
          'timestamp',
          'schemaVersion',
        ]);
      });
    });
  });
});
