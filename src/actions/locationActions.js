export const setCurrentLocation = action => dispatch => {
  dispatch({
    type: "SET_CURRENT_LOCATION",
    payload: action
  });
};

export const addLocation = action => dispatch => {
  console.log("adding location", action);
  // add location to localStorage
  const name = action.name.trim().toLowerCase();
  const { temp, description } = action;

  // add location to Redux
  dispatch(setCurrentLocation({ name, temp, description }));

  const locations = localStorage.locations || "";
  if (locations.includes(name)) {
    //location already added;
    return;
  }

  localStorage.setItem("locations", name + "," + locations);
};
