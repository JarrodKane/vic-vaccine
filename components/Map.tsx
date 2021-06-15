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

import WalkInMarker, { Entry } from "./WalkInMarker";

// const ACCESS_TOKEN = process.env.MAPBOX_TOKEN;

interface Props {
  accessToken: string;
  startCords: { lat: number; lng: number };
  data: any;
}

const Map = (props: Props) => {
  const { accessToken, startCords, data } = props;

  const clinicArr = data.feed.entry;
  console.log(clinicArr[0]);

  const [pos, setPost] = useState({
    lat: -37.840935,
    lng: 144.946457,
  });

  // If the map gets the startCords, it'll set them to start there, otherwise it'll set the map to default cords of Melbourne
  useEffect(() => {
    if (startCords === undefined) {
      setPost({ lat: -37.840935, lng: 144.946457 });
    } else {
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
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {clinicArr.map((clinic: Entry) => {
        return <WalkInMarker key={uuidv4()} clinic={clinic} />;
      })}
    </MapContainer>
  );
};

export default Map;
