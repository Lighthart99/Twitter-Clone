import { authModalState } from "@/atoms/authModalAtom";
import { FIREBASE_ERRORS } from "@/firebase/error";
import { auth } from "@/firebase/firebase";
import { Stack, Input, Button, Text } from "@chakra-ui/react";
import { m } from "framer-motion";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useSetRecoilState } from "recoil";

type LoginInputsProps = {};

function LoginInputs({}: LoginInputsProps) {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signInWithEmailAndPassword(loginForm.email, loginForm.password);

    toast.success("succesfully signed in");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // udpate form state
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={4}>
        <Stack spacing={3}>
          <Input
            required
            name="email"
            placeholder="email"
            type="email"
            onChange={onChange}
          />
          <Input
            required
            name="password"
            placeholder="password"
            type="password"
            onChange={onChange}
          />
        </Stack>

        <Stack spacing={3}>
          <Button
            type="submit"
            backgroundColor="black"
            color="white"
            borderRadius="full"
            _hover={{ backgroundColor: "500" }}
            isLoading={loading}
          >
            Sign in
          </Button>
          {error?.message && <Text color="red">
            {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
          </Text>}
          <Button
            borderRadius="full"
            border="1px solid"
            borderColor="gray.200"
            backgroundColor="white"
            onClick={() =>
              setAuthModalState({ open: true, view: "resetpassword" })
            }
          >
            Forgot password?
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}

export default LoginInputs;
