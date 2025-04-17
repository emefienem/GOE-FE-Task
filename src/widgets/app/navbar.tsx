"use client";

import {
  Box,
  Flex,
  Text,
  Icon,
  Input,
  InputGroup,
  IconButton,
} from "@chakra-ui/react";
import {
  FaSearch,
  FaUserCircle,
  FaGlobe,
  FaHeart,
  FaBell,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useFirebaseUser } from "@/context/firebase";
import { loginWithGoogle } from "@/utils/firebaseAuth";
import { signOut } from "firebase/auth";
import { auth } from "@/configs/firebaseConfig";
import { useState } from "react";
import Image from "next/image";
import AppCta from "./cta";
import useMediaQuery, { MediaQueryBreakPoints } from "@/hooks/use-media-query";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import Link from "next/link";

const AppNavbar = () => {
  const user = useFirebaseUser();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOverlayOpen, setSearchOverlayOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const isMobile = useMediaQuery(MediaQueryBreakPoints.mobile);

  const navLinks = [
    { prefix: "GOE", suffix: "" },
    { prefix: "Egy", suffix: "Book" },
    { prefix: "Egy", suffix: "Explore" },
    { prefix: "Egy", suffix: "Tales" },
    { prefix: "Egy", suffix: "Treasure" },
  ];
  const cities = ["Cairo", "Alexandria", "Hurghada"];

  const handleSearchIconClick = () => {
    setSearchOverlayOpen(true);
  };

  return (
    <Box bg="black" color="white" position="relative">
      <Flex
        justify="space-between"
        align="center"
        px={{ base: 4, sm: 6, md: 10, lg: 20 }}
        py={4}
        borderBottom="1px solid #222"
      >
        <Flex align="center">
          <Link href="/">
            {!isMobile ? (
              <Box boxSize={{ base: "60px", md: "100px" }}>
                <Image
                  src="/logo.png"
                  alt="GOE Logo"
                  width={100}
                  height={100}
                  style={{ objectFit: "contain" }}
                />
              </Box>
            ) : (
              <Text fontWeight="bold" fontSize="xl" lineHeight="1">
                <Box as="span" color="#D2AC71">
                  Egy
                </Box>
                <Box as="span" color="white">
                  Book
                </Box>
              </Text>
            )}
          </Link>
        </Flex>

        {/* Middle Nav (Desktop only) */}
        <Flex
          gap={6}
          fontSize="sm"
          align="center"
          display={!isMobile ? "flex" : "none"}
        >
          {navLinks.map(({ prefix, suffix }) => (
            <Text
              key={prefix + suffix}
              _hover={{ color: "#CBAA7E", cursor: "pointer" }}
              onClick={undefined}
            >
              <Box as="span" color="#D2AC71">
                {prefix}
              </Box>
              <Box as="span" color="white">
                {suffix}
              </Box>
            </Text>
          ))}
        </Flex>

        <Flex gap={3} align="center" display={!isMobile ? "flex" : "none"}>
          <IconButton
            aria-label="Search"
            variant="ghost"
            onClick={handleSearchIconClick}
          >
            <FaSearch />
          </IconButton>
          <Icon as={FaGlobe} />
          <Text fontSize="sm">EN</Text>

          {!user ? (
            <>
              <AppCta
                text="Login"
                onClick={loginWithGoogle}
                bgColor="#D2AC71"
              />
              <AppCta
                text="Sign up"
                onClick={loginWithGoogle}
                bgColor="#D2AC71"
              />
            </>
          ) : (
            <>
              <IconButton aria-label="Cart" variant="outline">
                <FaShoppingCart />
              </IconButton>
              <IconButton aria-label="Favorites" variant="outline">
                <FaHeart />
              </IconButton>
              <IconButton aria-label="Notifications" variant="outline">
                <FaBell />
              </IconButton>
              <Menu>
                <MenuButton
                  as={IconButton}
                  variant="outline"
                  aria-label="User Menu"
                >
                  <FaUserCircle />
                </MenuButton>
                <MenuList bg="#1A1A1A" color="white">
                  <MenuItem>My profile</MenuItem>
                  <MenuItem>Saved bundles</MenuItem>
                  <MenuItem>Invite friends</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem onClick={() => signOut(auth)} color="red">
                    Log out
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          )}
        </Flex>

        {/* Mobile Hamburger & Search Icons */}
        {isMobile && (
          <Flex align="center">
            <IconButton
              aria-label="Search"
              variant="ghost"
              onClick={handleSearchIconClick}
              mr={2}
            >
              <FaSearch color="#D2AC71" />
            </IconButton>
            <IconButton
              aria-label="Toggle Mobile Menu"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              // variant="outline"
            >
              {mobileNavOpen ? (
                <FaTimes color="D2AC71" />
              ) : (
                <FaBars color="D2AC71" />
              )}
            </IconButton>
          </Flex>
        )}
      </Flex>

      {/* Mobile Nav Dropdown */}
      {isMobile && mobileNavOpen && (
        <Box px={5} py={4} bg="black" display="flex" flexDirection="column">
          <Flex gap={1}>
            <Icon as={FaGlobe} />
            <Text fontSize="sm">EN</Text>
          </Flex>
          <Box mt={4}>
            {!user ? (
              <>
                <AppCta
                  text="Login"
                  onClick={loginWithGoogle}
                  bgColor="#D2AC71"
                />
                <AppCta
                  text="Sign up"
                  onClick={loginWithGoogle}
                  bgColor="#D2AC71"
                />
              </>
            ) : (
              <>
                <Flex gap={3} mb={2}>
                  <IconButton aria-label="Cart" variant="outline">
                    <FaShoppingCart />
                  </IconButton>
                  <IconButton aria-label="Favorites" variant="outline">
                    <FaHeart />
                  </IconButton>
                  <IconButton aria-label="Notifications" variant="outline">
                    <FaBell />
                  </IconButton>
                </Flex>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    variant="outline"
                    aria-label="User Menu"
                    w="full"
                  >
                    <FaUserCircle />
                  </MenuButton>
                  <MenuList bg="#1A1A1A" color="white">
                    <MenuItem>My profile</MenuItem>
                    <MenuItem>Saved bundles</MenuItem>
                    <MenuItem>Invite friends</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem onClick={() => signOut(auth)} color="red">
                      Log out
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            )}
            <Box display="flex" justifyContent="center" mt={6}>
              <Image
                src="/footer-logo.png"
                alt="Navbar Logo"
                width={100}
                height={100}
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
      )}

      {searchOverlayOpen && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          w="100%"
          h="100vh"
          bg="rgba(0, 0, 0, 0.85)"
          zIndex={10}
          p={10}
        >
          <IconButton
            aria-label="Close Search"
            variant="ghost"
            color="#D2AC71"
            position="absolute"
            top="20px"
            right="20px"
            onClick={() => setSearchOverlayOpen(false)}
          >
            <FaTimes />
          </IconButton>

          <Box maxW="500px" mx="auto" mt={20}>
            <InputGroup mb={6}>
              {/* <InputLeftElement pointerEvents="none">
                <FaSearch color="gray.300" />
              </InputLeftElement>  */}
              <Input
                placeholder="Search"
                bg="#1E1E1E"
                border="none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                _placeholder={{ color: "gray.400" }}
              />
            </InputGroup>

            <Box bg="#1E1E1E" borderRadius="md" p={4}>
              {searchTerm === "" ? (
                <>
                  <Text mb={4}>Most popular</Text>
                  {cities.map((city) => (
                    <Flex key={city} align="center" mb={3} gap={3}>
                      <Icon as={FaMapMarkerAlt} />
                      <Box>
                        <Text fontWeight="bold">{city}</Text>
                        <Text fontSize="sm" color="gray.400">
                          City in Egypt
                        </Text>
                      </Box>
                    </Flex>
                  ))}
                </>
              ) : (
                <>
                  <Text mb={4}>Search Result</Text>
                  <Flex align="center" gap={3}>
                    <Icon as={FaMapMarkerAlt} />
                    <Box>
                      <Text fontWeight="bold">{searchTerm}</Text>
                      <Text fontSize="sm" color="gray.400">
                        Location
                      </Text>
                    </Box>
                  </Flex>
                </>
              )}
              <Text mt={4} color="gray.400" fontSize="sm">
                See all results for &quot;{searchTerm || "Search"}&quot;
              </Text>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AppNavbar;
