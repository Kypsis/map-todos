import styled, { css, keyframes } from "styled-components";

export const TextContainer = styled.div`
  background-color: white;
  border: 1px solid #51565f;
  border-radius: 50%;
  color: dimgray;
  position: absolute;
  left: 16px;
  top: 6px;
  width: 22px;
`;

interface SvgProps {
  readonly completed: boolean;
  readonly isDraggable: boolean;
}

const animation = keyframes`
  0% {
    opacity: 0.1;
  }

  100 {
    opacity: 1;
  }
`;

export const SvgContainer = styled.div<SvgProps>`
  opacity: ${props => (props.completed ? "0.35" : "1")};
  ${props =>
    props.isDraggable &&
    css`
      animation: ${animation} 0.8s infinite alternate;
    `};
`;
