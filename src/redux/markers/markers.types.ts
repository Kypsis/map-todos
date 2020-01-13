import { UpdateTextAction } from "./markers.actions";
import {
  AddMarkerAction,
  UpdatePositionAction,
  ToggleCompletedAction,
  ToggleDraggableAction,
  DeleteMarkerAction
} from "./markers.actions";

export enum ActionTypes {
  ADD_MARKER = "ADD_MARKER",
  UPDATE_POSITION = "UPDATE_POSITION",
  UPDATE_TEXT = "UPDATE_TEXT",
  TOGGLE_COMPLETED = "TOGGLE_COMPLETED",
  TOGGLE_DRAGGABLE = "TOGGLE_DRAGGABLE",
  DELETE_MARKER = "DELETE_MARKER"
}

export type Action =
  | AddMarkerAction
  | UpdateTextAction
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
