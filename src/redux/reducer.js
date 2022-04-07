
const initialState = {
  data: []
};

function rootReducer(state = initialState, action) {
  if (action.type === 'ADD_TODO') {
    return Object.assign({}, state, {
      data: state.data.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;