import React from "react";
import styled, { keyframes } from "styled-components";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
  const spring = useSpring({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    transform: "scale(1)",
    from: { transform: "scale(0)" },
    config: { tension: 200, friction: 10 },
  });

  return <animated.div style={spring}>{children}</animated.div>;
};

export default ScaleIn;
