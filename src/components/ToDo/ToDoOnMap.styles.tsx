import styled from "styled-components";

export const DoneButton = styled.button`
  align-items: center;
  background-color: #5290f4;
  border-radius: 5em;
  border: none;
  box-shadow: 0 2px 2px #888888;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 1.2em;
  font-family: Calibri, sans-serif;
  font-weight: bold;
  height: 2em;
  width: 5.8em;
  justify-content: center;
  margin: 0 0.4em;
  outline: none;
  text-decoration: none;
  transition-duration: 0.2s;
  user-select: none;
  -webkit-transition-duration: 0.4s;

  :hover {
    background-color: #4b82e1;
  }

  :active {
    background-color: #4073c4;
    box-shadow: none;
    color: #f2f2f2;
    transform: scale(0.98);
  }
`;

export const DeleteButton = styled(DoneButton)`
  background-color: rgb(255, 50, 112);

  :hover {
    background-color: rgb(205, 40, 100);
  }

  :active {
    background-color: rgb(175, 30, 90);
  }
`;

export const BottomIconButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2px;
  min-width: 14.5em;
`;

export const IconContainer = styled.div`
  color: gray;
  cursor: pointer;
  font-size: 22px;
  position: absolute;
  left: 3px;
  top: 1px;
`;

interface ToDoTextProps {
  readonly completed: boolean;
}

export const ToDoTextContainer = styled.div<ToDoTextProps>`
  font-size: 1.65em;
  margin-block-start: 1.9em;
  margin-block-end: 0.4em;
  outline: none;
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
`;
