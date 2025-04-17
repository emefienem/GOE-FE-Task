"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMediaQuery, { MediaQueryBreakPoints } from "@/hooks/use-media-query";
import useAnimation from "@/hooks/use-animation";
import NewPlace from "@/widgets/app/new-place";
import gsap from "gsap";

const HomeDiscoverSection = () => {
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
    <Box
      px={{ base: 5, md: 20 }}
      py={5}
      bg="black"
      position="relative"
      ref={sectionRef}
    >
      <Text
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight={800}
        mb={6}
        color="white"
      >
        Discover New Places
      </Text>

      <Flex
        ref={scrollRef}
        overflowX="auto"
        gap={8}
        // px={4}
        css={css`
          &::-webkit-scrollbar {
            display: none;
          }
          -ms-overflow-style: none;
          scrollbar-width: none;
        `}
      >
        <NewPlace title="Red Sea" image="/red-sea.png" />
        <NewPlace title="Soma Bay" image="/soma-bay.png" />
        <NewPlace title="Giza" image="/giza.png" />
        <NewPlace title="Nile" image="/nile.png" />
        <NewPlace title="Nabq Bay" image="/nabq-bay.png" />
        <NewPlace title="Other" image="/other.png" />
      </Flex>

      {!isMobile && (
        <>
          <IconButton
            aria-label="Scroll Left"
            position="absolute"
            // left="0"
            // top="45%"
            left="20px"
            top="50%"
            zIndex={10}
            borderRadius="full"
            bg="white"
            color="#ffd700"
            boxShadow="md"
            onClick={() => scroll("left")}
          >
            <FiChevronLeft />
          </IconButton>
          <IconButton
            aria-label="Scroll Right"
            position="absolute"
            // right={0}
            // top="45%"
            right="20px"
            top="50%"
            zIndex={10}
            borderRadius="full"
            bg="white"
            color="#ffd700"
            boxShadow="md"
            onClick={() => scroll("right")}
          >
            <FiChevronRight />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default HomeDiscoverSection;
