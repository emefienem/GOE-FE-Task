"use client";
/** @jsxImportSource @emotion/react */
import { Box, Container, Text } from "@chakra-ui/react";
import useAnimation from "@/hooks/use-animation";
import { useEffect, useRef } from "react";
import FeatureCard from "@/widgets/app/feature-card";
import gsap from "gsap";

const HomeWhyChooseSection = () => {
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
  }, [animate]);

  return (
    <Box px={{ base: 5, md: 20 }} py={5} bg="black" ref={sectionRef}>
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
          gap={{ base: 6, md: 8 }}
          // Remove horizontal overflow settings for a cleaner mobile appearance
          // css={css`
          //   /* Optional: remove scrollbar styling if not needed */
          // `}
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
            imageSrc="/why-seamless.png"
            imageAlt="Seamless & Smart Booking"
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
            description="Explore hotels and rooms in 360 before you book—giving you total confidence."
            imageSrc="/why-vr.png"
            imageAlt="Immersive VR Preview"
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
            imageSrc="/why-exclusive.png"
            imageAlt="Exclusive Best-Price"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HomeWhyChooseSection;
