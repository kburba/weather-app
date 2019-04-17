import { AWMurl, AWMkey } from "./../config/keys";
import Axios from "axios";

export const getWeatherByCoords = (lat, long) => {
  // http://api.openweathermap.org/data/2.5/weather?lat=54.5684244&lon=23.3565394&appid=cb8528b6f2cf632a85f5e8f1e9dc4a0b
  const url = AWMurl + "?lat=" + lat + "&lon=" + long + "&appid=" + AWMkey;
  Axios.get(url)
    .then(result => {
      console.log("succes", result);
    })
    .catch(err => {
      console.log(err);
    });
};
