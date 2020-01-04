import React, { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import {
  Map as LeafletMap,
  Marker,
  Popup,
  TileLayer,
  ZoomControl
} from "react-leaflet";
import L from "leaflet";

import ToDo from "../ToDo/ToDo.component";
import Icon from "../Icon/Icon.component";

import "./Map.css";

interface Props {}

interface MarkerTypes {
  coords: any;
  completed: boolean;
  isDraggable: boolean;
}

const Map: React.FC<Props> = () => {
  const [markers, setMarkers] = useState([
    { coords: [59.43898, 24.745272], completed: false, isDraggable: false },
    { coords: [59.44508, 24.776272], completed: false, isDraggable: false }
  ]);
  const [allowAddMarker, setAllowAddMarker] = useState(true);

  // console log if markers state changes
  useEffect(() => {
    console.log(markers);
  }, [markers]);

  const addMarker = (e: any): void => {
    setMarkers(currentMarkers => [
      ...currentMarkers,
      {
        coords: [e.latlng.lat, e.latlng.lng],
        completed: false,
        isDraggable: false
      }
    ]);
  };

  const updateMarkerPosition = (e: any): void => {
    const markerIndex = markers.findIndex(
      marker => marker.coords === e.target.options.position
    );

    // copy current markers state
    let copiedMarkers = [...markers];

    // replace dragged marker initial coordinates with new coordinates
    copiedMarkers[markerIndex].coords = [
      e.target._latlng.lat,
      e.target._latlng.lng
    ];

    // set modified copiedMarkers as new markers state
    setMarkers(copiedMarkers);
  };

  const toggleDraggable = (e: any, markerId: number[]): void => {
    const markerIndex = markers.findIndex(marker => marker.coords === markerId);

    let copiedMarkers = [...markers];

    copiedMarkers[markerIndex].isDraggable = !copiedMarkers[markerIndex]
      .isDraggable;

    setMarkers(copiedMarkers);
  };

  const toggleCompleted = (e: any, markerId: number[]): void => {
    const markerIndex = markers.findIndex(marker => marker.coords === markerId);

    let copiedMarkers = [...markers];

    copiedMarkers[markerIndex].completed = !copiedMarkers[markerIndex]
      .completed;

    setMarkers(copiedMarkers);
  };

  const deleteMarker = (e: any, markerId: number[]): void => {
    setMarkers(markers.filter(marker => marker.coords !== markerId));
  };

  return (
    <LeafletMap
      center={[59.43708, 24.745272]}
      zoom={12}
      zoomControl={false}
      style={{ width: "100%", height: "100vh" }}
      onClick={allowAddMarker ? addMarker : null}
      onPopupOpen={() => setAllowAddMarker(false)}
      // add timeout, otherwise it will add marker on map when clicking out of popup
      onPopupClose={() => setTimeout(() => setAllowAddMarker(true), 50)}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />

      {markers.map((marker: MarkerTypes, index: number) => {
        const icon = L.divIcon({
          iconSize: [50, 50],
          iconAnchor: [28, 52],
          html: ReactDOMServer.renderToString(<Icon iconNumber={index} />),
          className: "div-icon-style"
        });
        return (
          <Marker
            key={`${marker.coords}`}
            position={marker.coords}
            draggable={marker.isDraggable}
            onDragend={updateMarkerPosition}
            opacity={marker.completed ? 0.3 : 1}
            icon={icon}
          >
            <Popup className="popup-style">
              <ToDo
                markerId={marker.coords}
                completed={marker.completed}
                isDraggable={marker.isDraggable}
                deleteMarker={deleteMarker}
                toggleDraggable={toggleDraggable}
                toggleCompleted={toggleCompleted}
              />
            </Popup>
          </Marker>
        );
      })}
    </LeafletMap>
  );
};

export default Map;
