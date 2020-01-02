import React from "react";
import {
  Map as LeafletMap,
  Marker,
  Popup,
  TileLayer,
  ZoomControl
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Props {}

const Map: React.FC<Props> = () => {
  return (
    <LeafletMap
      center={[59.43708, 24.745272]}
      zoom={12}
      zoomControl={false}
      style={{ width: "100%", height: "100vh" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomleft" />
      <Marker position={[59.43708, 24.745272]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </LeafletMap>
  );
};

export default Map;
