import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Diego Baena</Text>
          <Text color="gray.300" fontSize="small">
            diegobfronteira@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Diego Baena"
        src="https://github.com/diegobaena89.png"
      />
    </Flex>
  );
}
