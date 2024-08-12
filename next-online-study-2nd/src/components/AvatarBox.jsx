import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { MdOutlineMoreHoriz } from "react-icons/md";

export const AvatarBox = () => (
  <Flex
    // borderWidth={collapse ? 1 : 0}
    borderWidth={1}
    borderColor="gray.100"
    borderRadius="full"
    w="full"
    p={2}
    alignItems="center"
    justifyContent="space-between"
    gap={2}
    flexDirection={"row"}
  >
    <Avatar name="Online study" bg="teal.300" />
      <Flex
        w="full"
        flexDirection="column"
        gap={6}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Text fontSize="sm" fontWeight="bold" pb="0" lineHeight={0}>
          Noona online Study 
        </Text>
        <Text as="small" color="gray.500" fontSize={12} lineHeight={0}>
          miniu.media@gmail.com
        </Text>
      </Flex>
    

    <IconButton
      aria-label="Settings"
      icon={<MdOutlineMoreHoriz />}
      borderRadius="full"
      color="gray.400"
      variant="ghost"
      fontSize={20}
    />
  </Flex>
);