import { ActionTypes } from "./markers.types";
import { LeafletMouseEvent, LatLng, DragEndEvent } from "leaflet";

export interface AddMarkerAction {
  type: ActionTypes.ADD_MARKER;
  payload: LatLng;
}

export const addMarker = (event: LeafletMouseEvent): AddMarkerAction => {
  return {
    type: ActionTypes.ADD_MARKER,
    payload: event.latlng
  };
};

export interface UpdatePositionAction {
  type: ActionTypes.UPDATE_POSITION;
  payload: { lat: number; lng: number; options: string };
}

export const updatePosition = (event: DragEndEvent): UpdatePositionAction => {
  return {
    type: ActionTypes.UPDATE_POSITION,
    payload: {
      lat: event.target._latlng.lat,
      lng: event.target._latlng.lng,
      options: event.target.options.position.toString()
    }
  };
};

export interface UpdateTextAction {
  type: ActionTypes.UPDATE_TEXT;
  payload: { markerId: string; textContent: string };
}

export const updateText = (
  markerId: string,
  element: React.RefObject<HTMLDivElement>
): UpdateTextAction => {
  return {
    type: ActionTypes.UPDATE_TEXT,
    payload: { markerId, textContent: element.current?.textContent ?? "" }
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

export interface ToggleCompletedAction {
  type: ActionTypes.TOGGLE_COMPLETED;
  payload: string;
}

export const toggleCompleted = (markerId: string): ToggleCompletedAction => {
  return {
    type: ActionTypes.TOGGLE_COMPLETED,
    payload: markerId
  };
};

export interface DeleteMarkerAction {
  type: ActionTypes.DELETE_MARKER;
  payload: string;
}

export const deleteMarker = (markerId: string): DeleteMarkerAction => {
  return {
    type: ActionTypes.DELETE_MARKER,
    payload: markerId
  };
};
