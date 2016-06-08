import DS from 'ember-data';
import { v4 as uuid } from "ember-uuid";

const { attr } = DS;

let Todo = DS.Model.extend({
  title: attr('string'),
  isCompleted: attr('boolean', { defaultValue: false })
});

export default Todo.reopenClass({
  FIXTURES: [
    {
      id: uuid(),
      title: 'install ember-redux',
      isCompleted: true
    },
    {
      id: uuid(),
      title: 'install ember-redux-helpers',
      isCompleted: true
    },
    {
      id: uuid(),
      title: 'be awesome',
      isCompleted: false
    }
  ]
});
