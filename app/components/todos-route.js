import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

const { computed, computed: { filterBy }, get } = Ember;

export default Ember.Component.extend({

  filtered: computed('todos.@each.isCompleted', 'filter', function() {
    switch(get(this, 'filter')) {
    case 'active':
      return get(this, 'active');
    case 'completed':
      return get(this, 'completed');
    default:
      return get(this, 'todos');
    }
  }),

  completed: filterBy('todos', 'isCompleted', true),
  active: filterBy('todos', 'isCompleted', false),
  allAreDone: computed.empty('active'),

  inflection: computed('active.length', function() {
    let active = get(this, 'active.length');
    return active === 1 ? 'item' : 'items';
  }).readOnly(),

  layout: hbs`
    <section class='todoapp'>
      <header id='header'>
        <h1>todos</h1>
        {{input
          type='text'
          class='new-todo'
          placeholder='What needs to be done?'
          value=(get-state 'title')
          enter=(dispatch 'ADD_TODO' title=value)
        }}
      </header>

      <section class='main'>
        {{todos-list todos=filtered class='todo-list'}}

        <input type='checkbox'
                class='toggle-all'
                checked={{allAreDone}}
                onchange={{dispatch 'TOGGLE_ALL_TODOS'}}>
      </section>

      <footer class='footer'>
        <span class='todo-count'>
          <strong>{{active.length}}</strong> {{inflection}} left
        </span>

        <ul class='filters'>
          <li> {{link-to 'All' 'index'       (query-params state='all')       activeClass='selected'}} </li>
          <li> {{link-to 'Active' 'index'    (query-params state='active')    activeClass='selected'}} </li>
          <li> {{link-to 'Completed' 'index' (query-params state='completed') activeClass='selected'}} </li>
        </ul>

        {{#if completed}}
          <button class='clear-completed' onclick={{dispatch 'CLEAR_COMPLETED_TODOS'}}>
            Clear completed ({{completed.length}})
          </button>
        {{/if}}
      </footer>
    </section>

    <footer class='info'>
      <p>Double-click to edit a todo</p>
      <p>Created by <a href="https://github.com/jkusa">@jkusa</a></p>
    </footer>
  `
});
