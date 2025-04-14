"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Box,
  Heading,
  Text,
  Image,
  IconButton,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { FiHeart, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMediaQuery, { MediaQueryBreakPoints } from "@/hooks/use-media-query";
import { useEffect, useRef } from "react";
import useAnimation from "@/hooks/use-animation";
import { hotelData } from "@/hooks/data";

const HomeMostRelevantSection = () => {
  const isMobile = useMediaQuery(MediaQueryBreakPoints.mobile);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const { animate } = useAnimation();

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollTo =
      direction === "left"
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
    scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  };

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
    <Box bg="black" py={8} px={{ base: 5, md: 20 }} ref={sectionRef}>
      <Heading
        color="white"
        mb={6}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight={800}
      >
        The Most Relevant
      </Heading>

      <Box position="relative">
        <Flex
          ref={scrollRef}
          gap={5}
          overflowX="auto"
          pb={4}
          css={css`
            &::-webkit-scrollbar {
              display: none;
            }
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          `}
        >
          {hotelData.map((hotel) => (
            <Box
              key={hotel.id}
              bg="white"
              borderRadius="40px"
              boxShadow="md"
              minW="288px"
              flexShrink={0}
              position="relative"
            >
              <IconButton
                aria-label="Like"
                size="sm"
                position="absolute"
                top={3}
                right={3}
                zIndex={10}
                bg="white"
                color="black"
                borderRadius={50}
              >
                <FiHeart />
              </IconButton>
              <Badge
                colorScheme="blue"
                fontSize={15}
                position="absolute"
                top={3}
                left={3}
                zIndex={10}
                px={4}
                py={2}
                borderRadius={50}
                color="#346D52"
              >
                {hotel.location}
              </Badge>

              <Image
                src={hotel.image}
                alt={hotel.name}
                borderTopRadius="40px"
                borderBottomRadius="40px"
                w="450px"
                h="300px"
                objectFit="cover"
              />

              <Box p={4}>
                <Text fontWeight="bold" fontSize={18} mb={1} color="black">
                  {hotel.name}
                </Text>
                <Text fontSize={16} color="#121212" mb={2}>
                  {hotel.price}
                </Text>

                <Flex align="center" gap={1}>
                  <Box as={AiFillStar} color="yellow.400" />
                  <Text fontSize="sm" fontWeight="medium" color="black">
                    {hotel.rating}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    ({hotel.reviews.toLocaleString()})
                  </Text>
                </Flex>
              </Box>
            </Box>
          ))}
        </Flex>

        {/* Navigation Arrows - Only show on non-mobile */}
        {!isMobile && (
          <>
            <IconButton
              aria-label="Scroll Left"
              position="absolute"
              left="-0"
              top="30%"
              bg="white"
              boxShadow="md"
              zIndex={10}
              color="#ffd700"
              borderRadius={50}
              onClick={() => scroll("left")}
            >
              <FiChevronLeft />
            </IconButton>
            <IconButton
              aria-label="Scroll Right"
              position="absolute"
              right="0"
              top="30%"
              bg="white"
              boxShadow="md"
              zIndex={10}
              color="#ffd700"
              borderRadius={50}
              onClick={() => scroll("right")}
            >
              <FiChevronRight />
            </IconButton>
          </>
        )}
      </Box>
    </Box>
  );
};

export default HomeMostRelevantSection;
