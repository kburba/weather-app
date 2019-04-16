import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { showLeft } from "./../../actions/layoutActions";

function LeftContainer({ layout, showLeft }) {
  return (
    <div className={classnames("leftContainer", { active: layout.showLeft })}>
      Showing list of favorite cities
      <div onClick={showLeft} className="closeIcon">
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
  { showLeft }
)(LeftContainer);
