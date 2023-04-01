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
} from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { constSelector } from "recoil";

type UserMenuProps = {
  user?: User | null;
};

function UserMenu ({ user }: UserMenuProps)  {

    console.log('signed in', user)

  const logout = async () => {
    await signOut(auth);
    console.log('logged out', logout)
  };

  return (
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
            {user?.email}
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={logout}>Sign out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default UserMenu;
