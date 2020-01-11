import { combineReducers } from "redux";

import { markersReducer } from "./markers.reducer";
import { todosReducer } from "./todos.reducer";
import { Todo, TodoMarker } from "../actions";

export interface StoreState {
  todos: Todo[];
  markers: TodoMarker[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
  markers: markersReducer
});
