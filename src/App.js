import React from "react";
import "./styles/styles.scss";
import Header from "./../src/components/layout/Header";
import MainContainer from "./components/layout/MainContainer";
import MapContainer from "./components/layout/MapContainer";
import Drawer from "./components/layout/Drawer";
import LocationModal from "./components/layout/LocationModal";

export default function App() {
  return (
    <div className="rootContainer">
      <Header />
      <MainContainer />
      <MapContainer />
      <Drawer />
      <LocationModal />
    </div>
  );
}
