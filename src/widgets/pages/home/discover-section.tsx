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
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
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
    itemsRef.current.forEach((item, i) => {
      if (item) {
        const from = {
          ...animate("slide-right", { opacity: 0 }),
        };

        const to = {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        };

        gsap.fromTo(item, from, to);
      }
    });
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
        <NewPlace
          title="Red Sea"
          image="/red-sea.png"
          ref={(el) => {
            itemsRef.current[0] = el;
          }}
        />
        <NewPlace
          title="Soma Bay"
          image="/soma-bay.png"
          ref={(el) => {
            itemsRef.current[1] = el;
          }}
        />
        <NewPlace
          title="Giza"
          image="/giza.png"
          ref={(el) => {
            itemsRef.current[2] = el;
          }}
        />
        <NewPlace
          title="Nile"
          image="/nile.png"
          ref={(el) => {
            itemsRef.current[3] = el;
          }}
        />
        <NewPlace
          title="Nabq Bay"
          image="/nabq-bay.png"
          ref={(el) => {
            itemsRef.current[4] = el;
          }}
        />
        <NewPlace
          title="Other"
          image="/other.png"
          ref={(el) => {
            itemsRef.current[5] = el;
          }}
        />
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
            color="#D2AC71"
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
            color="#D2AC71"
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
