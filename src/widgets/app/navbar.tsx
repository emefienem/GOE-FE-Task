"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  IconButton,
  // Link as ChakraLink,
  Container,
} from "@chakra-ui/react";
import {} from "react-icons/fa";
import { useFirebaseUser } from "@/context/firebase";
import { FaHamburger, FaTimes, FaUser, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import useMediaQuery, { MediaQueryBreakPoints } from "@/hooks/use-media-query";
import AppCta from "./cta";

export const navLinks = [
  { name: "GOE", link: "/cards" },
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
    <Container
      maxW="7xl"
      className="flex items-center justify-between py-4 gap-5"
    >
      <p onClick={close} className="text-[#D2AC71]">
        GOE
      </p>
      <p onClick={close} className="text-white">
        <span className="text-[#D2AC71]">Egy</span>Book
      </p>
      <p onClick={close} className="text-white">
        <span className="text-[#D2AC71]">Egy</span>Explore
      </p>
      <p onClick={close} className="text-white">
        <span className="text-[#D2AC71]">Egy</span>Token
      </p>
      <p onClick={close} className="text-white">
        <span className="text-[#D2AC71]">Egy</span>Treasure
      </p>
    </Container>
  );
};

const NavCta = () => {
  const user = useFirebaseUser();

  if (user) {
    return (
      <Box className="flex gap-4 items-center">
        <IconButton aria-label="Cart" variant="ghost" color="white">
          <FaShoppingCart />
        </IconButton>
        <IconButton aria-label="User" variant="ghost" color="white">
          <FaUser />
        </IconButton>
      </Box>
    );
  }

  return (
    <Box className="flex gap-3">
      <AppCta text="Login" />
      <AppCta text="Sign up" />
    </Box>
  );
};

const AppNavBar = () => {
  const isTabletAndBelow = useMediaQuery(MediaQueryBreakPoints.tabletAndBelow);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="500"
      bg="black"
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
            <p className="text-white font-normal text-xl">EN</p>
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
          bg="black"
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
