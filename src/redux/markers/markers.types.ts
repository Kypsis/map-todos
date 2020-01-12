import {
  AddMarkerAction,
  UpdatePositionAction,
  ToggleDraggableAction,
  ToggleCompletedAction,
  DeleteMarkerAction
} from "./markers.actions";

export enum ActionTypes {
  ADD_MARKER = "ADD_MARKER",
  UPDATE_POSITION = "UPDATE_POSITION",
  TOGGLE_DRAGGABLE = "TOGGLE_DRAGGABLE",
  TOGGLE_COMPLETED = "TOGGLE_COMPLETED",
  DELETE_MARKER = "DELETE_MARKER"
}

export type Action =
  | AddMarkerAction
  | UpdatePositionAction
  | ToggleCompletedAction
  | ToggleDraggableAction
  | DeleteMarkerAction;

export interface TodoMarker {
  coords: number[];
  text: string;
  address: string;
  completed: boolean;
  isDraggable: boolean;
}
