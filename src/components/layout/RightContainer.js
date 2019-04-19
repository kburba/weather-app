import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { showRight } from "./../../actions/layoutActions";
import { addLocation } from "./../../actions/locationActions";
import AutoCompleteDropDown from "../forms/AutoCompleteDropDown";
import MyLocationButton from "../forms/MyLocationButton";
import countriesList from "./../../data/countries.json";

function RightContainer({ layout, showRight, addLocation }) {
  return (
    <div className={classnames("rightContainer", { active: layout.showRight })}>
      <div className="centeredContainer">
        <MyLocationButton />
        <div className="hr" />
        <AutoCompleteDropDown list={countriesList} addLocation={addLocation} />
      </div>
      <div onClick={() => showRight(false)} className="closeButton">
        <i className="fas fa-times" />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  layout: state.layout
});

export default connect(
  mapStateToProps,
  { showRight, addLocation }
)(RightContainer);
