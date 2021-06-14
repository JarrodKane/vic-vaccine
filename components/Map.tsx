import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
  MapConsumer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { v4 as uuidv4 } from "uuid";

import { LocationMarker } from "./LocationMarker";

// const ACCESS_TOKEN = process.env.MAPBOX_TOKEN;

interface Props {
  accessToken: string;
  startCords: { lat: number; lng: number };
  data: any;
}

const Map = (props: Props) => {
  const { accessToken, startCords, data } = props;

  console.log(data);

  const [pos, setPost] = useState({
    lat: -37.840935,
    lng: 144.946457,
  });

  useEffect(() => {
    if (startCords === undefined) {
      setPost({ lat: -37.840935, lng: 144.946457 });
    } else {
      console.log(startCords);
      setPost(startCords);
    }
  }, []);

  return (
    <MapContainer
      key={uuidv4()}
      center={pos}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      {/* <MyComponent pos={pos} /> */}
      {/* <MapConsumer>
        {(map) => {
          flyTo();
          return null;
        }}
      </MapConsumer> */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
