const initialState = {
  selected: {},
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_LOCATION":
      return { ...state, selected: action.payload };
    case "ADD_LOCATION":
      const newList = state.list.push(action.payload);
      return { ...state, list: newList };
    default:
      return state;
  }
};
