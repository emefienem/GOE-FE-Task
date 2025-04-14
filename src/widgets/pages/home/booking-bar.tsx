import { Box, Flex, Icon, Text, Button } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";

const BookingBar = () => {
  return (
    <Flex
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      borderRadius="full"
      p="4"
      px="6"
      align="center"
      justify="space-between"
      maxW="container.lg"
      mx="auto"
      mt="6"
      boxShadow="md"
      gap={4}
    >
      <Flex align="center" gap="2">
        <Icon as={FaMapMarkerAlt} color="#D2AC71" />
        <Text color="whiteAlpha.900" fontWeight="medium">
          Cairo, Egypt
        </Text>
      </Flex>

      <Flex align="center" gap="2">
        <Icon as={BsCalendar2Date} color="#D2AC71" />
        <Text color="whiteAlpha.900" fontWeight="medium">
          19 March 2025 - 27 March 2025
        </Text>
      </Flex>

      <Flex align="center" gap="2">
        <Icon as={FaUser} color="#D2AC71" />
        <Text color="whiteAlpha.900" fontWeight="medium">
          2 Adults, 1 Child, 1 Infant
        </Text>
      </Flex>

      <Button
        bg="green.500"
        color="white"
        px="6"
        py="4"
        borderRadius="full"
        _hover={{ bg: "green.600" }}
        fontWeight="semibold"
      >
        Explore Stays
      </Button>
    </Flex>
  );
};

export default BookingBar;
