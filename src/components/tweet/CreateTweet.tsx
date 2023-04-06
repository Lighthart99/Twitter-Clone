import { Tweet } from "@/atoms/tweetsAtom";
import { firestore, storage } from "@/firebase/firebase";
import useSelectFile from "@/hooks/useSelectFile";
import {
  Flex,
  Input,
  ModalFooter,
  Stack,
  Tooltip,
  Button,
  Icon,
  Image,
} from "@chakra-ui/react";
import { Timestamp } from "@google-cloud/firestore";
import { User } from "firebase/auth";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineGif } from "react-icons/ai";
import { BiImageAlt, BiPoll } from "react-icons/bi";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineSchedule } from "react-icons/md";

type CreateTweetProps = {
  user: User;
  userPhoto: any;
};

function CreateTweet({ user, userPhoto }: CreateTweetProps) {
  const router = useRouter();
  const [textInputs, setTextInputs] = useState({
    title: "",
    body: "",
  });

  const { selectedFile, setSelectedFile, onSelectFile } = useSelectFile();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleCreateTweet = async () => {
    // create new post object => type Post
    const newTweet: Tweet = {
      /// define here all defaults
      creatorId: user?.uid,
      creatorDisplayname: user.email!.split("@")[0],
      creatorPhotoURL: user.photoURL,
      title: textInputs.title,
      like: 0,
      retweet: 0,
      numberOfComments: 0,
      createdAt: serverTimestamp() as Timestamp,
    };

    try {
      setLoading(true);

      // store the post in db
      const tweetDocRef = await addDoc(
        collection(firestore, "tweets"),
        newTweet
      );

      // if (selectedFile) {
      //   const imageRef = ref(storage, `tweets/${tweetDocRef.id}/image`);
      //   await uploadString(imageRef, selectedFile, "data_url");
      //   const downloadURL = await getDownloadURL(imageRef);
      //   await updateDoc(tweetDocRef, {
      //     imageURL: downloadURL,
      //   });
      //   console.log("HERE IS DOWNLOAD URL", downloadURL);
      // }

      router.back();
    } catch (error: any) {
      console.log("handleCreateTweet error", error.message);
      setError(true);
    }
    setLoading(false);
  };

  const onTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = event;
    setTextInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Flex direction="row" py={3} px={6}>
        <Flex>
          <Image borderRadius="full" src={userPhoto} boxSize="40px" mr={8} />
        </Flex>
        <Flex width="100%">
          <Input
            name="title"
            value={textInputs.title}
            onChange={onTextChange}
            variant="unstyled"
            placeholder="What's happening?"
            width="100%"
            fontSize={18}
            fontWeight={500}
          />
        </Flex>
      </Flex>
      <ModalFooter>
        <Stack direction="row" spacing={0} width="100%">
          <Tooltip label="Add Image">
            <Button
              height={10}
              width={10}
              borderRadius="full"
              backgroundColor="white"
              color="blue.500"
              _hover={{ backgroundColor: "blue.50" }}
            >
              <Icon as={BiImageAlt} fontSize="18px" />
            </Button>
          </Tooltip>

          <Tooltip label="Create Poll">
            <Button
              height={10}
              width={10}
              borderRadius="full"
              backgroundColor="white"
              color="blue.500"
              _hover={{ backgroundColor: "blue.50" }}
            >
              <Icon as={BiPoll} fontSize="18px" />
            </Button>
          </Tooltip>

          <Tooltip label="Add GIF">
            <Button
              height={10}
              width={10}
              borderRadius="full"
              backgroundColor="white"
              color="blue.500"
              _hover={{ backgroundColor: "blue.50" }}
            >
              <Icon as={AiOutlineGif} fontSize="18px" />
            </Button>
          </Tooltip>

          <Tooltip label="Add Emoji">
            <Button
              height={10}
              width={10}
              borderRadius="full"
              backgroundColor="white"
              color="blue.500"
              _hover={{ backgroundColor: "blue.50" }}
            >
              <Icon as={FaRegSmile} fontSize="18px" />
            </Button>
          </Tooltip>

          <Tooltip label="Schedule Tweet">
            <Button
              height={10}
              width={10}
              borderRadius="full"
              backgroundColor="white"
              color="blue.500"
              _hover={{ backgroundColor: "blue.50" }}
            >
              <Icon as={MdOutlineSchedule} fontSize="18px" />
            </Button>
          </Tooltip>
        </Stack>

        <Button
          colorScheme="blue"
          mr={3}
          onClick={handleCreateTweet}
          borderRadius="full"
        >
          Tweet
        </Button>
      </ModalFooter>
    </>
  );
}

export default CreateTweet;
