"use client";

import {
  Box,
  Grid,
  Button,
  Text,
  VStack,
  HStack,
  Stack,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from "@chakra-ui/react";
import { useNumberInput } from "@ark-ui/react";
import { JSX, useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const locations = [
  "Cairo, Egypt",
  "Hurghada, Egypt",
  "Sharm El-Sheikh, Egypt",
  "Luxor & Aswan, Egypt",
];

const LabelValueBox = ({ label, value }: { label: string; value: string }) => (
  <VStack align="flex-start" gap={1}>
    <Text fontSize="sm" color="gray.500">
      {label}
    </Text>
    <Text fontWeight="medium">{value}</Text>
  </VStack>
);

export default function Home(): JSX.Element {
  const [selectedLocation, setSelectedLocation] = useState("Cairo, Egypt");
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [rooms, setRooms] = useState(1);

  const totalLabel = `${adults} Adult${
    adults !== 1 ? "s" : ""
  }, ${children} Child$${children !== 1 ? "ren" : ""}, ${rooms} Room${
    rooms !== 1 ? "s" : ""
  }`;

  const formattedDate =
    selectedRange?.from && selectedRange?.to
      ? `${format(selectedRange.from, "dd MMM")} - ${format(
          selectedRange.to,
          "dd MMM"
        )}`
      : "Select dates";

  return (
    <Box px={[4, 8]} py={12} bg="gray.100" minH="100vh">
      <Box
        bg="white"
        borderRadius="2xl"
        boxShadow="lg"
        px={[4, 6]}
        py={[6, 8]}
        maxW="6xl"
        mx="auto"
      >
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
          gap={6}
          alignItems="center"
        >
          <Popover.Root>
            <PopoverTrigger>
              <Box cursor="pointer">
                <LabelValueBox
                  label="Where are you going?"
                  value={selectedLocation}
                />
              </Box>
            </PopoverTrigger>
            <PopoverContent w="xs">
              <PopoverArrow />
              <PopoverBody>
                <VStack align="stretch">
                  {locations.map((loc) => (
                    <Button
                      key={loc}
                      variant="ghost"
                      justifyContent="flex-start"
                      onClick={() => setSelectedLocation(loc)}
                    >
                      {loc}
                    </Button>
                  ))}
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover.Root>

          <Popover.Root>
            <PopoverTrigger>
              <Box cursor="pointer">
                <LabelValueBox label="Check in - out" value={formattedDate} />
              </Box>
            </PopoverTrigger>
            <PopoverContent w="fit-content">
              <PopoverArrow />
              <PopoverBody>
                <DayPicker
                  mode="range"
                  selected={selectedRange}
                  onSelect={setSelectedRange}
                  numberOfMonths={2}
                  pagedNavigation
                />
              </PopoverBody>
            </PopoverContent>
          </Popover.Root>

          <Popover.Root>
            <PopoverTrigger>
              <Box cursor="pointer">
                <LabelValueBox label="Guests & Rooms" value={totalLabel} />
              </Box>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                <VStack gap={4}>
                  <Counter
                    label="Adults"
                    value={adults}
                    onChange={setAdults}
                    min={1}
                  />
                  <Counter
                    label="Children"
                    value={children}
                    onChange={setChildren}
                    min={0}
                  />
                  <Counter
                    label="Rooms"
                    value={rooms}
                    onChange={setRooms}
                    min={1}
                  />
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover.Root>

          <Button colorScheme="green" size="lg" rounded="full" w="full">
            Search
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}

const Counter = ({
  label,
  value,
  onChange,
  min,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
}) => {
  const numberInput = useNumberInput({
    value: value.toString(),
    min,
    onValueChange: (details) => onChange(details.valueAsNumber),
  });

  return (
    <HStack justify="space-between" w="full">
      <Text>{label}</Text>
      <chakra.div {...numberInput.getRootProps()} display="flex" gap={2}>
        <chakra.button
          {...numberInput.getDecrementTriggerProps()}
          px={2}
          bg="gray.100"
          borderRadius="full"
          fontWeight="bold"
        >
          -
        </chakra.button>
        <chakra.input
          {...numberInput.getInputProps()}
          textAlign="center"
          width="40px"
          borderRadius="md"
          bg="gray.50"
        />
        <chakra.button
          {...numberInput.getIncrementTriggerProps()}
          px={2}
          bg="gray.100"
          borderRadius="full"
          fontWeight="bold"
        >
          +
        </chakra.button>
      </chakra.div>
    </HStack>
  );
};
