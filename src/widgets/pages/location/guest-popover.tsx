import { FiMinus, FiPlus } from "react-icons/fi";

export default function GuestPopover({
  adults,
  numChildren,
  rooms,
  setAdults,
  setNumChildren,
  setRooms,
}: {
  adults: number;
  numChildren: number;
  rooms: number;
  setAdults: (count: number) => void;
  setNumChildren: (count: number) => void;
  setRooms: (count: number) => void;
}) {
  const renderControl = (
    label: string,
    count: number,
    setCount: (count: number) => void
  ) => (
    <div className="flex justify-between items-center py-2">
      <span className="text-white">{label}</span>
      <div className="flex items-center gap-2">
        <button
          className="p-1 rounded-full border border-gray-500 text-white hover:bg-gray-600"
          onClick={() => setCount(Math.max(0, count - 1))}
        >
          <FiMinus />
        </button>
        <span className="text-white">{count}</span>
        <button
          className="p-1 rounded-full border border-gray-500 text-white hover:bg-gray-600"
          onClick={() => setCount(count + 1)}
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-4 space-y-3">
      {renderControl("Adults", adults, setAdults)}
      {renderControl("Children", numChildren, setNumChildren)}
      {renderControl("Rooms", rooms, setRooms)}
    </div>
  );
}
