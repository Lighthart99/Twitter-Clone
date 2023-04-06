import { auth } from "@/firebase/firebase";
import {
  Button,
  Flex,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useSetRecoilState } from "recoil";
import { tweetModalState } from "../../atoms/tweetModalAtom";

import { BiImageAlt, BiPoll } from "react-icons/bi";
import { AiOutlineGif } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineSchedule } from "react-icons/md";
import CreateTweet from "../tweet/CreateTweet";

type ModalProps = {
  userPhoto: any;
};

const TweetModal = ({ userPhoto }: ModalProps) => {
  const [modalState, setmodalState] = useRecoilState(tweetModalState);
  const [user, loading, error] = useAuthState(auth);

  const handleClose = () => {
    setmodalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent textAlign="center" maxW="600px">
          <ModalHeader>Tweet</ModalHeader>
          <ModalCloseButton left="8px" rounded="full" />

          {user && <CreateTweet user={user} userPhoto={userPhoto} />}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TweetModal;
