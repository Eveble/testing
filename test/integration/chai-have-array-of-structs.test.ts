import chai, { expect } from 'chai';
import { Guid } from '@eveble/eveble';
import { chaiStructAssertion } from '../../src/chai-assertions/chai-struct-assertion';
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

chai.use(chaiStructAssertion);

describe('haveArrayOfStructs', function() {
  const untestedProps = ['timestamp'];

  describe(`commands`, () => {
    it('returns true if both collections contains same structs', () => {
      const todoListId = new Guid();
      const todoId = new Guid();

      (expect([
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
      ]) as any).to.have.structs(
        [
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
        ],
        untestedProps
      );
    });

    it('returns false if collections contains only partial selection of structs', () => {
      const todoListId = new Guid();
      const todoId = new Guid();

      (expect([
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
      ]) as any).to.not.have.structs(
        [
          new CreateTodoList({
            targetId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
          }),
        ],
        untestedProps
      );
    });

    describe(`omitting untested properties`, () => {
      it('returns true if structs contains different values for timestamp', () => {
        const todoListId = new Guid();
        (expect([
          new CreateTodoList({
            targetId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            timestamp: new Date('Tue Mar 14 2017 01:00:00 GMT+0100 (CET)'),
          }),
        ]) as any).to.have.structs(
          [
            new CreateTodoList({
              targetId: todoListId,
              title: new Title('my-todo-list-title'),
              maxItems: 10,
              timestamp: new Date('Tue Mar 14 2017 12:00:00 GMT+0100 (CET)'),
            }),
          ],
          ['timestamp']
        );
      });

      it('returns true if structs contains different values for metadata', () => {
        const todoListId = new Guid();
        (expect([
          new CreateTodoList({
            targetId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            metadata: {
              my: 'meta-data',
            },
          }),
        ]) as any).to.have.structs(
          [
            new CreateTodoList({
              targetId: todoListId,
              title: new Title('my-todo-list-title'),
              maxItems: 10,
            }),
          ],
          ['timestamp', 'metadata']
        );
      });

      it('returns true if structs contains different values for schemaVersion', () => {
        const todoListId = new Guid();
        (expect([
          new CreateTodoList({
            targetId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            schemaVersion: 10,
          }),
        ]) as any).to.have.structs(
          [
            new CreateTodoList({
              targetId: todoListId,
              title: new Title('my-todo-list-title'),
              maxItems: 10,
            }),
          ],
          ['timestamp', 'schemaVersion']
        );
      });
    });
  });

  describe(`events`, () => {
    it('returns true if both collections contains same structs', () => {
      const todoListId = new Guid();
      const todoId = new Guid();
      (expect([
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
      ]) as any).to.have.structs(
        [
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
        ],
        untestedProps
      );
    });

    it('returns false if collections contains only partial selection of structs', () => {
      const todoListId = new Guid();
      const todoId = new Guid();
      (expect([
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
      ]) as any).to.not.have.structs(
        [
          new TodoListCreated({
            sourceId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            todos: [],
          }),
        ],
        untestedProps
      );
    });

    describe(`omitting untested properties`, () => {
      it('returns true even if structs contains different values for timestamp', () => {
        const todoListId = new Guid();
        (expect([
          new TodoListCreated({
            sourceId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            todos: [],
            timestamp: new Date('Tue Mar 14 2017 01:00:00 GMT+0100 (CET)'),
          }),
        ]) as any).to.have.structs(
          [
            new TodoListCreated({
              sourceId: todoListId,
              title: new Title('my-todo-list-title'),
              maxItems: 10,
              todos: [],
              timestamp: new Date('Tue Mar 14 2017 12:00:00 GMT+0100 (CET)'),
            }),
          ],
          ['timestamp']
        );
      });

      it('returns true even if structs contains different values for metadata', () => {
        const todoListId = new Guid();
        (expect([
          new TodoListCreated({
            sourceId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            todos: [],
            metadata: {
              my: 'meta-data',
            },
          }),
        ]) as any).to.have.structs(
          [
            new TodoListCreated({
              sourceId: todoListId,
              title: new Title('my-todo-list-title'),
              maxItems: 10,
              todos: [],
            }),
          ],
          ['timestamp', 'metadata']
        );
      });

      it('returns true even if structs contains different values for schemaVersion', () => {
        const todoListId = new Guid();
        (expect([
          new TodoListCreated({
            sourceId: todoListId,
            title: new Title('my-todo-list-title'),
            maxItems: 10,
            todos: [],
            schemaVersion: 10,
          }),
        ]) as any).to.have.structs(
          [
            new TodoListCreated({
              sourceId: todoListId,
              title: new Title('my-todo-list-title'),
              maxItems: 10,
              todos: [],
            }),
          ],
          ['timestamp', 'schemaVersion']
        );
      });
    });
  });
});
