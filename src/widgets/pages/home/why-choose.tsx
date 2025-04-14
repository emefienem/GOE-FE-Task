"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";
import { FaCreditCard, FaVrCardboard, FaTag } from "react-icons/fa";
import useMediaQuery, { MediaQueryBreakPoints } from "@/hooks/use-media-query";
import useAnimation from "@/hooks/use-animation";
import { useEffect, useRef } from "react";
import FeatureCard from "@/widgets/app/feature-card";

const HomeWhyChooseSection = () => {
  const isMobile = useMediaQuery(MediaQueryBreakPoints.mobile);

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
    <Box as="section" py={5} bg="black" ref={sectionRef}>
      <Container maxW="7xl">
        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight={800}
          mb={6}
          color="white"
        >
          Why choose{" "}
          <Text as="span" color="#D2AC71">
            Egy
          </Text>
          Book?
        </Text>

        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={8}
          overflowX={isMobile ? "auto" : "unset"}
          whiteSpace={isMobile ? "nowrap" : "normal"}
          css={css`
            &::-webkit-scrollbar {
              display: none;
            }
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          `}
        >
          <FeatureCard
            title={
              <>
                <Text as="span" color="#D2AC71">
                  Seamless
                </Text>
                <Text as="span" color="white">
                  {" "}
                  &{" "}
                </Text>
                <Text as="span" color="#346D52">
                  Smart
                </Text>
                <Text as="span" color="white">
                  {" "}
                  Booking
                </Text>
              </>
            }
            description="Quick, user-friendly platform that simplifies the reservation process."
            icon={<FaCreditCard />}
            iconColor="#346D52"
          />
          <FeatureCard
            title={
              <>
                <Text as="span" color="#346D52">
                  Immersive
                </Text>
                <Text as="span" color="white">
                  {" "}
                  VR Preview
                </Text>
              </>
            }
            description="Explore hotels and rooms in 360 before you book--giving you total confidence."
            icon={<FaVrCardboard />}
            iconColor="#346D52"
          />
          <FeatureCard
            title={
              <>
                <Text as="span" color="#346D52">
                  Exclusive
                </Text>
                <Text as="span" color="white">
                  {" "}
                  Best-Price
                </Text>
              </>
            }
            description="Save more with special offers and real-time price comparisons."
            icon={<FaTag />}
            iconColor="#346D52"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HomeWhyChooseSection;
