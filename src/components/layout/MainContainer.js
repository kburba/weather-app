import React from "react";
import { connect } from "react-redux";

function MainContainer({ currentLocation }) {
  return (
    <div className="mainContainer">
      {currentLocation.main && (
        <div className="tempInfo">{currentLocation.main.temp} °C</div>
      )}
      {currentLocation.weather && (
        <div className="descInfo">
          <img
            alt="Weather icon"
            src={`http://openweathermap.org/img/w/${
              currentLocation.weather[0].icon
            }.png`}
          />
          <span>{currentLocation.weather[0].description}</span>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  currentLocation: state.locations.currentLocation
});

export default connect(mapStateToProps)(MainContainer);
