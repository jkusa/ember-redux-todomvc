import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  tagName: 'li',

  classNameBindings: ['todo.isCompleted:completed', 'isEditing:editing'],

  layout: hbs`
    {{#if isEditing}}
      {{edit-todo
          class='edit'
          value=todo.title
          focus-out=(dispatch 'UPDATE_TODO' todo=todo field='title')
          insert-newline=(dispatch 'UPDATE_TODO' todo=todo field='title')
      }}
    {{else}}
      <input type='checkbox' checked={{todo.isCompleted}} class='toggle' onchange={{dispatch 'TOGGLE_TODO' todo=todo}}>
      <label ondblclick={{dispatch 'EDIT_TODO' todo=todo}}>{{todo.title}}</label>
      <button onclick={{dispatch 'REMOVE_TODO' todo=todo}} class='destroy'></button>
    {{/if}}
  `,
});
