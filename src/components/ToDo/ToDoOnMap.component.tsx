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

  const element: any = useRef(null);

  useEffect(() => {
    element.current.focus();
    console.log(todoEditable);
  }, [todoEditable]);

  useEffect(() => {
    if (!todoText.length) setTodoText("Add a todo");

    console.log(todoText);
  }, [todoText]);

  return (
    <div>
      <div
        ref={element}
        contentEditable={todoEditable}
        onBlur={() => {
          setTodoText(element.current.textContent);
          setTodoEditable(false);
        }}
        onClick={() => setTodoEditable(true)}
        onKeyPress={e => {
          if (e.shiftKey && e.key === "Enter") return;
          if (e.key === "Enter") {
            setTodoText(element.current.textContent);
            setTodoEditable(false);
          }
        }}
        suppressContentEditableWarning
        /* onFocus={() => document.execCommand("selectAll", false)} */
        style={{
          outline: "none",
          color: "#474747",
          fontSize: "1.9em",
          marginBlockStart: "1.5em",
          marginBlockEnd: "0.4em",
          textDecoration: props.completed ? "line-through" : "none"
        }}
      >
        {todoText}
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {props.isDraggable ? (
          <div style={{ position: "absolute", left: "3px", top: "1px" }}>
            <TiLockOpen
              style={{
                color: "gray",
                fontSize: "22px"
              }}
              onClick={e => props.toggleDraggable(e, props.markerId)}
            />
          </div>
        ) : (
          <div style={{ position: "absolute", left: "3px", top: "1px" }}>
            <TiLockClosed
              style={{
                color: "gray",
                fontSize: "22px"
              }}
              onClick={e => props.toggleDraggable(e, props.markerId)}
            />
          </div>
        )}
        <MdPlaylistAddCheck
          style={{ fontSize: "2em", color: "gray", paddingTop: "2px" }}
          onClick={e => props.toggleCompleted(e, props.markerId)}
        />
        <MdDelete
          style={{ fontSize: "2em", color: "gray" }}
          onClick={e => props.deleteMarker(e, props.markerId)}
        />
      </div>
    </div>
  );
};

export default ToDo;
