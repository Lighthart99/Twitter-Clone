import { Button, Flex, Image, Stack } from "@chakra-ui/react";
import { BiHash, BiHomeSmile } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { MdNotificationsNone, MdPersonOutline } from "react-icons/md";
import NavItem from "./NavItem";

import { RiMoreFill } from "react-icons/ri";

import { GoGear } from "react-icons/go";

import { User } from "firebase/auth";
import { HiOutlineMail } from "react-icons/hi";
import { useSetRecoilState } from "recoil";
import { tweetModalState } from "../../atoms/tweetModalAtom";

type NavigationProps = {
  user?: User | null;
};

const DefaultNavItems = [
  {
    icon: BiHash,
    title: "Explore",
  },

  {
    icon: GoGear,
    title: "Settings",
  },
];

const SignInNavItems = [
  {
    icon: BiHomeSmile,
    title: "Home",
  },

  {
    icon: BiHash,
    title: "Explore",
  },

  {
    icon: MdNotificationsNone,
    title: "Notifications",
  },

  {
    icon: HiOutlineMail,
    title: "Messages",
  },

  {
    icon: FiBookmark,
    title: "Bookmarks",
  },
  {
    icon: MdPersonOutline,
    title: "Profile",
  },
  {
    icon: RiMoreFill,
    title: "More",
  },
];

function Navigation({ user }: NavigationProps) {
  const setTweetModalState = useSetRecoilState(tweetModalState);
  return (
    <>
      <Flex
        _hover={{ background: "gray.100" }}
        cursor="pointer"
        borderRadius="full"
      >
        <Image
          src="/images/logos/twitter-logo.svg"
          boxSize="24px"
          alt="twitter-icon"
        />
      </Flex>
      {user && (
        <Stack spacing={2} alignItems="flex-start" mt={4}>
          {SignInNavItems.map((item) => (
            <NavItem icon={item.icon} title={item.title} />
          ))}
        </Stack>
      )}

      {!user && (
        <Stack spacing={2} alignItems="flex-start" mt={4}>
          {DefaultNavItems.map((item) => (
            <NavItem icon={item.icon} title={item.title} />
          ))}
        </Stack>
      )}

      {user && (
        <Button
          mt={4}
          py={6}
          width="full"
          borderRadius="full"
          textColor="white"
          backgroundColor="blue.500"
          _hover={{ backgroundColor: "blue.600" }}
          onClick={() => setTweetModalState({ open: true, view: "tweet" })}
        >
          Tweet
        </Button>
      )}
    </>
  );
}

export default Navigation;
