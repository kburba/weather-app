const initialState = {
  showLeft: false,
  showModal: false,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SHOW_LEFT":
      return { ...state, showLeft: action.payload };
    case "SHOW_MODAL":
      return { ...state, showModal: action.payload };
    default:
      return state;
  }
};
