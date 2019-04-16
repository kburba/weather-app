import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { showRight } from "./../../actions/layoutActions";

function RightContainer({ layout, showRight }) {
  return (
    <div className={classnames("rightContainer", { active: layout.showRight })}>
      Right
      <div onClick={showRight} className="closeIcon">
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
