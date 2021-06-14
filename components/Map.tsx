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

import WalkInMarker from "./WalkInMarker";

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

  useEffect(() => {
    if (startCords === undefined) {
      setPost({ lat: -37.840935, lng: 144.946457 });
    } else {
      // console.log(startCords);
      setPost(startCords);
    }
  }, []);

  const position = [-37.840935, 144.946457];

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
      {clinicArr.map((clinic) => {
        // console.log(clinic.gsx$lat.$t);
        return <WalkInMarker key={uuidv4()} clinic={clinic} />;
        // <WalkInMarker key={uuidv4()} clinic={clinic} />;
      })}
      {/* <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default Map;
