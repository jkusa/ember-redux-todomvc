export default ((state=null, action) => { // jshint ignore:line
  if (action.type === 'SET_FILTER') {
    state = action.filter;
  }

  return state;
});
