import { OWMurl, OWMkey } from "./../config/keys";
import Axios from "axios";
import { setLoading } from "./layoutActions";
import { addError } from "./errorActions";
import { showRight } from "./layoutActions";

export const getWeatherByCoords = (lat, long) => dispatch => {
  dispatch(setLoading(true));
  // http://api.openweathermap.org/data/2.5/weather?lat=54.5684244&lon=23.3565394&appid=cb8528b6f2cf632a85f5e8f1e9dc4a0b
  const url =
    OWMurl +
    "?lat=" +
    lat +
    "&lon=" +
    long +
    "&appid=" +
    OWMkey +
    "&units=metric";
  Axios.get(url)
    .then(result => {
      const { name } = result.data;
      const { temp } = result.data.main;
      console.log("Temp in " + name + " is " + temp + "°C");
      dispatch(showRight(false));
    })
    .catch(err => {
      console.log(err);
      dispatch(
        addError({
          mylocation: "Could not retrieve weather data. Please try again."
        })
      );
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};
