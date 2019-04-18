const initialState = {
  showLeft: false,
  showRight: false,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SHOW_LEFT":
      return { ...state, showLeft: action.payload };
    case "SHOW_RIGHT":
      return { ...state, showRight: action.payload };
    default:
      return state;
  }
};
