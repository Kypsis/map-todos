import {
  AddMarkerAction,
  ToggleDraggableAction,
  ToggleCompletedAction
} from "./markers.actions";

export enum ActionTypes {
  ADD_MARKER = "ADD_MARKER",
  TOGGLE_DRAGGABLE = "TOGGLE_DRAGGABLE",
  TOGGLE_COMPLETED = "TOGGLE_COMPLETED"
}

export type Action =
  | AddMarkerAction
  | ToggleCompletedAction
  | ToggleDraggableAction;

export interface TodoMarker {
  coords: number[];
  text: string;
  address: string;
  completed: boolean;
  isDraggable: boolean;
}
