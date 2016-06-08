import { container as todosContainer } from '../reducers/todos';
export function initialize(application) {
  todosContainer.store = application.__container__.lookup('service:store');
}

export default {
  after: 'ember-data',
  name: 'inject-store',
  initialize: initialize
};
