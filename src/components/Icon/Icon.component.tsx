import React from "react";

import { TextContainer } from "./Icon.styles";

interface Props {
  iconNumber: number;
}

const Icon: React.FC<Props> = props => {
  return (
    <>
      <svg x="20px" y="20px" viewBox="0 0 450 520">
        <circle fill="#A1A7EF" cx="238.556" cy="168" r="48" />
        <g transform="translate(11 1)">
          <path
            fill="#FF7474"
            d="M317.533,165.4c0-42.667-34.133-76.8-76.8-76.8s-76.8,34.133-76.8,76.8s34.133,76.8,76.8,76.8
		S317.533,208.067,317.533,165.4 M402.867,165.4c0,51.2-34.133,103.253-34.133,103.253L251.827,447c-3.413,0-7.68,0-11.093,0
		c-3.414,0-7.68,0-11.093,0L112.733,267.8c0,0-34.133-51.2-34.133-102.4c0-89.6,72.533-162.133,162.133-162.133
		S402.867,75.8,402.867,165.4"
          />
        </g>
        <path
          fill="#51565F"
          d="M251.733,503.467c-46.08,0-115.2-7.68-115.2-29.867c0-17.067,39.253-23.893,63.147-27.307
	c2.56,0,4.267,1.707,5.12,3.413c0,2.56-1.707,4.267-3.413,5.12c-40.107,5.12-55.467,13.653-55.467,18.773
	c0,7.68,36.693,21.333,106.667,21.333S359.253,481.28,359.253,473.6c0-3.413-13.653-13.653-56.32-18.773
	c-2.56,0-4.267-2.56-3.413-5.12c0-2.56,2.56-4.267,5.12-3.413c23.893,2.56,63.147,10.24,63.147,27.307
	C366.933,495.787,297.813,503.467,251.733,503.467z M251.733,469.333L251.733,469.333c-1.707,0-2.56-0.853-3.413-1.707l-128-196.267
	c-1.707-1.707-34.987-52.907-34.987-104.96c0-92.16,74.24-166.4,166.4-166.4s166.4,74.24,166.4,166.4
	c0,52.053-33.28,103.253-34.987,104.96l-128,195.413C254.293,468.48,253.44,469.333,251.733,469.333z M251.733,8.533
	c-87.04,0-157.867,70.827-157.867,157.867c0,49.493,33.28,99.84,33.28,99.84l124.587,191.147l123.733-190.293l0,0
	c0-0.853,34.133-51.2,34.133-100.693C409.6,79.36,338.773,8.533,251.733,8.533z M251.733,247.467
	c-44.373,0-81.067-36.693-81.067-81.067s36.693-81.067,81.067-81.067S332.8,122.027,332.8,166.4S296.107,247.467,251.733,247.467z
	M251.733,93.867c-40.107,0-72.533,32.427-72.533,72.533s32.427,72.533,72.533,72.533s72.533-32.427,72.533-72.533
	S291.84,93.867,251.733,93.867z"
        />
      </svg>
      <TextContainer>{props.iconNumber + 1}</TextContainer>
    </>
  );
};

export default Icon;
