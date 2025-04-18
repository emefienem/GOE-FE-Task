"use client";
import { useState } from "react";
import {
  Flex,
  Icon,
  Text,
  Button,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  HStack,
  VStack,
  Grid,
  useDisclosure,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FiChevronDown, FiPlus, FiMinus } from "react-icons/fi";

const locations = [
  "Cairo, Egypt",
  "Hurghada",
  "Sharm El-Sheikh",
  "Luxor & Aswan",
];

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 8 * 24 * 3600000)
  );
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [rooms, setRooms] = useState(1);

  const dateDisc = useDisclosure();
  const guestDisc = useDisclosure();

  const formatDate = (date: Date) =>
    date.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <Flex
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      borderRadius="full"
      p="4"
      px="6"
      align="center"
      justify="space-between"
      maxW={{ base: "95%", sm: "90%", md: "container.lg", lg: "container.xl" }}
      mx="auto"
      mt={{ base: "8", md: "6" }}
      boxShadow="md"
      gap={4}
      flexDir={{ base: "column", md: "row" }}
    >
      {/* Small screen */}
      <Box display={{ base: "block", md: "none" }} w="100%">
        <Flex wrap="wrap" align="center" justify="center" gap={2}>
          {/* Location Popover */}
          <Popover.Root positioning={{ placement: "bottom-start" }}>
            <PopoverTrigger>
              <Button as="span" variant="ghost" color="whiteAlpha.900">
                <FiChevronDown />
                <Icon as={FaMapMarkerAlt} color="#D2AC71" mr={2} />
                <Text as="span">{selectedLocation}</Text>
              </Button>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" borderColor="gray.600">
              <PopoverArrow />
              <PopoverBody p={0}>
                <VStack gap={0} align="stretch">
                  {locations.map((loc) => (
                    <Box
                      key={loc}
                      px={4}
                      py={2}
                      _hover={{ bg: "gray.600", cursor: "pointer" }}
                      onClick={() => setSelectedLocation(loc)}
                    >
                      <Text color="white">{loc}</Text>
                    </Box>
                  ))}
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover.Root>

          <Icon as={MdOutlineHorizontalRule} color="whiteAlpha.700" />

          {/* Date Popover */}
          <Popover.Root
            positioning={{ placement: "bottom-start" }}
            open={dateDisc.open}
            onOpenChange={dateDisc.onOpen}
            closeOnInteractOutside={true}
          >
            <PopoverTrigger>
              <Button variant="ghost" color="whiteAlpha.900">
                <FiChevronDown />
                <Icon as={BsCalendar2Date} color="#D2AC71" mr={2} />
                <Text as="span">
                  {formatDate(startDate)} - {formatDate(endDate)}
                </Text>
              </Button>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" borderColor="gray.600" w="300px">
              <PopoverArrow />
              <PopoverHeader>
                <Text color="white">Select dates</Text>
              </PopoverHeader>
              <PopoverBody>
                <Flex justify="space-between">
                  <Calendar
                    monthOffset={0}
                    selectRange={{
                      startDate,
                      endDate,
                      setStartDate,
                      setEndDate,
                    }}
                  />
                  <Calendar
                    monthOffset={1}
                    selectRange={{
                      startDate,
                      endDate,
                      setStartDate,
                      setEndDate,
                    }}
                  />
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover.Root>
        </Flex>

        <Flex mt={2} align="center" justify="center">
          {/* Guests Popover */}
          <Popover.Root
            positioning={{ placement: "bottom-start" }}
            open={guestDisc.open}
            onOpenChange={guestDisc.onOpen}
            closeOnInteractOutside={true}
          >
            <PopoverTrigger>
              <Button variant="ghost" color="whiteAlpha.900">
                <FiChevronDown />
                <Icon as={FaUser} color="#D2AC71" mr={2} />
                <Text as="span">
                  {adults} Adults, {children} Children, {rooms} Rooms
                </Text>
              </Button>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" borderColor="gray.600">
              <PopoverArrow />
              <PopoverHeader>
                <Text color="white">Guests & Rooms</Text>
              </PopoverHeader>
              <PopoverBody>
                <VStack gap={3}>
                  <CountControl
                    label="Adults"
                    value={adults}
                    onChange={setAdults}
                    min={0}
                  />
                  <CountControl
                    label="Children"
                    value={children}
                    onChange={setChildren}
                    min={0}
                  />
                  <CountControl
                    label="Rooms"
                    value={rooms}
                    onChange={setRooms}
                    min={1}
                  />
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover.Root>
        </Flex>

        <Button
          bg="green.500"
          color="white"
          px="6"
          py="4"
          borderRadius="full"
          _hover={{ bg: "green.600" }}
          fontWeight="semibold"
          w="100%"
          mt={3}
        >
          Explore Stays
        </Button>
      </Box>

      {/* Medium & Larger screens */}
      <Flex
        display={{ base: "none", md: "flex" }}
        flex="1"
        w="100%"
        align="center"
        justify="space-between"
      >
        <Flex align="center" gap={8}>
          {/* Location */}
          <Popover.Root positioning={{ placement: "bottom-start" }}>
            <PopoverTrigger>
              <Button as="span" variant="ghost" color="whiteAlpha.900">
                <FiChevronDown />
                <Icon as={FaMapMarkerAlt} color="#D2AC71" mr={2} />
                <Text as="span">{selectedLocation}</Text>
              </Button>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" borderColor="gray.600">
              <PopoverArrow />
              <PopoverBody p={0}>
                <VStack gap={0} align="stretch">
                  {locations.map((loc) => (
                    <Box
                      key={loc}
                      px={4}
                      py={2}
                      _hover={{ bg: "gray.600", cursor: "pointer" }}
                      onClick={() => setSelectedLocation(loc)}
                    >
                      <Text color="white">{loc}</Text>
                    </Box>
                  ))}
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover.Root>

          {/* Date */}
          <Popover.Root
            positioning={{ placement: "bottom-start" }}
            open={dateDisc.open}
            onOpenChange={dateDisc.onOpen}
            closeOnInteractOutside={true}
          >
            <PopoverTrigger>
              <Button variant="ghost" color="whiteAlpha.900">
                <FiChevronDown />
                <Icon as={BsCalendar2Date} color="#D2AC71" mr={2} />
                <Text>
                  {formatDate(startDate)} - {formatDate(endDate)}
                </Text>
              </Button>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" borderColor="gray.600" w="500px">
              <PopoverArrow />
              <PopoverHeader>
                <Text color="white">Select dates</Text>
              </PopoverHeader>
              <PopoverBody>
                <Flex justify="space-between">
                  <Calendar
                    monthOffset={0}
                    selectRange={{
                      startDate,
                      endDate,
                      setStartDate,
                      setEndDate,
                    }}
                  />
                  <Calendar
                    monthOffset={1}
                    selectRange={{
                      startDate,
                      endDate,
                      setStartDate,
                      setEndDate,
                    }}
                  />
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover.Root>

          {/* Guests */}
          <Popover.Root
            positioning={{ placement: "bottom-start" }}
            open={guestDisc.open}
            onOpenChange={guestDisc.onOpen}
            closeOnInteractOutside={true}
          >
            <PopoverTrigger>
              <Button variant="ghost" color="whiteAlpha.900">
                <FiChevronDown />
                <Icon as={FaUser} color="#D2AC71" mr={2} />
                <Text>
                  {adults} Adults, {children} Children, {rooms} Rooms
                </Text>
              </Button>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" borderColor="gray.600">
              <PopoverArrow />
              <PopoverHeader>
                <Text color="white">Guests & Rooms</Text>
              </PopoverHeader>
              <PopoverBody>
                <VStack gap={3}>
                  <CountControl
                    label="Adults"
                    value={adults}
                    onChange={setAdults}
                    min={0}
                  />
                  <CountControl
                    label="Children"
                    value={children}
                    onChange={setChildren}
                    min={0}
                  />
                  <CountControl
                    label="Rooms"
                    value={rooms}
                    onChange={setRooms}
                    min={1}
                  />
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover.Root>
        </Flex>

        <Button
          bg="green.500"
          color="white"
          px="6"
          py="4"
          borderRadius="full"
          _hover={{ bg: "green.600" }}
          fontWeight="semibold"
          ml={{ md: 3, lg: 6 }}
        >
          Explore Stays
        </Button>
      </Flex>
    </Flex>
  );
}
function CountControl({
  label,
  value,
  onChange,
  min = 0,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
}) {
  return (
    <Flex justify="space-between" align="center" w="full">
      <Text color="white">{label}</Text>
      <HStack>
        <Button
          size="sm"
          onClick={() => onChange(Math.max(min, value - 1))}
          color="white"
        >
          <Icon as={FiMinus} />
        </Button>
        <Text color="white">{value}</Text>
        <Button size="sm" onClick={() => onChange(value + 1)} color="white">
          <Icon as={FiPlus} />
        </Button>
      </HStack>
    </Flex>
  );
}

function Calendar({
  monthOffset,
  selectRange,
}: {
  monthOffset: 0 | 1;
  selectRange: {
    startDate: Date;
    endDate: Date;
    setStartDate: (d: Date) => void;
    setEndDate: (d: Date) => void;
  };
}) {
  // Simplified calendar: clickable days
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + monthOffset;
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [] as React.ReactNode[];
  for (let i = 0; i < firstDay; i++) cells.push(<Box key={`empty-${i}`} />);
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const isSelected =
      date >= selectRange.startDate && date <= selectRange.endDate;
    cells.push(
      <Box
        key={d}
        h="32px"
        w="32px"
        lineHeight="32px"
        textAlign="center"
        borderRadius="md"
        bg={isSelected ? "green.500" : "gray.600"}
        color={isSelected ? "white" : "gray.300"}
        cursor="pointer"
        onClick={() => {
          // simple range selection: set start if before start, else end
          if (date < selectRange.startDate) selectRange.setStartDate(date);
          else selectRange.setEndDate(date);
        }}
      >
        {d}
      </Box>
    );
  }

  return (
    <VStack align="stretch" gap={2}>
      <Text fontWeight="bold" color="white">
        {today.toLocaleString(undefined, {
          month: "long",
          year: "numeric",
          timeZone: "UTC",
        })}
      </Text>
      <Grid templateColumns="repeat(7, 1fr)" gap={1}>
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <Text key={d} textAlign="center" fontSize="xs" color="gray.300">
            {d}
          </Text>
        ))}
        {cells}
      </Grid>
    </VStack>
  );
}
