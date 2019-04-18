const initialState = {
  currentLocation: {},
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_LOCATION":
      return { ...state, currentLocation: action.payload };
    case "ADD_LOCATION":
      const newList = state.list.push(action.payload);
      return { ...state, list: newList };
    default:
      return state;
  }
};
