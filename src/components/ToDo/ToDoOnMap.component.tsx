import React, { useState, useEffect, useRef } from "react";

import {
  BottomIconButtonsContainer,
  DoneButton,
  DeleteButton,
  IconContainer,
  ToDoTextContainer
} from "./ToDoOnMap.styles";
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
  const placeHolderText = "Click on this text to add a todo!";
  const [todoEditable, setTodoEditable] = useState(false);
  const [todoText, setTodoText] = useState(placeHolderText);

  const element = useRef<HTMLDivElement>(null);

  // Focus on text if Todo becomes editable
  useEffect(() => {
    if (todoEditable === true) {
      if (todoText === placeHolderText) setTodoText("");
      element?.current && element.current.focus();
    }
  }, [todoEditable, todoText]);

  // On blur event (clicking away) setTodoText to current text in the Todo or
  // to placeholder text if todo text is empty
  const handleBlur = () => {
    element?.current?.textContent?.length
      ? setTodoText(element.current.textContent)
      : setTodoText(placeHolderText);
    setTodoEditable(false);
  };

  // Enter key can be used to end Todo editing, SHIFT+Enter returns so new line
  // functionality would work
  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.shiftKey && e.key === "Enter") return;
    if (e.key === "Enter") {
      element?.current?.textContent?.length
        ? setTodoText(element.current.textContent)
        : setTodoText(placeHolderText);
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
        <DoneButton onClick={() => props.toggleCompleted(props.markerId)}>
          Done
        </DoneButton>
        <DeleteButton onClick={() => props.deleteMarker(props.markerId)}>
          Delete
        </DeleteButton>
      </BottomIconButtonsContainer>
    </div>
  );
};

export default ToDoOnMap;
