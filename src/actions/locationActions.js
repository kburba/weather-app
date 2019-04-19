import { getWeatherByCity } from "./weatherActions";

export const setCurrentLocation = action => dispatch => {
  const locations = localStorage.locations || "";
  const name = action.name.trim().toLowerCase();

  if (!locations.includes(name)) {
    //location already added;
    localStorage.setItem("locations", name + "," + locations);
  }

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
