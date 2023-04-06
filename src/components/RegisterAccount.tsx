import { auth } from "@/firebase/firebase";
import {
  Button,
  Flex, Image, Stack,
  Text
} from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../atoms/authModalAtom";

type RegisterAccountProps = {};

function RegisterAccount({}: RegisterAccountProps) {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success("Succesfully Logged in");
    } catch (error: any) {
      console.error(error);
      toast.error("An error occurred while logging out.");
    }
  };
  return (
    <>
      <Flex direction="column" mt="20px">
        <Text fontSize="20px" fontWeight={700}>
          New on Twitter
        </Text>
        <Text fontSize="14px" color="gray.600">
          Register now and get your own personalized timeline!
        </Text>
      </Flex>
      <Stack spacing={4} mt={4}>
        <Button
          variant="oauth"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="full"
          _hover={{ borderColor: "blue.500" }}
          onClick={() => handleSignInWithGoogle()}
          // isLoading={loading}
        >
          <Image src="/images/logos/google-icon.svg" mr={2} alt="google-icon" />
          Sign up with Google
        </Button>

        <Button
          variant="oauth"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="full"
          _hover={{ borderColor: "blue.500" }}
          // onClick={() => signInWithGoogle()}
          // isLoading={loading}
        >
          <Image src="/images/logos/apple-icon.svg" mr={2} alt="apple-icon" />
          Sign up with Apple
        </Button>

        <Button
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="full"
          _hover={{ borderColor: "blue.500" }}
          onClick={() => setAuthModalState({open: true, view: 'signup'})}
          // isLoading={loading}
        >
          Create Account
        </Button>
      </Stack>

      <Text fontSize="12px" mt={4}>
        By signing up, you agree to the{" "}
        <Text
          as="span"
          color="blue.500"
          _hover={{ textDecoration: "underline" }}
        >
          Terms of Service
        </Text>{" "}
        and{" "}
        <Text
          as="span"
          color="blue.500"
          _hover={{ textDecoration: "underline" }}
        >
          Privacy Policy
        </Text>
        , including{" "}
        <Text
          as="span"
          color="blue.500"
          _hover={{ textDecoration: "underline" }}
        >
          Cookie Use
        </Text>
        .
      </Text>
    </>
  );
}

export default RegisterAccount;
function signInWithGoogle(): void {
  throw new Error("Function not implemented.");
}
