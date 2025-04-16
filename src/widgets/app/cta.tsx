"use client";

import { Button } from "@chakra-ui/react";

interface AppCtaProps {
  text: string;
  bgColor: string;
  onClick?: () => void;
}

const AppCta = ({ text, bgColor, onClick }: AppCtaProps) => {
  // const strokeColor = outline ? "#ffd700" : "#fff";

  return (
    <Button
      as="a"
      onClick={onClick}
      variant="solid"
      colorScheme="#D2AC71"
      bg={bgColor}
      gap={2}
      px={6}
      py={4}
      fontWeight="bold"
      display="inline-flex"
      alignItems="center"
    >
      {text}
    </Button>
  );
};

export default AppCta;
