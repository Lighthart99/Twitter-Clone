import { Timestamp } from "@google-cloud/firestore";
import { atom } from "recoil";

export type Tweet = {
  // user related
  id?: string;
  creatorId: string;
  creatorDisplayname: string;
  creatorPhotoURL: string;

  // tweet body
  title: string;
  like: number;
  retweet: number;
  numberOfComments: number;
  createdAt: Timestamp;

};
// additional options
//   imageURL?: string;
//   poll: number;
//   gifURL?: string;
//   emojiURL: string;
//   scheduleTweet?: Date;

export type LikeTweet = {
  id: string;
  tweetId: string;
  likeValue: number;
};

export type RetweetTweet = {
  id: string;
  tweetId: string;
  retweetValue: string;
};

interface TweetState {
  selectedTweet: Tweet | null;
  tweets: [];
  tweetLikes: LikeTweet[];
  tweetRetweets: RetweetTweet[];
}

const defaultTweetState: TweetState = {
  selectedTweet: null,
  tweets: [],
  tweetLikes: [],
  tweetRetweets: [],
};

export const TweetState = atom<TweetState>({
  key: "tweetState",
  default: defaultTweetState,
});
