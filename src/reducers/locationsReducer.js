const initialState = {
  currentLocation: {},
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_LOCATION":
      return { ...state, currentLocation: action.payload };
    case "SET_LOCATION_LIST":
      return { ...state, list: action.payload };
    case "ADD_LOCATION":
      if (state.list.includes(action.payload)) {
        return state;
      } else {
        const newList = state.list;
        newList.push(action.payload);
        return { ...state, list: newList };
      }

    case "REMOVE_LOCATION":
      const newList = state.list.filter(item => {
        return (
          item.trim().toLowerCase() !== action.payload.trim().toLowerCase()
        );
      });
      return { ...state, list: newList };
    default:
      return state;
  }
};
