import React, { useState, useEffect, useRef } from "react";

import {
  IconContainer,
  BottomIconButtonsContainer,
  ToDoTextContainer
} from "./ToDoOnMap.styles";
import { MdDelete, MdPlaylistAddCheck } from "react-icons/md";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";

type MarkerId = number[];
interface Props {
  completed: boolean;
  isDraggable: boolean;
  markerId: MarkerId;
  deleteMarker(markerId: MarkerId): void;
  toggleCompleted(markerId: MarkerId): void;
  toggleDraggable(markerId: MarkerId): void;
}

const ToDoOnMap: React.FC<Props> = props => {
  const [todoEditable, setTodoEditable] = useState(false);
  const [todoText, setTodoText] = useState("");

  const element = useRef<HTMLDivElement>(null);

  // Focus on text if Todo becomes editable
  useEffect(() => {
    if (todoEditable === true) element?.current && element.current.focus();
  }, [todoEditable]);

  // If Todo has no text add placeholder text
  useEffect(() => {
    if (!todoText.length) setTodoText("Add a todo");
  }, [todoText]);

  // On blur event (clicking away) setTodoText to current text in the Todo
  const handleBlur = () => {
    element?.current?.textContent && setTodoText(element.current.textContent);
    setTodoEditable(false);
  };

  // Enter key can be used to end Todo editing, SHIFT+Enter returns so new line
  // functionality would work
  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.shiftKey && e.key === "Enter") return;
    if (e.key === "Enter") {
      element?.current?.textContent && setTodoText(element.current.textContent);
      setTodoEditable(false);
    }
  };

  return (
    <div>
      <ToDoTextContainer
        completed={props.completed}
        contentEditable={todoEditable}
        onBlur={handleBlur}
        onClick={() => setTodoEditable(true)}
        /* onFocus={() => document.execCommand("selectAll", false)}   // select all text */
        onKeyPress={handleEnterKey}
        ref={element}
        suppressContentEditableWarning
      >
        {todoText}
      </ToDoTextContainer>

      {props.isDraggable ? (
        <IconContainer>
          <TiLockOpen onClick={e => props.toggleDraggable(props.markerId)} />
        </IconContainer>
      ) : (
        <IconContainer>
          <TiLockClosed onClick={e => props.toggleDraggable(props.markerId)} />
        </IconContainer>
      )}

      <BottomIconButtonsContainer>
        <MdPlaylistAddCheck
          onClick={e => props.toggleCompleted(props.markerId)}
        />
        <MdDelete onClick={e => props.deleteMarker(props.markerId)} />
      </BottomIconButtonsContainer>
    </div>
  );
};

export default ToDoOnMap;
