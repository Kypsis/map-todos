import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface TodoMarker {
  id: string;
  coords: number[];
  text: string;
  address: string;
  completed: boolean;
  isDraggable: boolean;
}
