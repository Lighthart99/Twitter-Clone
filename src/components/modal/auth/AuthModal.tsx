import { authModalState } from "@/components/atoms/authModalAtom";
import { auth } from "@/firebase/firebase";
import {
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Modal,
  Box,
  Image,
  Divider,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useSetRecoilState } from "recoil";
import AuthButtons from "./AuthButtons";
import CreateAccountInput from "./CreateAccountInputs";
import LoginInputs from "./LoginInputs";

type ModalProps = {};

const AuthModal = ({}: ModalProps) => {
  const [modalState, setmodalState] = useRecoilState(authModalState);
  const setAuthModalState = useSetRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);

  const handleClose = () => {
    setmodalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  useEffect(() => {
    if (user) handleClose();
    console.log("user", user);
  }, [user]);

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent textAlign="center">
          <ModalHeader>
            {modalState.view === "signin" && "Sign in to Twitter"}
            {modalState.view === "signup" && "Sign up to Twitter"}
            {modalState.view === "resetpassword" && "Forgot Password"}
          </ModalHeader>
          <ModalCloseButton left="8px" rounded="full" />

          <Stack m="24px" spacing={6}>
            {modalState.view === "signin" || modalState.view === "signup" ? (
              <>
                {modalState.view === "signin" && (
                  <>
                    <AuthButtons />
                    <Divider />
                    <LoginInputs />
                  </>
                )}

                {modalState.view === "signup" && <CreateAccountInput />}
              </>
            ) : (
              <Input placeholder="Email" />
            )}

            <Text>
              {modalState.view === "signin" && "Don't have an account?"}
              {modalState.view === "signup" && "Have already an account?"}

              <Text
                as="span"
                ml={2}
                cursor="pointer"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
                onClick={() =>
                  setAuthModalState((prev) => ({
                    ...prev,
                    view: "signin",
                  }))
                }
              >
                {modalState.view === "signup" && "Sign in"}
              </Text>

              <Text
                as="span"
                ml={2}
                cursor="pointer"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
                onClick={() =>
                  setAuthModalState((prev) => ({
                    ...prev,
                    view: "signup",
                  }))
                }
              >
                {modalState.view === "signin" && "Sign Up"}
              </Text>
            </Text>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
