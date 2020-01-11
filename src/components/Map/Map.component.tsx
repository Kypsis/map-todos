import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ReactDOMServer from "react-dom/server";
import {
  Map as LeafletMap,
  Marker,
  Popup,
  TileLayer,
  ZoomControl
} from "react-leaflet";
import L, { DragEndEvent, LeafletMouseEvent, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";

import { TodoMarker, addMarker, AddMarkerAction } from "../../actions";
import { StoreState } from "../../reducers";

import ToDoOnMap from "../ToDo/ToDoOnMap.component";
import Icon from "../Icon/Icon.component";

import "./Map.css";
import { Dispatch } from "redux";

interface Props {
  markers: TodoMarker[];
  addMarker(e: LeafletMouseEvent): AddMarkerAction;
}

const _Map: React.FC<Props> = props => {
  const [allowAddMarker, setAllowAddMarker] = useState(true);

  const { markers, addMarker } = props;

  // console log if markers state changes
  useEffect(() => console.log(markers), [markers]);

  /*
  const updateMarkerPosition = (e: DragEndEvent): void => {
    const markerIndex = markers.findIndex(
      marker => marker.coords === e.target.options.position
    );
    // copy current markers state
    let copiedMarkers = [...markers];

    if (copiedMarkers[markerIndex].coords !== undefined) {
      // replace dragged marker initial coordinates with new coordinates
      copiedMarkers[markerIndex].coords = [
        e.target._latlng.lat,
        e.target._latlng.lng
      ];
    } else {
      console.log("Marker lock error");
      return;
    }
    // set modified copiedMarkers as new markers state
    setMarkers(copiedMarkers);
  };

  const toggleDraggable = (markerId: number[]): void => {
    const markerIndex = markers.findIndex(marker => marker.coords === markerId);
    let copiedMarkers = [...markers];

    copiedMarkers[markerIndex].isDraggable = !copiedMarkers[markerIndex]
      .isDraggable;
    setMarkers(copiedMarkers);
  };

  const toggleCompleted = (markerId: number[]): void => {
    const markerIndex = markers.findIndex(marker => marker.coords === markerId);
    let copiedMarkers = [...markers];

    copiedMarkers[markerIndex].completed = !copiedMarkers[markerIndex]
      .completed;
    setMarkers(copiedMarkers);
  };

  const deleteMarker = (markerId: number[]): void => {
    setMarkers(markers.filter(marker => marker.coords !== markerId));
  };
 */
  return (
    <LeafletMap
      center={[59.43708, 24.745272]}
      style={{ width: "100%", height: "100vh" }}
      maxZoom={19}
      zoom={12}
      zoomControl={false}
      onClick={allowAddMarker ? addMarker : null}
      // add timeouts, otherwise it will add marker on map when clicking out of popup
      onPopupOpen={() => {
        setTimeout(() => setAllowAddMarker(false), 10);
      }}
      onPopupClose={() => {
        setTimeout(() => setAllowAddMarker(true), 10);
      }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />

      {markers.map((marker, index) => {
        const { coords, address, completed, isDraggable } = marker;
        const icon = L.divIcon({
          className: "div-icon-style",
          iconAnchor: [28, 52],
          iconSize: [50, 50],
          // Render custom svg icon
          html: ReactDOMServer.renderToString(
            <Icon
              isDraggable={isDraggable}
              completed={completed}
              iconNumber={index}
            />
          )
        });

        return (
          <Marker
            draggable={isDraggable}
            icon={icon}
            key={`${coords}`}
            /* onDragend={updateMarkerPosition} */
            position={coords as LatLngTuple}
          >
            <Popup
              className="popup-style"
              onOpen={() => setAllowAddMarker(false)}
            >
              <ToDoOnMap
                address={address}
                completed={completed}
                coords={coords}
                deleteMarker={/* deleteMarker */ () => 1}
                isDraggable={isDraggable}
                markerId={coords}
                toggleCompleted={/* toggleCompleted */ () => 1}
                toggleDraggable={/* toggleDraggable */ () => 1}
              />
            </Popup>
          </Marker>
        );
      })}
    </LeafletMap>
  );
};

const mapStateToProps = ({
  markers
}: StoreState): { markers: TodoMarker[] } => {
  return { markers };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addMarker: (e: LeafletMouseEvent) => dispatch(addMarker(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(_Map);
