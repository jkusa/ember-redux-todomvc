export default ((state={}, action) => { // jshint ignore:line
  if (action.type === 'EDIT_TODO') {
    let todoId = action.todo.id;
    state = Object.assign({}, state, {
      [todoId]: true
    });
  }

  if (action.type === 'UPDATE_TODO') {
    let todoId = action.todo.id;
    state = Object.assign({}, state, {
      [todoId]: false
    });
  }

  return state;
});
