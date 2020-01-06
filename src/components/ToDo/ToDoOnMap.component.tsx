import React, { useState, useEffect, useRef } from "react";

import { MdDelete, MdPlaylistAddCheck } from "react-icons/md";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";

interface Props {
  markerId: number[];
  completed: boolean;
  isDraggable: boolean;
  deleteMarker(e: any, markerId: number[]): void;
  toggleCompleted(e: any, markerId: number[]): void;
  toggleDraggable(e: any, markerId: number[]): void;
}

const ToDo: React.FC<Props> = props => {
  const [todoText, setTodoText] = useState("Add a todo");
  const [todoEditable, setTodoEditable] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const element: any = useRef(null);

  useEffect(() => {
    element.current.focus();
    setTodoText(element.current.textContent);
    console.log(todoEditable);
  }, [todoEditable]);

  useEffect(() => {
    console.log(todoText);
  }, [todoText]);

  useEffect(() => {
    setButtonDisabled(false);
  }, [buttonDisabled]);

  return (
    <div>
      <div
        ref={element}
        contentEditable={todoEditable}
        onBlur={e => {
          setTodoEditable(false);
          setButtonDisabled(true);
        }}
        suppressContentEditableWarning
        onFocus={() => document.execCommand("selectAll", false)}
      >
        {todoText}
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <MdPlaylistAddCheck
          style={{ fontSize: "2em", color: "gray", paddingTop: "2px" }}
          onClick={e => props.toggleDraggable(e, props.markerId)}
        />
        <MdDelete
          style={{ fontSize: "2em", color: "gray" }}
          onClick={e => props.deleteMarker(e, props.markerId)}
        />
        <button
          disabled={buttonDisabled}
          onClick={() => setTodoEditable(!todoEditable)}
        >
          edit
        </button>
      </div>
    </div>
  );
};

export default ToDo;
