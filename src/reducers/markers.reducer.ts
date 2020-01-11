import { TodoMarker, Action, ActionTypes } from "../actions";

const defaultState = [
  {
    id: "marker1",
    coords: [59.43898, 24.745272],
    text: "Placeholder text",
    address: "",
    completed: false,
    isDraggable: false
  },
  {
    id: "marker2",
    coords: [59.42898, 24.79523],
    text: "",
    address: "",
    completed: false,
    isDraggable: false
  }
];

export const markersReducer = (
  state: TodoMarker[] = defaultState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
