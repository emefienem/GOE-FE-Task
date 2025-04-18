// import { Box, Flex, Heading, Text } from "@chakra-ui/react";
// import Image from "next/image";

// interface FeatureCardProps {
//   title: React.ReactNode;
//   description: string;
//   imageSrc: string;
//   imageAlt: string;
// }

// const FeatureCard = ({
//   title,
//   description,
//   imageSrc,
//   imageAlt,
// }: FeatureCardProps) => {
//   return (
//     <Box>
//       <Flex direction="column" align="start" mb={4}>
//         <Image src={imageSrc} alt={imageAlt} width={30} height={30} />
//         <Heading as="h4" size="2xl" color="white">
//           {title}
//         </Heading>
//       </Flex>
//       <Text
//         color="white"
//         fontSize="xl"
//         w={{ base: "100%", md: "326px" }}
//         h="72px"
//       >
//         {description}
//       </Text>
//     </Box>
//   );
// };

// export default FeatureCard;

"use client";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { forwardRef } from "react";

interface FeatureCardProps {
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ title, description, imageSrc, imageAlt }, ref) => {
    return (
      <Box ref={ref}>
        <Flex direction="column" align="start" mb={4}>
          <Image src={imageSrc} alt={imageAlt} width={30} height={30} />
          <Heading as="h4" size="2xl" color="white">
            {title}
          </Heading>
        </Flex>
        <Text
          color="white"
          fontSize="xl"
          w={{ base: "100%", md: "326px" }}
          h="72px"
        >
          {description}
        </Text>
      </Box>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

export default FeatureCard;
