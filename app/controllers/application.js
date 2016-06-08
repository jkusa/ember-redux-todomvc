import Ember from 'ember';

const { get } = Ember;

export default Ember.Controller.extend({
  redux: Ember.inject.service(),

  queryParams: [ 'state' ],

  state: 'all',

  stateDidUpdate: Ember.observer('state', function() {
      get(this, 'redux').dispatch({
        type: 'SET_FILTER',
        filter: get(this, 'state')
      });
  })
});
