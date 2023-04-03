import { auth } from "@/firebase/firebase";
import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { constSelector } from "recoil";

type UserMenuProps = {
  user?: User | null;
};

function UserMenu({ user }: UserMenuProps) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while logging out.");
    }
  };

  // doesn't work

  return (
    <>
      <Flex height="full" alignItems="flex-end">
        <Menu>
          <MenuButton as={Button}>
            <Flex direction="row" alignItems="center">
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                boxSize="32px"
                mr={2}
              />
              <Text fontSize="10pt" fontWeight={700}>
                {user?.displayName || user?.email?.split("@")[0]}
              </Text>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleLogout}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
}

export default UserMenu;
