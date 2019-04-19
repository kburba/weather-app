import React from "react";
import { connect } from "react-redux";
import { gMapKey } from "./../../config/keys";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

function MapContainer({ currentLocation }) {
  return (
    <div className="mapContainer">
      {currentLocation.coord && (
        <MyMapComponent
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${gMapKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          coords={currentLocation.coord}
        />
      )}
      {!currentLocation.coord && <div>Please add location to see map</div>}
    </div>
  );
}

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: props.coords.lat, lng: props.coords.lon }}
      center={{ lat: props.coords.lat, lng: props.coords.lon }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: props.coords.lat, lng: props.coords.lon }} />
      )}
    </GoogleMap>
  ))
);

const mapStateToProps = state => ({
  currentLocation: state.locations.currentLocation
});

export default connect(mapStateToProps)(MapContainer);
