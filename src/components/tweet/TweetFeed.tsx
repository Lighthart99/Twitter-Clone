import {
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";

type TweetFeedProps = {
  user?: User | null;
};

function TweetFeed({ user }: TweetFeedProps) {
  return (
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
  );
}

export default TweetFeed;
