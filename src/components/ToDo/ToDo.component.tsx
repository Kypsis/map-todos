import React from "react";

interface Props {
  markerId: number[];
  completed: boolean;
  isDraggable: boolean;
  deleteMarker(e: any, markerId: number[]): void;
  toggleCompleted(e: any, markerId: number[]): void;
  toggleDraggable(e: any, markerId: number[]): void;
}

const ToDo: React.FC<Props> = props => {
  return (
    <div>
      <h2>Test</h2>
      <button onClick={e => props.toggleDraggable(e, props.markerId)}>
        {!props.isDraggable ? "Unlock Drag" : "Lock Drag"}
      </button>
      <button onClick={e => props.toggleCompleted(e, props.markerId)}>
        {!props.completed ? "Done" : "Not Done"}
      </button>
      <button onClick={e => props.deleteMarker(e, props.markerId)}>
        Delete
      </button>
    </div>
  );
};

export default ToDo;
