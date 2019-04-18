export const addError = action => dispatch => {
  dispatch({
    type: "ADD_ERRORS",
    payload: action
  });

  setTimeout(() => {
    dispatch(clearErrors());
  }, 6000);
};
export const clearErrors = () => dispatch => {
  dispatch({
    type: "CLEAR_ERRORS"
  });
};
