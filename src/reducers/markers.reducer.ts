import { TodoMarker, Action, ActionTypes } from "../actions";

const defaultState = [
  {
    coords: [59.43898, 24.745272],
    text: "Placeholder text",
    address: "",
    completed: false,
    isDraggable: false
  },
  {
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
    case ActionTypes.addMarker:
      return [
        ...state,
        {
          coords: [action.payload.latlng.lat, action.payload.latlng.lng],
          text: "",
          address: "",
          completed: false,
          isDraggable: false
        }
      ];
    default:
      return state;
  }
};
