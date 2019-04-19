const initialState = {
  currentLocation: {},
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_LOCATION":
      return { ...state, currentLocation: action.payload };
    case "SET_LOCATIONS_LIST":
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
