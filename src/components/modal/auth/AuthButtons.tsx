import { auth } from "@/firebase/firebase";
import { Button, Image, Stack } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

type AuthButtonsProps = {};

const AuthButtons = ({}: AuthButtonsProps) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  console.log("user signedin", auth);

  return (
    <Stack spacing={4} mt={4}>
      <Button
        variant="oauth"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="full"
        _hover={{ borderColor: "blue.500" }}
        onClick={() => signInWithGoogle()}
        isLoading={loading}
      >
        <Image src="/images/logos/google-icon.svg" mr={2} alt="google-icon" />
        Sign in with Google
      </Button>

      <Button
        variant="oauth"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="full"
        _hover={{ borderColor: "blue.500" }}
        fontWeight={700}
        // onClick={() => {}}
        // isLoading={loading}
      >
        <Image src="/images/logos/apple-icon.svg" mr={2} alt="apple-icon" />
        Sign in with Apple
      </Button>
    </Stack>
  );
};

export default AuthButtons;
