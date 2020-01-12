import { ActionTypes, Action, TodoMarker } from "./markers.types";

const INITIAL_STATE = [
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
  state: TodoMarker[] = INITIAL_STATE,
  action: Action
) => {
  const markerIndex = state.findIndex(
    marker => marker.coords.toString() === action.payload
  );
  let copiedMarkers = [...state];

  switch (action.type) {
    case ActionTypes.ADD_MARKER:
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
    case ActionTypes.TOGGLE_DRAGGABLE:
      copiedMarkers[markerIndex].isDraggable = !copiedMarkers[markerIndex]
        .isDraggable;
      return [...copiedMarkers];
    case ActionTypes.TOGGLE_COMPLETED:
      copiedMarkers[markerIndex].completed = !copiedMarkers[markerIndex]
        .completed;
      return [...copiedMarkers];
    default:
      return state;
  }
};
