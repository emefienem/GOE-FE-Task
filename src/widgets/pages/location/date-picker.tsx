// "use client";
// import { useState } from "react";
// import { format } from "date-fns";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverArrow,
//   PopoverBody,
//   Button,
// } from "@chakra-ui/react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";

// const DatePickerComp = () => {
//   const [selected, setSelected] = useState<Date | undefined>();
//   const [open, setOpen] = useState(false);

//   const handleDayClick = (day?: Date) => {
//     setSelected(day);
//     if (day) setOpen(false);
//   };

//   return (
//     <Popover.Root
//       open={open}
//       onOpenChange={({ open: isOpen }) => setOpen(isOpen)}
//     >
//       <PopoverTrigger>
//         <Button onClick={() => setOpen(!open)}>
//           {selected ? format(selected, "PP") : "Select Date"}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent>
//         <PopoverArrow />
//         <PopoverBody>
//           <DayPicker
//             mode="single"
//             selected={selected}
//             onSelect={handleDayClick}
//             numberOfMonths={2}
//             pagedNavigation
//             required={false}
//           />
//         </PopoverBody>
//       </PopoverContent>
//     </Popover.Root>
//   );
// };

// export default DatePickerComp;
"use client";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from "date-fns";

interface DatePickerCompProps {
  selectedRange: DateRange | undefined;
  setSelectedRange: (range: DateRange | undefined) => void;
}

const DatePickerComp: React.FC<DatePickerCompProps> = ({
  selectedRange,
  setSelectedRange,
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
          {selectedRange?.from && selectedRange?.to
            ? `${format(selectedRange.from, "dd MMM yyyy")} - ${format(
                selectedRange.to,
                "dd MMM yyyy"
              )}`
            : "Select Dates"}
        </Button>
      </PopoverTrigger>
      <PopoverContent bg="gray.700" color="white">
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
  );
};

export default DatePickerComp;
