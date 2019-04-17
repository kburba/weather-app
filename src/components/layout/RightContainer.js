import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { showRight } from "./../../actions/layoutActions";
import AutoCompleteDropDown from "../forms/AutoCompleteDropDown";
import MyLocationButton from "../forms/MyLocationButton";

function RightContainer({ layout, showRight }) {
  return (
    <div className={classnames("rightContainer", { active: layout.showRight })}>
      <div className="centeredContainer">
        <MyLocationButton />
        <div className="hr" />
        <AutoCompleteDropDown />
      </div>
      <div onClick={showRight} className="closeButton">
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
  { showRight }
)(RightContainer);
