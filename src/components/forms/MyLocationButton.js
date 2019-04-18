import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { getWeatherByCoords } from "./../../actions/weatherActions";
import { addError } from "./../../actions/errorActions";
import LoadingSpinner from "./LoadingSpinner";

function MyLocationButton({ isLoading, errors, getWeatherByCoords, addError }) {
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
    addError({
      mylocation: "Could not retrieve location information from the browser."
    });
  };

  const useMyLocation = () => {
    navigator.geolocation.getCurrentPosition(getLocation, handleLocationError);
  };

  return (
    <div
      className={classnames("textLink", { loading: isLoading })}
      onClick={useMyLocation}
    >
      {isLoading && <LoadingSpinner />}
      <div className="textContainer">
        <i className="fas fa-map-marker-alt" />
        <span>Use my device location</span>
      </div>
      {errors.mylocation && (
        <span className="errorNotice">{errors.mylocation}</span>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: state.layout.isLoading,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getWeatherByCoords, addError }
)(MyLocationButton);
