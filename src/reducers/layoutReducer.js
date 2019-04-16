const initialState = {
  showLeft: false,
  showRight: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LEFT":
      return { showRight: false, showLeft: !state.showLeft };
    case "SHOW_RIGHT":
      return { showRight: !state.showRight, showLeft: false };
    default:
      return state;
  }
};
