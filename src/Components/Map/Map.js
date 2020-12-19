import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../util";
import { selectDarkmode } from "../../features/userSlice";
import { useSelector } from "react-redux";
import "./Map.css";

export const Map = ({ countries, casesType, center, zoom }) => {
  const darkmode = useSelector(selectDarkmode);

  return (
    <div className={darkmode === true ? "darkmap" : "map"}>
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
};
