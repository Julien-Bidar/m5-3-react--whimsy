import React from "react";
import styled, { keyframes } from "styled-components";
import { useTweet } from "../TweetContext";
import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";
import ScaleIn from "./ScaleIn";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40 }) => {
  const { isLiked } = useTweet();
  const heartSize = size * 0.6;

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLiked ? (
        <ScaleIn>
          <Foreground>
            <Heart width={heartSize} isToggled={isLiked} />
          </Foreground>
        </ScaleIn>
      ) : (
        <Foreground>
          <Heart width={heartSize} isToggled={isLiked} />
        </Foreground>
      )}

      <Background>
        {isLiked && <PoppingCircle size={size} color="#E790F7" />}
      </Background>
    </Wrapper>
  );
};

const Foreground = styled.div`
  position: relative;
  z-index: 1;
`;

const Background = styled.div`
  position: absolute;
  z-index: 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
