import React from "react";
import "./styles/styles.scss";
import Header from "./../src/components/layout/Header";
import MainContainer from "./components/layout/MainContainer";
import MapContainer from "./components/layout/MapContainer";
import RightContainer from "./components/layout/RightContainer";
import LeftContainer from "./components/layout/LeftContainer";

export default function App() {
  return (
    <div className="rootContainer">
      <Header />
      <MainContainer />
      <MapContainer />
      <RightContainer />
      <LeftContainer />
    </div>
  );
}
