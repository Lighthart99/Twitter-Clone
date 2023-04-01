import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

type NavItemProps = {
  title: string;
  icon: any;
};

const NavItem = ({title, icon}: NavItemProps) => {
  return (
    <Flex alignItems="center" p="12px 16px 12px 12px" _hover={{background: 'gray.100'}} borderRadius="full">
      <Icon as={icon} fontSize="24px" mr={3} />
      <Text fontWeight={700} fontSize="20px">{title}</Text>
    </Flex>
  );
};

export default NavItem;
