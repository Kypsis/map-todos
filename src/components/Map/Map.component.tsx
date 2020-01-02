import React, { useState } from "react";
import {
  Map as LeafletMap,
  Marker,
  Popup,
  TileLayer,
  ZoomControl
} from "react-leaflet";

interface Props {}

const Map: React.FC<Props> = () => {
  const [markers, setMarkers] = useState([
    [59.43708, 24.745272],
    [59.44708, 24.735272]
  ]);

  const addMarker = (e: any) => {
    console.log(e.latlng.lat);
    setMarkers([...markers, [e.latlng.lat, e.latlng.lng]]);
  };

  return (
    <LeafletMap
      center={[59.43708, 24.745272]}
      zoom={12}
      zoomControl={false}
      style={{ width: "100%", height: "100vh" }}
      onClick={addMarker}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
      {markers.map(marker => (
        <Marker position={marker} draggable>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </LeafletMap>
  );
};

export default Map;
