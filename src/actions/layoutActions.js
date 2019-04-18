export const setLoading = action => dispatch => {
  dispatch({
    type: "SET_LOADING",
    payload: action
  });
};

export const showLeft = action => dispatch => {
  dispatch({
    type: "SHOW_LEFT",
    payload: action
  });
};

export const showRight = action => dispatch => {
  dispatch({
    type: "SHOW_RIGHT",
    payload: action
  });
};
