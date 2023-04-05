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
} from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useSetRecoilState } from "recoil";
import { tweetModalState } from "../atoms/tweetModalAtom";

import { BiImageAlt, BiPoll } from "react-icons/bi";
import { AiOutlineGif } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineSchedule } from "react-icons/md";

type ModalProps = {
    userPhoto: any;
};

const TweetModal = ({userPhoto}: ModalProps) => {
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
        <ModalContent textAlign="center">
          <ModalHeader>Tweet</ModalHeader>
          <ModalCloseButton left="8px" rounded="full" />

          <Flex direction="row" py={3} px={6}>
            <Flex>
            <Image
                borderRadius="full"
                src={userPhoto}
                boxSize="40px"
                mr={8}
              />
            </Flex>
            <Flex width="100%">
              <Input variant='unstyled' placeholder="What's happening?" width="100%" fontSize={18} fontWeight={500}/>
            </Flex>
          </Flex>
          <ModalFooter>
            <Stack direction="row" spacing={0} width="100%">
              <Button
                height={10}
                width={10}
                borderRadius="full"
                backgroundColor="white"
                color="blue.500"
                _hover={{ backgroundColor: "blue.50" }}
              >
                <Icon as={BiImageAlt} fontSize="16px" />
              </Button>

              <Button
                height={10}
                width={10}
                borderRadius="full"
                backgroundColor="white"
                color="blue.500"
                _hover={{ backgroundColor: "blue.50" }}
              >
                <Icon as={BiPoll} fontSize="16px" />
              </Button>

              <Button
                height={10}
                width={10}
                borderRadius="full"
                backgroundColor="white"
                color="blue.500"
                _hover={{ backgroundColor: "blue.50" }}
              >
                <Icon as={AiOutlineGif} fontSize="16px" />
              </Button>

              <Button
                height={10}
                width={10}
                borderRadius="full"
                backgroundColor="white"
                color="blue.500"
                _hover={{ backgroundColor: "blue.50" }}
              >
                <Icon as={FaRegSmile} fontSize="16px" />
              </Button>

              <Button
                height={10}
                width={10}
                borderRadius="full"
                backgroundColor="white"
                color="blue.500"
                _hover={{ backgroundColor: "blue.50" }}
              >
                <Icon as={MdOutlineSchedule} fontSize="16px" />
              </Button>
            </Stack>

            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleClose}
              borderRadius="full"
            >
              Tweet
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TweetModal;
