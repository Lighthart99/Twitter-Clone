import LoginBar from "@/components/LoginBar";
import AuthModal from "@/components/modal/auth/AuthModal";
import ModalLogin from "@/components/modal/auth/AuthModal";
import Navigation from "@/components/navigation/Navigation";
import UserMenu from "@/components/navigation/UserMenu";
import RegisterAccount from "@/components/RegisterAccount";
import SearchBar from "@/components/SearchBar";
import { auth } from "@/firebase/firebase";
import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import { Inter } from "next/font/google";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
}

export default function Home({}: HomeProps) {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Box>
      <AuthModal />
      <Container maxW="1280px" height="100vh">
        <Flex direction="row">
          <Flex
            direction="column"
            alignItems="flex-start"
            width="240px"
            p="16px"
          >
            <Navigation user={user} />
            {user && <UserMenu user={user} />}
          </Flex>

          <Flex
            direction="column"
            flexGrow={1}
            height="100vh"
            borderLeft="1px"
            borderRight="1px"
            borderColor="gray.100"
          >
            <Flex direction="column">
              <Flex padding="16px">
                <Text fontSize="20px" fontWeight={700}>
                  Home
                </Text>
              </Flex>
              <Tabs>
                <TabList>
                  <Tab width="50%">For you</Tab>
                  <Tab width="50%">Following</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <p>For you</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Following</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>
          </Flex>

          <Flex direction="column" width="380px" padding="8px 24px">
            <SearchBar />
            {!user && <RegisterAccount />}
          </Flex>
        </Flex>
      </Container>

      {!user && <LoginBar />}
    </Box>
  );
}
