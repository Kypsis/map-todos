import { AddMarkerAction, ToggleDraggableAction } from "./markers.actions";

export enum ActionTypes {
  ADD_MARKER,
  TOGGLE_DRAGGABLE
}

export type Action = AddMarkerAction | ToggleDraggableAction;

export interface TodoMarker {
  coords: number[];
  text: string;
  address: string;
  completed: boolean;
  isDraggable: boolean;
}
