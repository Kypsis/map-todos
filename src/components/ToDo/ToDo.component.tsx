import React from "react";

interface Props {
  markerId: number[];
  handleClick(e: any, markerId: number[]): void;
}

const ToDo: React.FC<Props> = props => {
  return (
    <div>
      <h2>Test</h2>
      <button onClick={e => props.handleClick(e, props.markerId)}>
        Delete
      </button>
    </div>
  );
};

export default ToDo;
