import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function CalendarPopover({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: {
  startDate: Date;
  endDate: Date;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
}) {
  const [range, setRange] = useState([
    {
      startDate,
      endDate,
      key: "selection",
    },
  ]);

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    setRange([ranges.selection]);
  };

  return (
    <div className="p-4">
      <DateRange
        editableDateInputs={true}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        ranges={range}
        minDate={new Date()}
        rangeColors={["#34D399"]}
      />
    </div>
  );
}
