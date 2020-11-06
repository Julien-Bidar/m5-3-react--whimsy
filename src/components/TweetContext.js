import React, { createContext, useContext, useState } from "react";
import avatar from "../assets/carmen-sandiego.png";

const tweetData = {
  tweetContents: "Where in the world am I?",
  displayName: "Carmen Sandiego ✨",
  username: "carmen-sandiego",
  isRetweetedByCurrentUser: false,
  isLikedByCurrentUser: false,
};

// getting date

let date = new Date();
let monthDayYear = date.toLocaleString("default", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
let hours = date.toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

const dateToDisplay = `${hours} - ${monthDayYear}`;

export const TweetContext = createContext(null);
export const useTweet = () => useContext(TweetContext);

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const { tweetContents, displayName, username } = tweetData;
  const avatarSrc = avatar;

  const handleToggleLike = () => {
    if (isLiked) {
      setNumOfLikes(numOfLikes - 1);
    } else {
      setNumOfLikes(numOfLikes + 1);
    }
    setIsLiked(!isLiked);
  };
  const handleToggleRetweet = () => {
    if (isRetweeted) {
      setNumOfRetweets(numOfRetweets - 1);
    } else {
      setNumOfRetweets(numOfRetweets + 1);
    }
    setIsRetweeted(!isRetweeted);
    console.log("ola");
  };

  return (
    <TweetContext.Provider
      value={{
        avatarSrc,
        tweetContents,
        displayName,
        username,
        isRetweeted,
        isLiked,
        dateToDisplay,
        numOfLikes,
        numOfRetweets,
        handleToggleLike,
        handleToggleRetweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
