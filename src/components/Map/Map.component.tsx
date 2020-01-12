import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";
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

import {
  addMarker,
  AddMarkerAction
} from "../../redux/markers/markers.actions";
import { TodoMarker } from "../../redux/markers/markers.types";
import { StoreState } from "../../redux/root-reducer";

import ToDoOnMap from "../ToDo/ToDoOnMap.component";
import Icon from "../Icon/Icon.component";

import "./Map.css";

interface Props {
  markers: TodoMarker[];
  addMarker(e: LeafletMouseEvent): AddMarkerAction;
}

const Map: React.FC<Props> = props => {
  const [allowAddMarker, setAllowAddMarker] = useState(true);

  const { markers, addMarker } = props;

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
                isDraggable={isDraggable}
                markerId={coords.toString()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Map);
