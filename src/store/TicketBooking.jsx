import React, { useState } from "react";
import SeatLayout from "./SeatLayout";
import SelectedSeatList from "./SelectedSeatList";
import PaymentModal from "./PaymentModal";
import DanhSachGhe from "./danhSachGhe.json";
console.log("DanhSachGhe: ", DanhSachGhe);

function TicketBooking() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState(
    DanhSachGhe.filter((ghe) => ghe.daDat).map((ghe) => ghe.soGhe)
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat.soGhe)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat.soGhe));
    } else {
      setSelectedSeats([...selectedSeats, seat.soGhe]);
    }
  };

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return; //
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleCancelSeat = (seat) => {
    setSelectedSeats(selectedSeats.filter((s) => s !== seat));
  };

  const handlePayment = () => {
    setIsModalVisible(true);
  };

  const confirmPayment = () => {
    setBookedSeats([...bookedSeats, ...selectedSeats]);
    setSelectedSeats([]);
    setIsModalVisible(false);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-[url('/img/bgmovie.jpg')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-center text-3xl font-bold text-yellow-400 mb-4">
          Đặt vé xem phim
        </h1>

        {/* Seat Layout */}
        <SeatLayout
          danhSachGhe={DanhSachGhe}
          selectedSeats={selectedSeats}
          bookedSeats={bookedSeats}
          onSeatClick={handleSeatClick}
        />

        {/* Selected Seat List */}
        <SelectedSeatList
          selectedSeats={selectedSeats}
          danhSachGhe={DanhSachGhe}
          onCancelSeat={handleCancelSeat}
          onPayment={handlePayment}
        />

        {/* Payment Modal */}
        <PaymentModal
          visible={isModalVisible}
          onConfirm={confirmPayment}
          onCancel={() => setIsModalVisible(false)}
          selectedSeats={selectedSeats}
        />
      </div>
    </div>
  );
}

export default TicketBooking;
