import React from "react";
import "./styles/styles.scss";
import Header from "./../src/components/layout/Header";
import MainContainer from "./components/layout/MainContainer";
import MapContainer from "./components/layout/MapContainer";

export default function App() {
  return (
    <div>
      <Header />
      <MainContainer />
      <MapContainer />
    </div>
  );
}
