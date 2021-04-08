import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>TheFalkeD</Text>
        <Text color="gray.300" fontSize="small">
          thefalked@testmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="TheFalkeD"
        src="https://github.com/thefalked.png"
      />
    </Flex>
  );
}
