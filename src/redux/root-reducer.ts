import { combineReducers } from "redux";

import { markersReducer } from "./markers/markers.reducer";
import { TodoMarker } from "./markers/markers.types";

export interface StoreState {
  markers: TodoMarker[];
}

export const rootReducer = combineReducers<StoreState>({
  markers: markersReducer
});
