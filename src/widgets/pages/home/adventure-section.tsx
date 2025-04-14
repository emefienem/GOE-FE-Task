"use client";

import React, { useEffect, useRef } from "react";
import useAnimation from "@/hooks/use-animation";
import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const HomeAdventureSection = () => {
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
    <Box bg="black" py={8} px={{ base: 5, md: 20 }} ref={sectionRef}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={8}
        bg="green.100"
        borderRadius="xl"
        overflow="hidden"
        p={6}
        alignItems="center"
      >
        <Box>
          <Heading
            fontSize="48px"
            color="#0F1F18"
            width="512px"
            fontWeight={700}
            // lineHeightStep={}
          >
            Ready to Book Your Next Adventure?
          </Heading>
          <Text
            mt={3}
            mb={6}
            color="#0F1F18"
            maxWidth="508px"
            fontWeight={400}
            fontSize="24px"
          >
            Get exclusive deals and immersive previews with our smart booking
            platform.
          </Text>
          <Button colorScheme="green" size="lg">
            Book now
          </Button>
        </Box>
        <Image
          src="/hero-bg.png"
          alt="Booking Resort"
          objectFit="cover"
          width={300}
          height={300}
          style={{ borderRadius: "xl" }}
        />
      </Grid>
    </Box>
  );
};

export default HomeAdventureSection;
