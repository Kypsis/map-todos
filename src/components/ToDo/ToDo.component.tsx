import React from "react";

interface Props {
  markerId: number[];
  toggleDraggable(e: any, markerId: number[]): void;
  deleteMarker(e: any, markerId: number[]): void;
}

const ToDo: React.FC<Props> = props => {
  return (
    <div>
      <h2>Test</h2>
      <button onClick={e => props.toggleDraggable(e, props.markerId)}>
        Drag
      </button>
      <button onClick={e => props.deleteMarker(e, props.markerId)}>
        Delete
      </button>
    </div>
  );
};

export default ToDo;
