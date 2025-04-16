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

const AppNavbar = () => {
  const user = useFirebaseUser();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOverlayOpen, setSearchOverlayOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const isMobile = useMediaQuery(MediaQueryBreakPoints.mobile);

  const navLinks = ["GOE", "EgyBook", "EgyExplore", "EgyTales", "EgyTreasure"];
  const cities = ["Cairo", "Alexandria", "Hurghada"];

  const handleSearchIconClick = () => {
    // Open the search overlay when the search icon is clicked
    setSearchOverlayOpen(true);
  };

  return (
    <Box bg="black" color="white" position="relative">
      {/* Top Navbar */}
      <Flex
        justify="space-between"
        align="center"
        px={{ base: 4, sm: 6, md: 10, lg: 20 }}
        py={4}
        borderBottom="1px solid #222"
      >
        {/* Logo */}
        <Box boxSize={{ base: "60px", md: "100px" }}>
          <Image
            src="/logo.png"
            alt="GOE Logo"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* Middle Nav (Desktop only) */}
        <Flex
          gap={6}
          fontSize="sm"
          align="center"
          display={!isMobile ? "flex" : "none"}
        >
          {navLinks.map((link) => (
            <Text
              key={link}
              _hover={{ color: "#CBAA7E", cursor: "pointer" }}
              onClick={undefined} // No action here since search is triggered by icon
            >
              {link}
            </Text>
          ))}
        </Flex>

        {/* Right side icons/buttons (Desktop) */}
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
            {/* Mobile Search Icon */}
            <IconButton
              aria-label="Search"
              variant="ghost"
              onClick={handleSearchIconClick}
              mr={2}
            >
              <FaSearch />
            </IconButton>
            <IconButton
              aria-label="Toggle Mobile Menu"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              variant="outline"
            >
              {mobileNavOpen ? <FaTimes /> : <FaBars />}
            </IconButton>
          </Flex>
        )}
      </Flex>

      {/* Mobile Nav Dropdown */}
      {isMobile && mobileNavOpen && (
        <Box px={5} py={4} bg="black" display="flex" flexDirection="column">
          {navLinks.map((link) => (
            <Text
              key={link}
              py={2}
              _hover={{ color: "#CBAA7E", cursor: "pointer" }}
              onClick={() => setMobileNavOpen(false)}
            >
              {link}
            </Text>
          ))}
          <Box mt={4}>
            {!user ? (
              <Flex gap={3}>
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
              </Flex>
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
