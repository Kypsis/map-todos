import { ActionTypes, Action, TodoMarker } from "./markers.types";

const INITIAL_STATE = [
  {
    coords: [59.43898, 24.745272],
    text: "Click on this text to add a todo!",
    address: "",
    completed: false,
    isDraggable: false
  },
  {
    coords: [59.42898, 24.79523],
    text: "Click on this text to add a todo!",
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
  let copiedState = [...state];

  switch (action.type) {
    case ActionTypes.ADD_MARKER:
      return [
        ...state,
        {
          coords: [action.payload.lat, action.payload.lng],
          text: "Click on this text to add a todo!",
          address: "",
          completed: false,
          isDraggable: false
        }
      ];

    case ActionTypes.UPDATE_POSITION:
      const markerIndexForPosition = state.findIndex(
        marker => marker.coords.toString() === action.payload.options
      );
      copiedState[markerIndexForPosition].coords = [
        action.payload.lat,
        action.payload.lng
      ];
      return [...copiedState];


    // TODO from this point, does not set placeholder text when falsy
    case ActionTypes.UPDATE_TEXT:
      const markerIndexForText = state.findIndex(
        marker => marker.coords.toString() === action.payload.markerId
      );
      console.log(action.payload.textContent.length);

      copiedState[markerIndexForText].text = action.payload.textContent.length
        ? action.payload.textContent
        : "Click on this text to add a todo!";
      return [...copiedState];

    case ActionTypes.TOGGLE_DRAGGABLE:
      copiedState[markerIndex].isDraggable = !copiedState[markerIndex]
        .isDraggable;
      return [...copiedState];

    case ActionTypes.TOGGLE_COMPLETED:
      copiedState[markerIndex].completed = !copiedState[markerIndex].completed;
      return [...copiedState];

    case ActionTypes.DELETE_MARKER:
      return state.filter(
        marker => marker.coords.toString() !== action.payload
      );

    default:
      return state;
  }
};
