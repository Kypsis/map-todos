import styled from "styled-components";

export const BottomIconButtonsContainer = styled.div`
  color: gray;
  display: flex;
  justify-content: space-around;
  font-size: 2em;
  padding-top: 2px;
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
  font-size: 1.9em;
  margin-block-start: 1.5em;
  margin-block-end: 0.4em;
  outline: none;
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
`;
