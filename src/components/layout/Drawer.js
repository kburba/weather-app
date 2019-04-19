import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { showLeft } from "../../actions/layoutActions";
import { getWeatherByCity } from "./../../actions/weatherActions";
import {
  addLocationToList,
  removeLocation
} from "./../../actions/locationActions";
import List from "../forms/List";

function Drawer({
  layout,
  showLeft,
  getWeatherByCity,
  locationsList,
  addLocationToList,
  removeLocation
}) {
  const handleCityClick = city => {
    getWeatherByCity(city);
  };

  const handleRemoveLocation = city => {
    removeLocation(city);
    const newList = locationsList.filter(item => {
      return item.trim().toLowerCase() !== city.trim().toLowerCase();
    });
    localStorage.setItem("locations", newList.toString());
  };

  return (
    <div
      className={classnames("drawer", { active: layout.showLeft })}
      onBlur={() => showLeft(false)}
    >
      <div className="drawer__header">
        <div className="drawer__close" onClick={() => showLeft(false)}>
          <i className="fas fa-arrow-left" />
        </div>
        <div className="drawer__title">Favorite locations</div>
      </div>
      <div className="drawer__body">
        {locationsList.length > 0 && (
          <List
            items={locationsList}
            handleCityClick={handleCityClick}
            handleRemoveLocation={handleRemoveLocation}
          />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  layout: state.layout,
  locationsList: state.locations.list
});

export default connect(
  mapStateToProps,
  { showLeft, getWeatherByCity, addLocationToList, removeLocation }
)(Drawer);
