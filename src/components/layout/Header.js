import React from "react";
import { connect } from "react-redux";
import { showLeft, showRight } from "./../../actions/layoutActions";
import { getWeatherByCity } from "./../../actions/weatherActions";

function Header({ showLeft, showRight, currentLocation, getWeatherByCity }) {
  let showingLocation;
  if (Object.keys(currentLocation).length === 0) {
    // check if there are any locations saved in localStorage
    if (
      typeof localStorage.locations !== "undefined" &&
      localStorage.locations !== ""
    ) {
      const city = localStorage.locations.split(",")[0].toUpperCase();
      getWeatherByCity(city);
      showingLocation = <div>{currentLocation.name}</div>;
    } else {
      showingLocation = (
        <div onClick={() => showRight(true)} className="textClickable">
          Click here to set location
        </div>
      );
    }
  } else {
    showingLocation = currentLocation.name.toUpperCase();
  }
  return (
    <div className="header">
      <div className="iconButton" onClick={() => showLeft(true)}>
        <i className="fas fa-bars" />
      </div>
      <div>{showingLocation}</div>
      <div className="iconButton" onClick={() => showRight(true)}>
        <i className="fas fa-plus" />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentLocation: state.locations.currentLocation
});

export default connect(
  mapStateToProps,
  { showLeft, showRight, getWeatherByCity }
)(Header);
