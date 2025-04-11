"use client";

import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import gsap from "gsap";

interface IAppTextBodyProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  inverted?: boolean;
  containerId?: string;
  onDisplayCB?: () => void;
  scrollSpeed?: number;
}

const AppTextBody: React.FC<IAppTextBodyProps> = ({
  description,
  title,
  inverted,
  containerId,
  onDisplayCB,
  scrollSpeed,
}) => {
  useEffect(() => {
    if (containerId) {
      gsap.to(`#${containerId} .p-fade`, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: `#${containerId} .p-fade`,
          start: "top 50%",
        },
        onComplete: onDisplayCB,
      });
    }
  }, []);

  return (
    <Box id={`${containerId}-text-body`} className="p-fade" py={4}>
      <Flex
        direction="column"
        textAlign={inverted ? "right" : "left"}
        align={inverted ? "flex-end" : "flex-start"}
        gap={4}
      >
        <Box maxW={{ base: "100%", md: "50%", xl: "696px" }}>
          <Heading
            data-scroll
            data-scroll-speed={scrollSpeed?.toString() || "2"}
            fontSize="2xl"
          >
            {title}
          </Heading>
        </Box>

        <Box
          maxW={{ base: "100%", md: "50%", lg: "413px" }}
          mt={{ base: 0, md: -4 }}
        >
          <Text color="gray.600" fontSize={{ base: "sm", lg: "md" }}>
            {description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AppTextBody;
