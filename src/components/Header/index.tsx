import { Flex } from "@chakra-ui/react";

import { Logo } from "./logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1280}
      h="20"
      mx="auto"
      mt="4"
      align="center"
    >
      <Logo />

      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationsNav />

        <Profile />
      </Flex>
    </Flex>
  );
}
