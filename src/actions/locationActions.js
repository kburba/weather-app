import { getWeatherByCity } from "./weatherActions";

export const removeLocation = action => dispatch => {
  dispatch({
    type: "REMOVE_LOCATION",
    payload: action
  });
};

export const setLocationList = action => dispatch => {
  dispatch({
    type: "SET_LOCATION_LIST",
    payload: action
  });
};

export const addLocationToList = action => dispatch => {
  dispatch({
    type: "ADD_LOCATION",
    payload: action
  });
};

export const setCurrentLocation = action => dispatch => {
  const locations = localStorage.locations || "";
  const name = action.name.trim().toLowerCase();

  if (!locations.includes(name)) {
    //location is not added already;
    localStorage.setItem("locations", name + "," + locations);
  }

  dispatch(addLocationToList(name));

  dispatch({
    type: "SET_CURRENT_LOCATION",
    payload: action
  });
};

export const addLocation = action => dispatch => {
  // add location to localStorage

  const name = action.trim().toLowerCase();

  // dispatch(setCurrentLocation({ name, temp, description }));
  dispatch(getWeatherByCity(name));

  const locations = localStorage.locations || "";
  if (locations.includes(name)) {
    //location already added;
    return;
  }

  localStorage.setItem("locations", name + "," + locations);
};
