import { Flex, Image, Stack } from "@chakra-ui/react";
import React from "react";
import NavItem from "./NavItem";
import { BiHomeSmile, BiHash } from "react-icons/bi";
import { MdNotificationsNone, MdPersonOutline } from "react-icons/md";
import { FiBookmark } from "react-icons/fi";

import { GoGear } from "react-icons/go";

import { HiOutlineMail } from "react-icons/hi";
import { User } from "firebase/auth";

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
];

function Navigation({ user }: NavigationProps) {
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

      {!user &&
        <Stack spacing={2} alignItems="flex-start" mt={4}>
          {DefaultNavItems.map((item) => (
            <NavItem icon={item.icon} title={item.title} />
          ))}
        </Stack>
      }
    </>
  );
}

export default Navigation;
