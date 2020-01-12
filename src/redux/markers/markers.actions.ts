import { ActionTypes } from "./markers.types";
import { LeafletMouseEvent } from "leaflet";

export interface AddMarkerAction {
  type: ActionTypes.ADD_MARKER;
  payload: LeafletMouseEvent;
}

export const addMarker = (event: LeafletMouseEvent): AddMarkerAction => {
  return {
    type: ActionTypes.ADD_MARKER,
    payload: event
  };
};

export interface ToggleDraggableAction {
  type: ActionTypes.TOGGLE_DRAGGABLE;
  payload: string;
}

export const toggleDraggable = (markerId: string): ToggleDraggableAction => {
  return {
    type: ActionTypes.TOGGLE_DRAGGABLE,
    payload: markerId
  };
};
