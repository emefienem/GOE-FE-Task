import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface FeatureCardProps {
  title: React.ReactNode;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  iconColor,
}: FeatureCardProps) => {
  return (
    <Box>
      <Flex direction="column" align="start" mb={4}>
        <Box as="span" color={iconColor} mb={3} w={30}>
          {icon}
        </Box>
        <Heading as="h4" size="2xl" color="white">
          {title}
        </Heading>
      </Flex>
      <Text color="white" fontSize="xl" w="326px" h="72px">
        {description}
      </Text>
    </Box>
  );
};

export default FeatureCard;
