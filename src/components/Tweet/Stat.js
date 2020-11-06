import React, { useContext } from "react";
import { useTweet } from "../TweetContext";
import styled from "styled-components";

const Stat = () => {
  const { numOfLikes, numOfRetweets } = useTweet();
  return (
    <Stats>
      <RetDiv>
        <StatNum>{numOfRetweets}</StatNum> Retweets
      </RetDiv>
      <LikeDiv>
        <StatNum>{numOfLikes}</StatNum> Likes
      </LikeDiv>
    </Stats>
  );
};

const LikeDiv = styled.div`
  margin-left: 20px;
`;

const RetDiv = styled.div``;

const StatNum = styled.span`
  font-weight: 700;
  color: black;
`;

const Stats = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  display: flex;
  align-items: center;
  height: 48px;
`;

export default Stat;
