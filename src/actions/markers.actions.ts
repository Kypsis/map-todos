import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import { LeafletMouseEvent } from "leaflet";

export interface TodoMarker {
  coords: number[];
  text: string;
  address: string;
  completed: boolean;
  isDraggable: boolean;
}

export interface AddMarkerAction {
  type: ActionTypes.addMarker;
  payload: LeafletMouseEvent;
}

export const addMarker = (event: LeafletMouseEvent): AddMarkerAction => {
  return {
    type: ActionTypes.addMarker,
    payload: event
  };
};
