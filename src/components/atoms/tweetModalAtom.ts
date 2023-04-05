import {atom} from 'recoil'


export interface tweetModalState {
    open: boolean;
    view: "tweet"
  }

  const defaultModalState: tweetModalState = {
    open: false,
    view: "tweet",
  };
    
  export const tweetModalState = atom<tweetModalState>({
    key: "tweetModalState",
    default: defaultModalState,
  });
