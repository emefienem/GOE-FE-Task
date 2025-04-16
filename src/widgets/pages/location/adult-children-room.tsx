// "use client";

// import {
//   Box,
//   Button,
//   HStack,
//   Text,
//   VStack,
//   chakra,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@chakra-ui/react";
// import { useNumberInput } from "@ark-ui/react";
// import { useState } from "react";

// const AdultsChildrenRooms = () => {
//   const [adults, setAdults] = useState(2);
//   const [children, setChildren] = useState(1);
//   const [rooms, setRooms] = useState(1);

//   const totalLabel = `${adults} Adult${
//     adults !== 1 ? "s" : ""
//   }, ${children} Child${children !== 1 ? "ren" : ""}, ${rooms} Room${
//     rooms !== 1 ? "s" : ""
//   }`;

//   const Counter = ({
//     label,
//     value,
//     onChange,
//     min,
//   }: {
//     label: string;
//     value: number;
//     onChange: (val: number) => void;
//     min: number;
//   }) => {
//     const numberInput = useNumberInput({
//       value: value.toString(),
//       min,
//       onValueChange: (details) => onChange(details.valueAsNumber),
//     });

//     return (
//       <HStack justify="space-between" w="100%">
//         <Text fontWeight="medium" color="gray.700">
//           {label}
//         </Text>
//         <chakra.div {...numberInput.getRootProps} display="flex" gap={2}>
//           <chakra.button
//             {...numberInput.getDecrementTriggerProps}
//             px={2}
//             fontSize="lg"
//             fontWeight="bold"
//             borderRadius="full"
//             border="1px solid #CBD5E0"
//             _hover={{ bg: "gray.100" }}
//           >
//             -
//           </chakra.button>
//           <chakra.input
//             {...numberInput.getInputProps}
//             textAlign="center"
//             width="40px"
//             border="1px solid #CBD5E0"
//             borderRadius="md"
//             fontWeight="semibold"
//           />
//           <chakra.button
//             {...numberInput.getIncrementTriggerProps}
//             px={2}
//             fontSize="lg"
//             fontWeight="bold"
//             borderRadius="full"
//             border="1px solid #CBD5E0"
//             _hover={{ bg: "gray.100" }}
//           >
//             +
//           </chakra.button>
//         </chakra.div>
//       </HStack>
//     );
//   };

//   return (
//     <Popover.Root>
//       <PopoverTrigger>
//         <Button
//           variant="outline"
//           minW="250px"
//           justifyContent="space-between"
//           fontWeight="medium"
//           colorScheme="gray"
//         >
//           {totalLabel}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent w="300px" p={4} borderRadius="xl" boxShadow="lg">
//         <VStack gap={4} align="stretch">
//           <Counter label="Adults" value={adults} onChange={setAdults} min={1} />
//           <Counter
//             label="Children"
//             value={children}
//             onChange={setChildren}
//             min={0}
//           />
//           <Counter label="Rooms" value={rooms} onChange={setRooms} min={1} />
//         </VStack>
//         <Box mt={3} textAlign="center" fontSize="xs" color="gray.500">
//           You can select up to 10 travelers
//         </Box>
//       </PopoverContent>
//     </Popover.Root>
//   );
// };

// export default AdultsChildrenRooms;

"use client";
import { useNumberInput } from "@ark-ui/react";
import {
  Button,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { useState } from "react";

interface CounterProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
}

const Counter: React.FC<CounterProps> = ({ label, value, onChange, min }) => {
  const numberInput = useNumberInput({
    value: value.toString(),
    min,
    onValueChange: (details) => onChange(details.valueAsNumber),
  });

  return (
    <HStack justify="space-between" w="100%">
      <Text color="white">{label}</Text>
      <chakra.div {...numberInput.getRootProps()} display="flex" gap={2}>
        <chakra.button
          {...numberInput.getDecrementTriggerProps()}
          px={2}
          bg="whiteAlpha.300"
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
          bg="whiteAlpha.200"
          color="white"
        />
        <chakra.button
          {...numberInput.getIncrementTriggerProps()}
          px={2}
          bg="whiteAlpha.300"
          borderRadius="full"
          fontWeight="bold"
        >
          +
        </chakra.button>
      </chakra.div>
    </HStack>
  );
};

interface AdultsChildrenRoomsProps {
  adults: number;
  setAdults: (val: number) => void;
  children: number;
  setChildren: (val: number) => void;
  rooms: number;
  setRooms: (val: number) => void;
}

const AdultsChildrenRooms: React.FC<AdultsChildrenRoomsProps> = ({
  adults,
  setAdults,
  children,
  setChildren,
  rooms,
  setRooms,
}) => {
  const totalLabel = `${adults} Adult${
    adults !== 1 ? "s" : ""
  }, ${children} Child${children !== 1 ? "ren" : ""}, ${rooms} Room${
    rooms !== 1 ? "s" : ""
  }`;

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
          {totalLabel}
        </Button>
      </PopoverTrigger>
      <PopoverContent bg="gray.700" color="white">
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
            <Counter label="Rooms" value={rooms} onChange={setRooms} min={1} />
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover.Root>
  );
};

export default AdultsChildrenRooms;
