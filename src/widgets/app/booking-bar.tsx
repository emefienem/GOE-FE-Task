import { Flex, Icon, Text, Button, Box, Stack } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import Link from "next/link";

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
      mt={{ base: "8", md: "6" }}
      boxShadow="md"
      gap={4}
      flexDir={{ base: "column", md: "row" }}
    >
      <Stack
        flex="1"
        w="100%"
        direction={{ base: "column", sm: "row" }}
        gap={{ base: 4, sm: 6, md: 8 }}
        align={{ base: "stretch", sm: "center" }}
        justify="space-between"
      >
        <Flex align="center" gap="2">
          <Icon as={FaMapMarkerAlt} color="#D2AC71" />
          <Text
            color="whiteAlpha.900"
            fontWeight="medium"
            fontSize={{ base: "sm", md: "md" }}
          >
            Cairo, Egypt
          </Text>
        </Flex>

        <Flex align="center" gap="2">
          <Icon as={BsCalendar2Date} color="#D2AC71" />
          <Text
            color="whiteAlpha.900"
            fontWeight="medium"
            fontSize={{ base: "sm", md: "md" }}
          >
            19 March 2025 - 27 March 2025
          </Text>
        </Flex>

        <Flex align="center" gap="2">
          <Icon as={FaUser} color="#D2AC71" />
          <Text
            color="whiteAlpha.900"
            fontWeight="medium"
            fontSize={{ base: "sm", md: "md" }}
          >
            2 Adults, 1 Child, 1 Infant
          </Text>
        </Flex>
      </Stack>

      <Box w="full">
        <Link href="/egy-location">
          <Button
            bg="green.500"
            color="white"
            px="6"
            py="4"
            borderRadius="full"
            _hover={{ bg: "green.600" }}
            fontWeight="semibold"
            w="full"
            mt={{ base: 2, md: 0 }}
          >
            Explore Stays
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default BookingBar;

// import { Flex, Icon, Text, Button } from "@chakra-ui/react";
// import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
// import { BsCalendar2Date } from "react-icons/bs";

// const BookingBar = () => {
//   return (
//     <Flex
//       bg="rgba(255, 255, 255, 0.1)"
//       backdropFilter="blur(10px)"
//       borderRadius="full"
//       p="4"
//       px="6"
//       align="center"
//       justify="space-between"
//       maxW="container.lg"
//       mx="auto"
//       mt={{ base: "8", md: "6" }}
//       boxShadow="md"
//       gap={4}
//       flexDir={{ base: "column", md: "row" }}
//     >
//       <Flex
//         flex="1"
//         w="100%"
//         align="center"
//         justifyContent={{ base: "space-around", md: "flex-start" }}
//         flexWrap="wrap"
//         gap={{ base: 4, md: 8 }}
//       >
//         <Flex align="center" gap="2">
//           <Icon as={FaMapMarkerAlt} color="#D2AC71" />
//           <Text color="whiteAlpha.900" fontWeight="medium">
//             Cairo, Egypt
//           </Text>
//         </Flex>

//         <Flex align="center" gap="2">
//           <Icon as={BsCalendar2Date} color="#D2AC71" />
//           <Text color="whiteAlpha.900" fontWeight="medium">
//             19 March 2025 - 27 March 2025
//           </Text>
//         </Flex>

//         <Flex align="center" gap="2">
//           <Icon as={FaUser} color="#D2AC71" />
//           <Text color="whiteAlpha.900" fontWeight="medium">
//             2 Adults, 1 Child, 1 Infant
//           </Text>
//         </Flex>
//       </Flex>

//       <Button
//         bg="green.500"
//         color="white"
//         px="6"
//         py="4"
//         borderRadius="full"
//         _hover={{ bg: "green.600" }}
//         fontWeight="semibold"
//         // add top margin on mobile to give breathing space
//         mt={{ base: 4, md: 0 }}
//       >
//         Explore Stays
//       </Button>
//     </Flex>
//   );
// };

// export default BookingBar;
