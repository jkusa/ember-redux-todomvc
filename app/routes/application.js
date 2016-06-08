import Ember from 'ember';

export default Ember.Route.extend({

  redux: Ember.inject.service(),

  model() {
    return this.store.findAll('todo').then((todos) => {
      this.get('redux').dispatch({
        type: 'SET_TODOS',
        todos: todos.toArray().map(t => t.toJSON({ includeId: true }))
      });
    });
  }
});
