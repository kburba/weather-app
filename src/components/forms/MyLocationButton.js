import React, { useState } from "react";
import { getWeatherByCoords } from "./../../actions/weatherActions";

export default function MyLocationButton() {
  const [locationError, showLocationError] = useState(false);

  const getLocation = position => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    getWeatherByCoords(lat, long);

    // get location
    // get name of location
    // get weather info
    // save location to favorites - localStorage and redux
  };

  const handleLocationError = () => {
    showLocationError(true);
    setTimeout(() => {
      showLocationError(false);
    }, 6000);
  };

  const useMyLocation = () => {
    navigator.geolocation.getCurrentPosition(getLocation, handleLocationError);
  };
  return (
    <div className="textLink" onClick={useMyLocation}>
      <i className="fas fa-map-marker-alt" />
      <span>Use my device location</span>
      {locationError && (
        <span className="errorNotice">
          Cannot retrieve location information
        </span>
      )}
    </div>
  );
}
