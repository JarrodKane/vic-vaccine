import React from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

// enum waitPeriod {
//   -1 = "a",
//   beta = "b",
// }

// interface Clinic {
//   _id: number;
//   id: number;
//   clinicId: string;
//   shortName: string;
//   location: string;
//   address: string;
//   suburb: string;
//   addressFull: string;
//   directions: string;
//   lat: number;
//   lng: number;
//   lastUpdated: string;
//   clinicStatus: string;
//   hours: string;
//   waitPeriod: string;
//   waitPeriodDisp: string;
//   shortNameClean: string;
// }

interface Props {
  clinic: any;

}

const WalkInMarker = (props: Props) => {
  const { clinic } = props.clinic;

  const gsx = {};
  
  // Destructuring the ugly clinic info so it's more easily used, first skipping all the default information and only adding the clinic specific info
  for (const key in props.clinic) {
    // console.log(props.clinic.[key].$t);
    if (key.substring(0, 4) === "gsx$") {
      const newKey = key.slice(4);
      gsx.[newKey] = props.clinic[key].$t
    }
  }

  console.log(gsx)

  return (
    <Marker position={[gsx.lat, gsx.lng]}>
      
      <Popup >
      <div className={`whitespace-pre `}>{`${gsx.shortname}
${gsx.clinicstatus}
${gsx.addressfull}`}
      </div>
      </Popup>
    </Marker>
  );
};

export default WalkInMarker;
