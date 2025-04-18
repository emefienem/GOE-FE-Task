"use client";
import useAnimation from "@/hooks/use-animation";
import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const HomeAdventureSection = () => {
  const leftRef = useRef(null);
  const { animate } = useAnimation();

  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(leftRef.current, animate("slide-left", { opacity: 0 }), {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <Flex
      bg="blackAlpha.900"
      minH="100vh"
      align="center"
      justify="center"
      px={4}
      ref={leftRef}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        bg="mintcream"
        borderRadius="lg"
        overflow="hidden"
        maxW="900px"
        w="full"
        boxShadow="lg"
      >
        <Box
          bg="#d3ead7"
          p={{ base: 6, md: 10 }}
          flex={{ md: 1 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <VStack align="start" gap={4}>
            <Text fontSize="2xl" fontWeight="bold" color="#0F1F18">
              Ready to Book Your
              <br />
              Next Adventure?
            </Text>
            <Text color="#0F1F18" fontSize="2xl" fontWeight={400}>
              Get exclusive deals and immersive previews with our smart booking
              platform.
            </Text>
            <Button
              colorScheme="green"
              borderRadius="full"
              px={6}
              py={4}
              fontWeight="medium"
              bg="#458465"
              _hover={{ bg: "green.600" }}
            >
              Book now
            </Button>

            {/* <AppCta text="Book now" bgColor="#346D52" /> */}
          </VStack>
        </Box>

        <Box flex={{ md: 1 }}>
          <Image
            src="/ready-adventure.png"
            alt="Resort Island View"
            objectFit="cover"
            w="full"
            h="full"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default HomeAdventureSection;
