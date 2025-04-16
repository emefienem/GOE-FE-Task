import {
  Box,
  Flex,
  Text,
  Button,
  Link,
  HStack,
  VStack,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaTimes,
  FaLinkedinIn,
} from "react-icons/fa";
import AppCta from "./cta";

const AppFooter = () => {
  return (
    <Box
      bgGradient="linear(to-r, #1d1d1d, #0d0d0d)"
      color="white"
      px={{ base: 5, md: 20 }}
      py={10}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <VStack
          align={{ base: "center", md: "flex-start" }}
          gap={4}
          mb={{ base: 10, md: 0 }}
        >
          <Image
            src="/footer-logo.png"
            alt="Footer-GOE"
            width={100}
            height={100}
          />
          <Text
            fontSize="lg"
            fontWeight="medium"
            textAlign={{ base: "center", md: "left" }}
          >
            Lorem, Ipsum Lorem, Ipsum <br /> Lorem, Ipsum or less.
          </Text>
          {/* <Button
            bg="#d8b36b"
            color="black"
            _hover={{ bg: "#b89a5c" }}
            borderRadius="full"
            px={6}
          >
            Discover More
          </Button> */}
          <AppCta text="Discover More" bgColor="#D2AC71" />
          <HStack gap={6} pt={4} fontSize="sm">
            <Link href="#">Home</Link>

            <Link href="#" display="inline-flex" alignItems="center">
              <Text as="span" color="#D2AC71">
                Egy
              </Text>
              <Text as="span" color="white">
                Book
              </Text>
            </Link>

            <Link href="#" display="inline-flex" alignItems="center">
              <Text as="span" color="#D2AC71">
                Egy
              </Text>
              <Text as="span" color="white">
                Explore
              </Text>
            </Link>

            <Link href="#" display="inline-flex" alignItems="center">
              <Text as="span" color="#D2AC71">
                Egy
              </Text>
              <Text as="span" color="white">
                Tales
              </Text>
            </Link>

            <Link href="#" display="inline-flex" alignItems="center">
              <Text as="span" color="#D2AC71">
                Egy
              </Text>
              <Text as="span" color="white">
                Treasure
              </Text>
            </Link>
          </HStack>
        </VStack>

        <VStack gap={4} align={{ base: "center", md: "flex-end" }}>
          <HStack gap={4}>
            <IconButton bg="#D2AC71" p={2} color="white" borderRadius="md">
              <FaInstagram />
            </IconButton>
            <IconButton bg="#D2AC71" p={2} color="white" borderRadius="md">
              <FaFacebookF />
            </IconButton>
            <IconButton bg="#D2AC71" p={2} color="white" borderRadius="md">
              <FaTiktok />
            </IconButton>
            <IconButton bg="#D2AC71" p={2} color="white" borderRadius="md">
              <FaTimes />
            </IconButton>
            <IconButton bg="#D2AC71" p={2} color="white" borderRadius="md">
              <FaLinkedinIn />
            </IconButton>
          </HStack>
          <Text fontSize="sm" textAlign={{ base: "center", md: "right" }}>
            Copyright Gates of Egypt © 2024 <br /> All rights reserved
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default AppFooter;
