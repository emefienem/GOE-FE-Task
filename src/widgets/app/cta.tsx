"use client";

import { Button } from "@chakra-ui/react";
import Link from "next/link";

interface AppCtaProps {
  text: string;
  link?: string;
  outline?: boolean;
}

const AppCta = ({ text, link = "/download", outline }: AppCtaProps) => {
  const strokeColor = outline ? "#3B82F6" : "#fff";

  return (
    <Link href={link} passHref>
      <Button
        as="a"
        variant={outline ? "outline" : "solid"}
        colorScheme="blue"
        borderWidth={outline ? "2px" : undefined}
        gap={2}
        px={6}
        py={4}
        fontWeight="bold"
        display="inline-flex"
        alignItems="center"
      >
        {text}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 7H17M17 7V17M17 7L7 17"
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </Link>
  );
};

export default AppCta;
