import React from "react";

const SeatLayout = ({
  danhSachGhe,
  selectedSeats,
  bookedSeats,
  onSeatClick,
}) => {
  return (
    <div className="flex justify-center">
      <table className="border-collapse">
        <thead>
          <tr>
            {Array.from({ length: 13 }, (_, i) => (
              <th key={(i = 1)} className="px-2 text-center">
                {i === 0 ? "<>" : i}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {danhSachGhe.map((rowData) => (
            <tr key={rowData.hang}>
              <td className="text-center">{rowData.hang}</td>
              {rowData.danhSachGhe.map((ghe) => {
                const isSelected = selectedSeats.includes(ghe.soGhe);
                const isBooked = bookedSeats.includes(ghe.soGhe) || ghe.daDat;

                return (
                  <td key={ghe.soGhe} className="p-1">
                    <input
                      type="checkbox"
                      checked={isSelected || isBooked}
                      disabled={isBooked}
                      onChange={() => onSeatClick(ghe.soGhe)}
                      className={`cursor-pointer rounded w-6 h-6 ${
                        isBooked
                          ? "!bg-red-500"
                          : isSelected
                          ? "!bg-green-500"
                          : "bg-white"
                      }`}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeatLayout;
