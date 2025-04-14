"use client";

import { Button } from "@chakra-ui/react";

interface AppCtaProps {
  text: string;
  outline?: boolean;
}

const AppCta = ({ text, outline }: AppCtaProps) => {
  // const strokeColor = outline ? "#ffd700" : "#fff";

  return (
    <Button
      as="a"
      variant={outline ? "outline" : "solid"}
      colorScheme="#D2AC71"
      bg="#D2AC71"
      borderWidth={outline ? "2px" : undefined}
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
