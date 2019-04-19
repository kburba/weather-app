import React, { useState } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { showLeft } from "../../actions/layoutActions";
import { getWeatherByCity } from "./../../actions/weatherActions";
import List from "../forms/List";

function Drawer({ layout, showLeft, getWeatherByCity, locationsList }) {
  const cityList = localStorage.locations
    ? localStorage.locations.split(",").filter(item => {
        return item !== "";
      })
    : [];

  const [cities, setCities] = useState(cityList);

  const handleCityClick = city => {
    getWeatherByCity(city);
  };

  const handleRemoveLocation = city => {
    const updatedCities = cities.filter(item => {
      return item.trim().toLowerCase() !== city.trim().toLowerCase();
    });

    setCities(updatedCities);

    localStorage.setItem("locations", updatedCities.toString());
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
        {cities.length > 0 && (
          <List
            items={cities}
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
  { showLeft, getWeatherByCity }
)(Drawer);
