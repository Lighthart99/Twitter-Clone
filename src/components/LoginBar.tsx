import { Flex, Container, Stack, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "./atoms/authModalAtom";
import AuthModal from "./modal/auth/AuthModal";

type LoginBarProps = {};

function LoginBar({}: LoginBarProps) {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
    <AuthModal/>
    <Flex
      width="100%"
      position="fixed"
      bottom={0}
      left={0}
      backgroundColor="blue.500"
    >
      <Container maxW="800px" padding="8px">
        <Flex direction="row" alignItems="center">
          <Flex direction="column" color="white" flexGrow={1}>
            <Text fontWeight={700}>Do not miss what is happening</Text>
            <Text fontWeight={500}>
              People on Twitter are the first to know.
            </Text>
          </Flex>

          <Stack direction="row" spacing={4}>
            <Button
              variant="outline"
              borderRadius="full"
              color="white"
              _hover={{ backgroundColor: "blue.400" }}
              onClick={() => setAuthModalState({open: true, view: 'signin'})}
              >
              Log in
            </Button>
            <Button borderRadius="full">Sign Up</Button>
          </Stack>
        </Flex>
      </Container>
    </Flex>
    </>
  );
}

export default LoginBar;
