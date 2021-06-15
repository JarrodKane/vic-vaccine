import React from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

// TODO: Need to work on the interface and types, remove any mention of any, and desctrcutre here

export interface ID {
  $t: string;
}

export interface Category {
  scheme: string;
  term: string;
}
export interface Title {
  type: TitleType;
  $t: string;
}

export enum TitleType {
  Text = "text",
}

export interface Link {
  rel: string;
  type: LinkType;
  href: string;
}
export enum LinkType {
  ApplicationAtomXML = "application/atom+xml",
}

export interface Entry {
  // id: ID;
  [key: string]: ID;
  // category: Category[];
  // link: Link[];
  updated: ID;
  title: Title;
  content: Title;
  gsx$id: ID;
  gsx$clinicid: ID;
  gsx$shortname: ID;
  gsx$location: ID;
  gsx$address: ID;
  gsx$suburb: ID;
  gsx$addressfull: ID;
  gsx$directions: ID;
  gsx$lat: ID;
  gsx$lng: ID;
  gsx$lastupdated: ID;
  gsx$clinicstatus: ID;
  gsx$hours: ID;
  gsx$waitperiod: ID;
  gsx$waitperioddisp: ID;
  gsx$shortnameclean: ID;
}

interface Props {
  clinic: Entry;
}

interface Clinic {
  id: string;
  clinicid: string;
  shortname: string;
  location: string;
  address: string;
  suburb: string;
  addressfull: string;
  directions: string;
  // lat: number;
  // lng: number;
  lastupdated: string;
  clinicstatus: string;
  hours: string;
  waitperiod: string;
  waitperioddisp: string;
  shortnameclean: string;
  [key: string]: string;
}

const WalkInMarker = (props: Props) => {
  const gsx: any = {
    // id: "",
    // clinicid: "",
    // shortname: "",
    // location: "",
    // address: "",
    // suburb: "",
    // addressfull: "",
    // directions: "",
    // lat: 0,
    // lng: 0,
    // lastupdated: "",
    // clinicstatus: "",
    // hours: "",
    // waitperiod: "",
    // waitperioddisp: "",
    // shortnameclean: "",
  };

  // Destructuring the ugly clinic info so it's more easily used, first skipping all the default information and only adding the clinic specific info

  for (const key in props.clinic) {
    if (key.substring(0, 4) === "gsx$") {
      let newKey = key.slice(4);
      gsx[newKey] = props.clinic[key].$t;
    }
  }

  return (
    <Marker position={[gsx.lat, gsx.lng]}>
      <Popup>
        <div className={`whitespace-pre `}>
          {`${gsx.shortname}
${gsx.clinicstatus}
${gsx.addressfull}`}
        </div>
      </Popup>
    </Marker>
  );
};

export default WalkInMarker;
