import React from "react";
import { connect } from "react-redux";
import { showLeft, showRight } from "./../../actions/layoutActions";

function Header({ showLeft, showRight }) {
  return (
    <div className="header">
      <div onClick={showLeft}>
        <i className="fas fa-bars" />
      </div>
      <div>Marijampole</div>
      <div onClick={showRight}>
        <i className="fas fa-plus" />
      </div>
    </div>
  );
}

export default connect(
  undefined,
  { showLeft, showRight }
)(Header);
