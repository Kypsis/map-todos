import React, { useState } from "react";
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
import "./Map.css";

import {
  addMarker,
  AddMarkerAction,
  updatePosition,
  UpdatePositionAction
} from "../../redux/markers/markers.actions";
import { TodoMarker } from "../../redux/markers/markers.types";
import { StoreState } from "../../redux/root-reducer";

import ToDoOnMap from "../ToDo/ToDoOnMap.component";
import Icon from "../Icon/Icon.component";

interface Props {
  markers: TodoMarker[];
  addMarker(event: LeafletMouseEvent): AddMarkerAction;
  updatePosition(event: DragEndEvent): UpdatePositionAction;
}

const Map: React.FC<Props> = props => {
  const [allowAddMarker, setAllowAddMarker] = useState(true);

  const { markers, addMarker, updatePosition } = props;

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
        const { coords, text, address, completed, isDraggable } = marker;
        const icon = L.divIcon({
          className: "div-icon-style",
          iconAnchor: [28, 52],
          iconSize: [50, 50],
          // Render custom svg icon
          html: ReactDOMServer.renderToString(
            <Icon
              completed={completed}
              iconNumber={index}
              isDraggable={isDraggable}
            />
          )
        });

        return (
          <Marker
            draggable={isDraggable}
            icon={icon}
            key={`${coords}`}
            onDragend={updatePosition}
            position={coords as LatLngTuple}
          >
            <Popup
              className="popup-style"
              onOpen={() => setAllowAddMarker(false)}
            >
              <ToDoOnMap
                coords={coords}
                text={text}
                address={address}
                completed={completed}
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
  addMarker: (event: LeafletMouseEvent) => dispatch(addMarker(event)),
  updatePosition: (event: DragEndEvent) => dispatch(updatePosition(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
