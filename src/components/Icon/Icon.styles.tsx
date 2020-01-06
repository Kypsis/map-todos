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

/* const animation = keyframes`
fade {
  0%, 100% { 
    opacity: 0 
  }

  50% { 
    opacity: 1 
  }
}
`;

const animationRule = css`
  ${animation} 1s infinite alternate;
`; */

const animation = keyframes`
  0% {
    opacity: 0;
  }

  100 {
    opacity: 1;
  }
`;

// ts styled plugin issue, complies fine
const animationRule = css`
  ${animation} 1s infinite alternate
`;

export const SvgContainer = styled.div<SvgProps>`
  opacity: ${props => (props.completed ? "0.5" : "1")};
  animation: ${animationRule};
`;
