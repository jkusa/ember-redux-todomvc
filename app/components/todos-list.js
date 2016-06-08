import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  tagName: 'ul',

  layout: hbs`
    {{#each todos as |todo|}}
      {{todo-item
        todo=todo
        isEditing=(get-state (concat 'edit.' todo.id))
      }}
    {{/each}}
  `
});
