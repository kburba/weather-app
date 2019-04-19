import React, { useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { setModal } from "./../../actions/layoutActions";
import { addLocation } from "./../../actions/locationActions";
import MyLocationButton from "../forms/MyLocationButton";
import AutoCompleteDropDown from "../forms/AutoCompleteDropDown";
import countriesList from "./../../data/countries.json";

function LocationModal({ showModal, setModal, addLocation, errors }) {
  const [city, setCity] = useState("");

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setModal(false)}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="modal"
    >
      <div className="modal__header">
        <div className="modal__title">Please select location</div>
        <div className="modal__close" onClick={() => setModal(false)}>
          <i className="fas fa-times" />
        </div>
      </div>
      <div className="modal__body">
        <div className="modal__left">
          <MyLocationButton />
        </div>
        <div className="modal__right">
          <AutoCompleteDropDown
            list={countriesList}
            addLocation={addLocation}
          />
          <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
            className="inputText"
            placeholder="Enter city name"
          />
          <button onClick={() => addLocation(city)}>Add</button>
          {errors.location && (
            <div className="errorNotice">Cannot find location</div>
          )}
        </div>
      </div>
    </Modal>
  );
}

Modal.setAppElement("#root");

const mapStateToProps = state => ({
  showModal: state.layout.showModal,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { setModal, addLocation }
)(LocationModal);
