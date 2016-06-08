import Ember from 'ember';
import { v4 as uuid } from "ember-uuid";

export const container = {};

function updateTodoField(state, todo, field, value) {
    let storeTodo = container.store.peekRecord('todo', todo.id);
    storeTodo.set(field, value);
    storeTodo.save();

    return [
      ...state.rejectBy('id', todo.id),
      storeTodo.toJSON({ includeId: true })
    ];
}

export default ((state=[], action) => { // jshint ignore:line
  if (action.type === 'ADD_TODO') {
    let { invocationArgs:title } = action;

    if (action.title && !action.title.trim()) {
      state = state;
    }

    let newTodo = container.store.createRecord('todo', { title, id: uuid()});
    newTodo.save();
    state = [...state, newTodo.toJSON({includeId: true})];
  }

  if (action.type === 'REMOVE_TODO') {
    let storeTodo = container.store.peekRecord('todo', action.todo.id);
    storeTodo.destroyRecord();
    storeTodo.save();
    state = [...state].removeObject(action.todo);
  }

  if (action.type === 'SET_TODOS') {
    state = [...action.todos];
  }

  if (action.type === 'UPDATE_TODO') {
    let { todo, field, invocationArgs } = action;
    state = updateTodoField(state, todo, field, invocationArgs[0]);
  }

  if (action.type === 'TOGGLE_TODO') {
    let { todo, invocationArgs } = action;
    state = updateTodoField(state, todo, 'isCompleted', invocationArgs[0].target.checked);
  }

  if (action.type === 'CLEAR_COMPLETED_TODOS') {
      let storeTodos = container.store.peekAll('todo').toArray(),
          completedTodos = storeTodos.filterBy('isCompleted');

      completedTodos.invoke('destroyRecord');
      completedTodos.invoke('save');

      state = container.store.peekAll('todo')
        .toArray()
        .filterBy('isDeleted', false)
        .map(t => t.toJSON({ includeId: true }));
  }

  if (action.type === 'TOGGLE_ALL_TODOS') {
      let storeTodos = container.store.peekAll('todo').toArray(),
          incompletedTodos = storeTodos.filterBy('isCompleted', false);

      if(incompletedTodos.length) {
        incompletedTodos.setEach('isCompleted', true);
        incompletedTodos.invoke('save');
      } else {
        storeTodos.setEach('isCompleted', false);
        storeTodos.invoke('save');
      }

      state = container.store.peekAll('todo').toArray().map(t => t.toJSON({ includeId: true }));
  }

  return Ember.A(state);
});
