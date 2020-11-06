import React from "react";
import styled from "styled-components";

import Tweet from "./Tweet";
import { TweetContext } from "./TweetContext";

const App = () => {
  return (
    <Wrapper>
      <Tweet></Tweet>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

export default App;
