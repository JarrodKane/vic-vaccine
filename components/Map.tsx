import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

// const ACCESS_TOKEN = process.env.MAPBOX_TOKEN;

interface Props {
  accessToken: string;
  startCords: { lat: number; long: number };
}

const Map = (props: Props) => {
  const { accessToken, startCords } = props;

  console.log(startCords);

  return (
    <MapContainer
      center={[startCords.lat, startCords.long]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      <Marker position={[40.8054, -74.0241]} draggable={true}>
        <Popup>Hey ! I live here</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
