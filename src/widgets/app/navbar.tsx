"use client";

import { useState } from "react";
import NextLink from "next/link";
import Link from "next/link";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FaHamburger, FaTimes } from "react-icons/fa";
import Image from "next/image";
import useMediaQuery, { MediaQueryBreakPoints } from "@/hooks/use-media-query";
import AppCta from "./cta";

export const navLinks = [
  { name: "Cards", link: "/cards" },
  { name: "Refill", link: "/refill" },
  { name: "Transfers", link: "/international-transfer" },
  { name: "Vault", link: "/vault" },
  { name: "Lifestyle", link: "/lifestyle" },
  { name: "Tuition", link: "/tuition" },
  { name: "Swap", link: "/swap" },
  { name: "OTC", link: "/otc" },
  { name: "Referral", link: "/referral" },
];

const NavMenu = ({ close }: { close: () => void }) => {
  return (
    <Flex direction={{ base: "column", lg: "row" }} gap={5}>
      {navLinks.map(({ name, link }) => (
        <NextLink key={link} href={link} passHref>
          <ChakraLink
            onClick={close}
            fontSize="sm"
            fontWeight="medium"
            color="gray.700"
            _hover={{ color: "purple.500" }}
          >
            {name}
          </ChakraLink>
        </NextLink>
      ))}
    </Flex>
  );
};

const NavCta = () => <AppCta text="Get started" />;

const NavAppToggle = () => (
  <Flex>
    <Link href="/">
      <Box px={4} py={2} shadow="md">
        <Text fontWeight="semibold" fontSize="sm">
          Personal
        </Text>
      </Box>
    </Link>
    <Link href="/business">
      <Box px={4} py={2} shadow="md">
        <Text fontWeight="semibold" fontSize="sm" color="blackAlpha.800">
          Business
        </Text>
      </Box>
    </Link>
  </Flex>
);

const AppNavBar = () => {
  const isTabletAndBelow = useMediaQuery(MediaQueryBreakPoints.tabletAndBelow);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="500"
      bg="white"
      shadow="sm"
    >
      <Flex
        align="center"
        justify="space-between"
        h={{ base: "16", md: "20" }}
        w={{ base: "90%", xl: "83%" }}
        mx="auto"
      >
        <Flex align="center" gap={6} w="full">
          <Link href="/">
            <Image src="/logo.png" width={100} height={100} alt="GOE Logo" />
          </Link>
          {!isTabletAndBelow && <NavAppToggle />}
        </Flex>

        {isTabletAndBelow ? (
          <IconButton
            aria-label="Open Menu"
            variant="ghost"
            onClick={() => setMobileNavOpen(true)}
          >
            <FaHamburger />
          </IconButton>
        ) : (
          <Flex gap={5} align="center">
            <NavMenu close={() => {}} />
            <NavCta />
          </Flex>
        )}
      </Flex>

      {isTabletAndBelow && mobileNavOpen && (
        <Box
          position="fixed"
          top="0"
          zIndex="500"
          w="full"
          bg="white"
          px={4}
          py={5}
        >
          <Flex justify="space-between" align="center">
            <Image src="/logo.png" width={100} height={100} alt="GOE Logo" />
            <IconButton
              aria-label="Close Menu"
              variant="ghost"
              onClick={() => setMobileNavOpen(false)}
            >
              <FaTimes />
            </IconButton>
          </Flex>

          <Box mt={4}>
            <NavAppToggle />
          </Box>

          <Box mt={4}>
            <NavMenu close={() => setMobileNavOpen(false)} />
          </Box>

          <Box mt={4}>
            <NavCta />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AppNavBar;
