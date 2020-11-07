import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return <Pop size={size} color={color}></Pop>;
};

const pop = keyframes`
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
    `;
const fade = keyframes`
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
    `;

const Pop = styled.div`
  animation: ${pop} 500ms ease-in forwards, ${fade} 750ms ease-in forwards;
  border-radius: 50%;
  width: ${({ size }) => `${size}px`};
  background: ${({ color }) => color};
  height: ${({ size }) => `${size}px`};
`;

export default PoppingCircle;
