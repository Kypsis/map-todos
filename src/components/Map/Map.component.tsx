import React, { useState, useEffect } from "react";
import {
  Map as LeafletMap,
  Marker,
  Popup,
  TileLayer,
  ZoomControl
} from "react-leaflet";

import ToDo from "../ToDo/ToDo.component";

interface Props {}

const Map: React.FC<Props> = () => {
  const [markers, setMarkers] = useState([
    [59.43708, 24.745272],
    [59.44708, 24.735272]
  ]);

  useEffect(() => {
    console.log(markers);
  }, [markers]);

  const addMarker = (e: any): void => {
    console.log(e.latlng.lat);
    setMarkers([...markers, [e.latlng.lat, e.latlng.lng]]);
  };

  const handleClick = (e: any, markerId: number[]): void => {
    console.log(markerId);

    setMarkers(markers.filter(marker => marker !== markerId));
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
      {markers.map((marker: any) => (
        <Marker key={marker} position={marker} draggable>
          <Popup>
            <ToDo markerId={marker} handleClick={handleClick} />
          </Popup>
        </Marker>
      ))}
    </LeafletMap>
  );
};

export default Map;
