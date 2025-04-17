import { Flex, Icon, Text, Button, Box } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineHorizontalRule } from "react-icons/md";
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
      // maxW="container.lg"
      maxW={{ base: "95%", sm: "90%", md: "container.lg", lg: "container.xl" }}
      mx="auto"
      mt={{ base: "8", md: "6" }}
      boxShadow="md"
      gap={4}
      flexDir={{ base: "column", md: "row" }}
    >
      {/* For Small Screens */}
      <Box display={{ base: "block", md: "none" }} w="100%">
        <Flex align="center" gap="2" justify="center" flexWrap="wrap">
          <Flex align="center" gap="2">
            <Icon as={FaMapMarkerAlt} color="#D2AC71" />
            <Text color="whiteAlpha.900" fontWeight="medium" fontSize="sm">
              Cairo, Egypt
            </Text>
          </Flex>

          <Icon as={MdOutlineHorizontalRule} color="whiteAlpha.700" />

          <Flex align="center" gap="2">
            <Icon as={BsCalendar2Date} color="#D2AC71" />
            <Text color="whiteAlpha.900" fontWeight="medium" fontSize="sm">
              19 March - 27 March
            </Text>
          </Flex>
        </Flex>

        <Flex mt={2} align="center" gap="2" justify="center">
          <Icon as={FaUser} color="#D2AC71" />
          <Text color="whiteAlpha.900" fontWeight="medium" fontSize="sm">
            2 Adults, 1 Child, 1 Infant
          </Text>
        </Flex>

        <Link href="/egy-location">
          <Button
            bg="green.500"
            color="white"
            px="6"
            py="4"
            borderRadius="full"
            _hover={{ bg: "green.600" }}
            fontWeight="semibold"
            w="100%"
            mt={3}
          >
            Explore Stays
          </Button>
        </Link>
      </Box>

      {/* For Medium and Larger Screens */}
      <Flex
        display={{ base: "none", md: "flex" }}
        flex="1"
        w="100%"
        align="center"
        justify="space-between"
      >
        <Flex align="center" gap={8}>
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
        </Flex>

        <Link href="/egy-location">
          <Button
            bg="green.500"
            color="white"
            px="6"
            py="4"
            borderRadius="full"
            _hover={{ bg: "green.600" }}
            fontWeight="semibold"
            ml={{ md: 3, lg: 6 }}
          >
            Explore Stays
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default BookingBar;

// import { Flex, Icon, Text, Button } from "@chakra-ui/react";
// import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
// import { BsCalendar2Date } from "react-icons/bs";
// import Link from "next/link";

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
//         direction={{ base: "column", sm: "row" }}
//         align={{ base: "flex-start", sm: "center" }}
//         justifyContent={{
//           base: "flex-start",
//           sm: "space-between",
//           md: "flex-start",
//         }}
//         wrap="wrap"
//         gap={{ base: 3, sm: 6, md: 8 }}
//       >
//         <Flex align="center" gap="2">
//           <Icon as={FaMapMarkerAlt} color="#D2AC71" />
//           <Text
//             color="whiteAlpha.900"
//             fontWeight="medium"
//             fontSize={{ base: "sm", md: "md" }}
//           >
//             Cairo, Egypt
//           </Text>
//         </Flex>

//         <Flex align="center" gap="2">
//           <Icon as={BsCalendar2Date} color="#D2AC71" />
//           <Text
//             color="whiteAlpha.900"
//             fontWeight="medium"
//             fontSize={{ base: "sm", md: "md" }}
//           >
//             19 March 2025 - 27 March 2025
//           </Text>
//         </Flex>

//         <Flex align="center" gap="2">
//           <Icon as={FaUser} color="#D2AC71" />
//           <Text
//             color="whiteAlpha.900"
//             fontWeight="medium"
//             fontSize={{ base: "sm", md: "md" }}
//           >
//             2 Adults, 1 Child, 1 Infant
//           </Text>
//         </Flex>
//       </Flex>
//       <Link href="/egy-location">
//         <Button
//           bg="green.500"
//           color="white"
//           px="6"
//           py="4"
//           borderRadius="full"
//           _hover={{ bg: "green.600" }}
//           fontWeight="semibold"
//           w={{ base: "100%", sm: "auto" }}
//           mt={{ base: 2, md: 0 }}
//         >
//           Explore Stays
//         </Button>
//       </Link>
//     </Flex>
//   );
// };

// export default BookingBar;

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
