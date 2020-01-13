import React, { useState, useEffect, useRef } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import Address from "../Address/Address.component";
import {
  BottomIconButtonsContainer,
  DoneButton,
  DeleteButton,
  IconContainer,
  ToDoTextContainer
} from "./ToDoOnMap.styles";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";
import {
  updateText,
  toggleCompleted,
  toggleDraggable,
  deleteMarker
} from "../../redux/markers/markers.actions";

interface Props {
  coords: number[];
  address: string;
  text: string;
  completed: boolean;
  isDraggable: boolean;
  markerId: string;
  updateText(markerId: string, element: React.RefObject<HTMLDivElement>): void;
  deleteMarker(markerId: string): void;
  toggleCompleted(markerId: string): void;
  toggleDraggable(markerId: string): void;
}

const ToDoOnMap: React.FC<Props> = props => {
  const placeHolderText = "Click on this text to add a todo!";
  const [todoEditable, setTodoEditable] = useState(false);
  const [todoText, setTodoText] = useState(placeHolderText);

  const element = useRef<HTMLDivElement>(null);

  // Focus on text if Todo becomes editable
  useEffect(() => {
    if (todoEditable === true) {
      /* if (props.text === placeHolderText) setTodoText(""); */
      element?.current && element.current.focus();
    }
  }, [todoEditable]);

  // On blur event (clicking away) setTodoText to current text in the Todo or
  // to placeholder text if todo text is empty
  const handleBlur = () => {
    props.updateText(props.markerId, element);
    setTodoEditable(false);
  };

  // Enter key can be used to end Todo editing, SHIFT+Enter returns so new line
  // functionality would work
  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.shiftKey && e.key === "Enter") return;
    if (e.key === "Enter") {
      props.updateText(props.markerId, element);
      setTodoEditable(false);
    }
  };

  return (
    <>
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
        {props.text}
      </ToDoTextContainer>
      <Address coords={props.coords} />

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
          Complete
        </DoneButton>
        <DeleteButton onClick={() => props.deleteMarker(props.markerId)}>
          Delete
        </DeleteButton>
      </BottomIconButtonsContainer>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateText: (markerId: string, element: React.RefObject<HTMLDivElement>) =>
    dispatch(updateText(markerId, element)),
  toggleCompleted: (markerId: string) => dispatch(toggleCompleted(markerId)),
  toggleDraggable: (markerId: string) => dispatch(toggleDraggable(markerId)),
  deleteMarker: (markerId: string) => dispatch(deleteMarker(markerId))
});

export default connect(null, mapDispatchToProps)(ToDoOnMap);
