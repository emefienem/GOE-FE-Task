// "use client";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverArrow,
//   PopoverBody,
//   Button,
//   VStack,
// } from "@chakra-ui/react";
// import { JSX, useState } from "react";

// const LocationPicker = (): JSX.Element => {
//   const [open, setOpen] = useState(false);
//   const [selectedLocation, setSelectedLocation] =
//     useState<string>("Cairo, Egypt");

//   const locations: string[] = [
//     "Cairo, Egypt",
//     "Hurghada, Egypt",
//     "Sharm El-Sheikh, Egypt",
//     "Luxor & Aswan, Egypt",
//   ];

//   return (
//     <Popover.Root
//       open={open}
//       onOpenChange={({ open: isOpen }) => setOpen(isOpen)}
//     >
//       <PopoverTrigger>
//         <Button variant="outline" minW="200px" justifyContent="space-between">
//           {selectedLocation}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent width="auto">
//         <PopoverArrow />
//         <PopoverBody>
//           <VStack align="stretch">
//             {locations.map((loc: string) => (
//               <Button
//                 key={loc}
//                 variant="ghost"
//                 justifyContent="flex-start"
//                 onClick={() => {
//                   setSelectedLocation(loc);
//                   setOpen(false);
//                 }}
//               >
//                 {loc}
//               </Button>
//             ))}
//           </VStack>
//         </PopoverBody>
//       </PopoverContent>
//     </Popover.Root>
//   );
// };

// export default LocationPicker;

"use client";

import { Button, VStack } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from "@chakra-ui/react";
import { useState } from "react";
import "react-day-picker/dist/style.css";

const locations = [
  "Cairo, Egypt",
  "Hurghada, Egypt",
  "Sharm El-Sheikh, Egypt",
  "Luxor & Aswan, Egypt",
];

interface LocationPickerProps {
  selectedLocation: string;
  setSelectedLocation: (loc: string) => void;
}

const LocationPicker: React.FC<LocationPickerProps> = ({
  selectedLocation,
  setSelectedLocation,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root
      open={open}
      onOpenChange={({ open: isOpen }) => setOpen(isOpen)}
    >
      <PopoverTrigger>
        <Button
          onClick={() => setOpen(!open)}
          variant="outline"
          bg="gray.800"
          color="white"
          px={4}
          py={2}
          borderRadius="md"
          w="full"
          textAlign="left"
        >
          {selectedLocation}
        </Button>
      </PopoverTrigger>
      <PopoverContent w="full" bg="gray.700" color="white">
        <PopoverArrow />
        <PopoverBody>
          <VStack align="stretch">
            {locations.map((loc) => (
              <Button
                key={loc}
                variant="ghost"
                colorScheme="whiteAlpha"
                justifyContent="flex-start"
                onClick={() => {
                  setSelectedLocation(loc);
                  setOpen(false);
                }}
              >
                {loc}
              </Button>
            ))}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover.Root>
  );
};

export default LocationPicker;
