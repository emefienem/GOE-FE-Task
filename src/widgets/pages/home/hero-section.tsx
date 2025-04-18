"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/react";
import BookingBar from "../../app/booking-bar";
import useMediaQuery, { MediaQueryBreakPoints } from "@/hooks/use-media-query";
import { MdNavigation } from "react-icons/md";
import gsap from "gsap";
import useAnimation from "@/hooks/use-animation";

const HomeHeroSection = () => {
  const isMobile = useMediaQuery(MediaQueryBreakPoints.mobile);
  const isTablet = useMediaQuery(MediaQueryBreakPoints.tablet);

  const heroHeight = isMobile ? "400px" : isTablet ? "500px" : "500px";
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
    <Box bg="black">
      <Box
        ref={sectionRef}
        as="section"
        position="relative"
        w="full"
        h={heroHeight}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        color="white"
        overflow="hidden"
      >
        <Box position="absolute" inset={0} zIndex={0}>
          <Image
            src="/hero-bg.png"
            alt="Hero background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <Box position="absolute" inset={0} bg="blackAlpha.600" zIndex={1} />
        </Box>

        <Box
          position="absolute"
          left={isMobile ? 5 : isTablet ? 10 : 20}
          zIndex={2}
          display="flex"
          flexDirection="column"
          textAlign="start"
        >
          <Text fontSize="16px" mb={4} color="white" display="flex" gap={2}>
            <MdNavigation /> <Text as="span">Egypt</Text>
          </Text>

          <Heading
            as="h1"
            fontSize={isMobile ? "2xl" : isTablet ? "3xl" : "4xl"}
            fontWeight="bold"
            mb={2}
            color="white"
          >
            Hey!
          </Heading>

          <Heading
            as="h2"
            fontSize={isMobile ? "2xl" : isTablet ? "3xl" : "4xl"}
            fontWeight="bold"
            mb={3}
            color="white"
          >
            Tell us where you want to stay
          </Heading>

          <Text fontSize="lg" mb={8} color="white">
            Book 450+ Curated Egyptian Hotels
          </Text>

          <BookingBar />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeHeroSection;
