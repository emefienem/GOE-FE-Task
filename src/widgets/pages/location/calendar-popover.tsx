import { useState } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";
import { Range } from "react-date-range";
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
  const [range, setRange] = useState<Range[]>([
    {
      startDate,
      endDate,
      key: "selection",
    },
  ]);

  const handleSelect = (ranges: RangeKeyDict) => {
    const selection = ranges.selection;
    if (selection.startDate && selection.endDate) {
      setStartDate(selection.startDate);
      setEndDate(selection.endDate);
      setRange([selection]);
    }
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
