import React from "react";
import { connect } from "react-redux";
import { showLeft, setModal } from "./../../actions/layoutActions";
import { getWeatherByCity } from "./../../actions/weatherActions";
import LoadingSpinner from "../forms/LoadingSpinner";

function Header({
  showLeft,
  setModal,
  currentLocation,
  getWeatherByCity,
  isLoading
}) {
  let showingLocation;
  if (Object.keys(currentLocation).length === 0) {
    // check if there are any locations saved in localStorage
    if (
      typeof localStorage.locations !== "undefined" &&
      localStorage.locations !== ""
    ) {
      const city = localStorage.locations.split(",")[0].toUpperCase();
      // getWeatherByCity(city);
      showingLocation = <div>{currentLocation.name}</div>;
    } else {
      showingLocation = (
        <div onClick={() => setModal(true)} className="textClickable">
          Click here to set location
        </div>
      );
    }
  } else {
    showingLocation = currentLocation.name.toUpperCase();
  }

  const header = isLoading ? <LoadingSpinner /> : <div>{showingLocation}</div>;
  return (
    <div className="header">
      <div className="iconButton" onClick={() => showLeft(true)}>
        <i className="fas fa-bars" />
      </div>
      {header}
      <div className="iconButton" onClick={() => setModal(true)}>
        <i className="fas fa-plus" />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentLocation: state.locations.currentLocation,
  isLoading: state.layout.isLoading
});

export default connect(
  mapStateToProps,
  { showLeft, setModal, getWeatherByCity }
)(Header);
