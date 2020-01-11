import { FetchTodosAction, DeleteTodoAction } from "./todos.actions";
import { addMarker, AddMarkerAction } from "./markers.actions";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
  addMarker
}

export type Action = FetchTodosAction | DeleteTodoAction | AddMarkerAction;
