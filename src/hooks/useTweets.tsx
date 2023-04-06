import { tweetState } from "@/atoms/tweetsAtom";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

const useTweets = () => {

    const [tweetStateValue, setTweetStateValue] = useRecoilState(tweetState);

    return {
        tweetStateValue,
        setTweetStateValue,
    }
}

export default useTweets