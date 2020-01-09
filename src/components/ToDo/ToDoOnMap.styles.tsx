import styled from "styled-components";

export const DoneButton = styled.button`
  background-color: #5290f4;
  /* font-size: 2em; */
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 0 2px 2px #888888;
  outline: none;
  min-width: 6.3em;
  min-height: 2em;

  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.2s;

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
  justify-content: space-around;
  padding-top: 2px;
  min-width: 16em;
`;

export const IconContainer = styled.div`
  color: gray;
  font-size: 22px;
  position: absolute;
  left: 3px;
  top: 1px;
`;
interface ToDoTextProps {
  readonly completed: boolean;
}

export const ToDoTextContainer = styled.div<ToDoTextProps>`
  color: #474747;
  font-size: 1.6em;
  margin-block-start: 1.5em;
  margin-block-end: 0.4em;
  outline: none;
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
`;
