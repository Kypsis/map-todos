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
  readonly draggable: boolean;
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
  opacity: ${props => (props.completed ? "0.4" : "1")};
  ${props =>
    props.draggable &&
    css`
      animation: ${animation} 0.8s infinite alternate;
    `};
`;
