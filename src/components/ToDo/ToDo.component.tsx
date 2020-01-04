import React, { useState } from "react";
import TextareaAutosize from "react-autosize-textarea";

interface Props {
  markerId: number[];
  completed: boolean;
  isDraggable: boolean;
  deleteMarker(e: any, markerId: number[]): void;
  toggleCompleted(e: any, markerId: number[]): void;
  toggleDraggable(e: any, markerId: number[]): void;
}

const ToDo: React.FC<Props> = props => {
  const [value, setValue] = useState("Add a todo");
  const [editable, setEditable] = useState(false);

  const handleChange = (e: any): void => setValue(e.target.value);

  return (
    <div>
      {!editable ? (
        <p style={{ fontSize: "2em" }} onClick={() => setEditable(true)}>
          {value}
        </p>
      ) : (
        <form
          style={{ display: "flex" }}
          onSubmit={e => {
            e.preventDefault();
            setEditable(false);
          }}
        >
          <TextareaAutosize
            style={{
              fontSize: "2em",
              resize: "none",
              border: "none",
              outline: "none",
              marginBlockStart: "0.2em",
              marginBlockEnd: "0.65em",
              fontFamily: "inherit",
              lineHeight: "inherit"
            }}
            value={value}
            onChange={handleChange}
            autoFocus
            onFocus={e => e.target.select()}
            onBlur={e => setEditable(false)}
          />
        </form>
      )}
      <button onClick={e => props.toggleDraggable(e, props.markerId)}>
        {!props.isDraggable ? "UDrag" : "LDrag"}
      </button>
      <button onClick={e => props.toggleCompleted(e, props.markerId)}>
        {!props.completed ? "Done" : "NDone"}
      </button>
      <button onClick={e => props.deleteMarker(e, props.markerId)}>Del</button>
    </div>
  );
};

export default ToDo;
