import React, { Component } from "react";
import { connect } from "react-redux";
import { setLocationList } from "./../../actions/locationActions";

class MainContainer extends Component {
  componentDidMount() {
    const list = localStorage.locations
      ? localStorage.locations.split(",").filter(item => {
          return item !== "";
        })
      : [];
    this.props.setLocationList(list);
  }

  render() {
    const { currentLocation } = this.props;
    return (
      <div className="mainContainer">
        {currentLocation.main && (
          <div className="tempInfo">{currentLocation.main.temp} °C</div>
        )}
        {currentLocation.weather && (
          <div className="descInfo">
            <img
              alt="Weather icon"
              src={`https://openweathermap.org/img/w/${
                currentLocation.weather[0].icon
              }.png`}
            />
            <span>{currentLocation.weather[0].description}</span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentLocation: state.locations.currentLocation
});

export default connect(
  mapStateToProps,
  { setLocationList }
)(MainContainer);
