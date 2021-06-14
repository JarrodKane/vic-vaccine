import React from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

// enum waitPeriod {
//   -1 = "a",
//   beta = "b",
// }

interface Clinic {
  _id: number;
  id: number;
  clinicId: string;
  shortName: string;
  location: string;
  address: string;
  suburb: string;
  addressFull: string;
  directions: string;
  lat: number;
  lng: number;
  lastUpdated: string;
  clinicStatus: string;
  hours: string;
  waitPeriod: string;
  waitPeriodDisp: string;
  shortNameClean: string;
}

interface Props {
  clinic: Clinic;
}

export const WalkInMarker = (props: Props) => {
  const { lat, lng } = props.clinic;

  return (
    <div>
      <Marker position={{ lat, lng }}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </div>
  );
};
