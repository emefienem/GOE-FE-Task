// "use client";

// import {
//   Box,
//   Grid,
//   Button,
//   Text,
//   VStack,
//   HStack,
//   chakra,
// } from "@chakra-ui/react";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverArrow,
//   PopoverBody,
// } from "@chakra-ui/react";
// import { useNumberInput } from "@ark-ui/react";
// import { JSX, useState } from "react";
// import { DayPicker, DateRange } from "react-day-picker";
// import { format } from "date-fns";
// import "react-day-picker/dist/style.css";

// const locations = [
//   "Cairo, Egypt",
//   "Hurghada, Egypt",
//   "Sharm El-Sheikh, Egypt",
//   "Luxor & Aswan, Egypt",
// ];

// const LabelValueBox = ({ label, value }: { label: string; value: string }) => (
//   <VStack align="flex-start" gap={1}>
//     <Text fontSize="sm" color="gray.500">
//       {label}
//     </Text>
//     <Text fontWeight="medium">{value}</Text>
//   </VStack>
// );

// export default function Home(): JSX.Element {
//   const [selectedLocation, setSelectedLocation] = useState("Cairo, Egypt");
//   const [selectedRange, setSelectedRange] = useState<DateRange>();
//   const [adults, setAdults] = useState(2);
//   const [children, setChildren] = useState(1);
//   const [rooms, setRooms] = useState(1);

//   const totalLabel = `${adults} Adult${
//     adults !== 1 ? "s" : ""
//   }, ${children} Child$${children !== 1 ? "ren" : ""}, ${rooms} Room${
//     rooms !== 1 ? "s" : ""
//   }`;

//   const formattedDate =
//     selectedRange?.from && selectedRange?.to
//       ? `${format(selectedRange.from, "dd MMM")} - ${format(
//           selectedRange.to,
//           "dd MMM"
//         )}`
//       : "Select dates";

//   return (
//     <Box px={[4, 8]} py={12} bg="gray.100" minH="100vh">
//       <Box
//         bg="white"
//         borderRadius="2xl"
//         boxShadow="lg"
//         px={[4, 6]}
//         py={[6, 8]}
//         maxW="6xl"
//         mx="auto"
//       >
//         <Grid
//           templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
//           gap={6}
//           alignItems="center"
//         >
//           <Popover.Root>
//             <PopoverTrigger>
//               <Box cursor="pointer">
//                 <LabelValueBox
//                   label="Where are you going?"
//                   value={selectedLocation}
//                 />
//               </Box>
//             </PopoverTrigger>
//             <PopoverContent w="xs">
//               <PopoverArrow />
//               <PopoverBody>
//                 <VStack align="stretch">
//                   {locations.map((loc) => (
//                     <Button
//                       key={loc}
//                       variant="ghost"
//                       justifyContent="flex-start"
//                       onClick={() => setSelectedLocation(loc)}
//                     >
//                       {loc}
//                     </Button>
//                   ))}
//                 </VStack>
//               </PopoverBody>
//             </PopoverContent>
//           </Popover.Root>

//           <Popover.Root>
//             <PopoverTrigger>
//               <Box cursor="pointer">
//                 <LabelValueBox label="Check in - out" value={formattedDate} />
//               </Box>
//             </PopoverTrigger>
//             <PopoverContent w="fit-content">
//               <PopoverArrow />
//               <PopoverBody>
//                 <DayPicker
//                   mode="range"
//                   selected={selectedRange}
//                   onSelect={setSelectedRange}
//                   numberOfMonths={2}
//                   pagedNavigation
//                 />
//               </PopoverBody>
//             </PopoverContent>
//           </Popover.Root>

//           <Popover.Root>
//             <PopoverTrigger>
//               <Box cursor="pointer">
//                 <LabelValueBox label="Guests & Rooms" value={totalLabel} />
//               </Box>
//             </PopoverTrigger>
//             <PopoverContent>
//               <PopoverArrow />
//               <PopoverBody>
//                 <VStack gap={4}>
//                   <Counter
//                     label="Adults"
//                     value={adults}
//                     onChange={setAdults}
//                     min={1}
//                   />
//                   <Counter
//                     label="Children"
//                     value={children}
//                     onChange={setChildren}
//                     min={0}
//                   />
//                   <Counter
//                     label="Rooms"
//                     value={rooms}
//                     onChange={setRooms}
//                     min={1}
//                   />
//                 </VStack>
//               </PopoverBody>
//             </PopoverContent>
//           </Popover.Root>

//           <Button colorScheme="green" size="lg" rounded="full" w="full">
//             Search
//           </Button>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// const Counter = ({
//   label,
//   value,
//   onChange,
//   min,
// }: {
//   label: string;
//   value: number;
//   onChange: (value: number) => void;
//   min: number;
// }) => {
//   const numberInput = useNumberInput({
//     value: value.toString(),
//     min,
//     onValueChange: (details) => onChange(details.valueAsNumber),
//   });

//   return (
//     <HStack justify="space-between" w="full">
//       <Text>{label}</Text>
//       <chakra.div {...numberInput.getRootProps()} display="flex" gap={2}>
//         <chakra.button
//           {...numberInput.getDecrementTriggerProps()}
//           px={2}
//           bg="gray.100"
//           borderRadius="full"
//           fontWeight="bold"
//         >
//           -
//         </chakra.button>
//         <chakra.input
//           {...numberInput.getInputProps()}
//           textAlign="center"
//           width="40px"
//           borderRadius="md"
//           bg="gray.50"
//         />
//         <chakra.button
//           {...numberInput.getIncrementTriggerProps()}
//           px={2}
//           bg="gray.100"
//           borderRadius="full"
//           fontWeight="bold"
//         >
//           +
//         </chakra.button>
//       </chakra.div>
//     </HStack>
//   );
// };
"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  HStack,
  NumberInput,
} from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { createListCollection, Select } from "@ark-ui/react";

const locations = ["Cairo", "Hurghada", "Sharm El-Sheikh", "Luxor & Aswan"];

const LocationPicker = ({
  location,
  setLocation,
}: {
  location: string;
  setLocation: (loc: string) => void;
}) => {
  const items = locations.map((loc) => ({ label: loc, value: loc }));

  // Create the collection using the proper utility function
  const collection = createListCollection({ items });

  return (
    <Select.Root
      value={[location]}
      onValueChange={(e) => setLocation(e.value[0])}
      collection={collection}
      positioning={{ sameWidth: true }}
    >
      <Select.Label>
        <Text mb={2}>Location</Text>
      </Select.Label>
      <Select.Control>
        <Select.Trigger />
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {items.map((item) => (
            <Select.Item key={item.value} item={item}>
              <Select.ItemText>{item.label}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};

const DateCell = ({
  date,
  selected,
  onClick,
}: {
  date: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <Box
    w={"32px"}
    h={"32px"}
    display="flex"
    alignItems="center"
    justifyContent="center"
    borderRadius="md"
    bg={selected ? "yellow.400" : "transparent"}
    _hover={{ bg: "gray.600", cursor: "pointer" }}
    onClick={onClick}
  >
    <Text>{date}</Text>
  </Box>
);

const DatePicker = ({
  selectedDates,
  setSelectedDates,
}: {
  selectedDates: string[];
  setSelectedDates: (d: string[]) => void;
}) => {
  const dates = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  const toggleDate = (date: string) => {
    (setSelectedDates as React.Dispatch<React.SetStateAction<string[]>>)(
      (prev) =>
        prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    );
  };

  return (
    <Box bg="gray.800" p={4} borderRadius="lg" color="white">
      <HStack justifyContent="space-between" mb={2}>
        <HiChevronLeft size={6} />
        <Text>February 2025</Text>
        <HiChevronRight size={6} />
      </HStack>
      <Flex wrap="wrap" gap={1}>
        {dates.map((date) => (
          <DateCell
            key={date}
            date={date}
            selected={selectedDates.includes(date)}
            onClick={() => toggleDate(date)}
          />
        ))}
      </Flex>
    </Box>
  );
};

type PeopleRoomPickerProps = {
  adults: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  children: number;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
  rooms: number;
  setRooms: React.Dispatch<React.SetStateAction<number>>;
};
const PeopleRoomPicker = ({
  adults,
  setAdults,
  children,
  setChildren,
  rooms,
  setRooms,
}: PeopleRoomPickerProps) => (
  <VStack bg="gray.700" p={4} borderRadius="lg" gap={4} color="white">
    {[
      { label: "Adults", value: adults, setValue: setAdults },
      { label: "Children", value: children, setValue: setChildren },
      { label: "Rooms", value: rooms, setValue: setRooms },
    ].map(({ label, value, setValue }) => (
      <HStack key={label} justifyContent="space-between" w="100%">
        <Text>{label}</Text>
        <NumberInput.Root
          min={0}
          value={value.toString()}
          // onValueChange={(details) => setValue(details.valueAsNumber)}
          onValueChange={(details) => {
            const num = Number(details.value);
            if (!isNaN(num)) {
              setValue(num);
            }
          }}
          w="80px"
        >
          <NumberInput.Control>
            <NumberInput.Input bg="gray.600" color="white" />
          </NumberInput.Control>
        </NumberInput.Root>
      </HStack>
    ))}
  </VStack>
);

export default function EgyBookPicker() {
  const [location, setLocation] = useState(locations[0]);
  const [selectedDates, setSelectedDates] = useState<string[]>([] as string[]);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [rooms, setRooms] = useState(1);

  return (
    <VStack
      gap={6}
      p={6}
      bg="gray.900"
      minH="100vh"
      align="start"
      color="white"
    >
      <Box>
        <Text mb={2}>Location</Text>
        <LocationPicker location={location} setLocation={setLocation} />
      </Box>

      <Box>
        <Text mb={2}>Select Dates</Text>
        <DatePicker
          selectedDates={selectedDates}
          setSelectedDates={setSelectedDates}
        />
      </Box>

      <Box>
        <Text mb={2}>Guests</Text>
        <PeopleRoomPicker
          adults={adults}
          setAdults={setAdults}
          children={children}
          setChildren={setChildren}
          rooms={rooms}
          setRooms={setRooms}
        />
      </Box>

      <Button bg="green.500" _hover={{ bg: "green.600" }}>
        Explore Stays
      </Button>
    </VStack>
  );
}
