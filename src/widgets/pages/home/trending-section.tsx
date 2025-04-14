"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import {
  Box,
  Text,
  Heading,
  Image,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import useAnimation from "@/hooks/use-animation";
import gsap from "gsap";
import { destinations } from "@/hooks/data";

const HomeTrendingSection = () => {
  const sectionRef = useRef(null);
  const { animate } = useAnimation();
  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      gsap.fromTo(el, animate("fade-in", { opacity: 0, y: 50 }), {
        ...animate("fade-in"),
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <Box
      py={10}
      px={{ base: 4, md: 12 }}
      bg="black"
      color="white"
      ref={sectionRef}
    >
      <Heading
        color="white"
        mb={6}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight={800}
      >
        Trending Destinations
      </Heading>

      <Flex
        overflowX="auto"
        gap={6}
        pb={2}
        css={css`
          &::-webkit-scrollbar {
            display: none;
          }
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        `}
      >
        {destinations.map((dest, index) => (
          <Box
            key={index}
            // bg="gray.900"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="lg"
            position="relative"
            transition="all 0.3s"
            _hover={{ transform: "scale(1.03)" }}
            minW="300px"
            flexShrink={0}
          >
            <Image
              src={dest.image}
              alt={dest.name}
              objectFit="cover"
              height="250px"
              width="100%"
              filter="brightness(80%)"
            />
            <Stack p={5} position="absolute" top="0" width="100%">
              <Text fontSize="3xl" fontWeight="bold" color="white">
                {dest.name}
              </Text>
              <Text fontSize="xl" color="white" w="300px" fontWeight={600}>
                {dest.description}
              </Text>
              <Button
                size="sm"
                mt={3}
                bg="white"
                color="black"
                _hover={{ bg: "gray.200" }}
                alignSelf="start"
                position="relative"
                top="10"
              >
                See Hotels
              </Button>
            </Stack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default HomeTrendingSection;
