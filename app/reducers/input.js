export default ((state='', action) => { // jshint ignore:line
    if (action.type === 'ADD_TODO') {
      state = '';
    }

    return state;
});
