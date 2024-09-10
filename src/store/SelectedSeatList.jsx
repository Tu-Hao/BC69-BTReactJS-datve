import React from "react";
import { Button } from "antd";

const SelectedSeatList = ({ selectedSeats, danhSachGhe, onCancelSeat, onPayment }) => {
    const totalPrice = selectedSeats.reduce((total, seat) => {
      let seatPrice = 0;
  
      // Lặp qua từng hàng để tìm ghế trong danh sách ghế
      danhSachGhe.forEach(row => {
        const gheFound = row.danhSachGhe.find(ghe => ghe.soGhe === seat);
        if (gheFound) {
          seatPrice = gheFound.gia; // Lấy giá của ghế
        }
      });
  
      return total + seatPrice; // Cộng giá ghế vào tổng
    }, 0);
  
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-xl font-bold">Danh sách ghế bạn chọn</h2>
        <table className="min-w-max w-1/2 table-auto border-collapse text-center">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>
            {selectedSeats.map((seat) => {
              let ghe;
  
              // Tìm ghế trong danh sách để hiển thị
              danhSachGhe.forEach((row) => {
                const gheFound = row.danhSachGhe.find(ghe => ghe.soGhe === seat);
                if (gheFound) {
                  ghe = gheFound;
                }
              });
  
              return (
                <tr key={seat}>
                  <td className="p-2">{seat}</td>
                  <td className="p-2">{ghe ? ghe.gia.toLocaleString() : 0} VND</td>
                  <td className="p-2">
                    <button
                      onClick={() => onCancelSeat(seat)}
                      className="text-red-600 font-bold"
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="font-bold p-2">Tổng tiền</td>
              <td className="font-bold p-2">{totalPrice.toLocaleString()} VND</td>
              <td className="p-2">
                <Button
                  onClick={onPayment}
                  type="primary"
                  disabled={selectedSeats.length === 0}
                >
                  Thanh toán
                </Button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  };
  
  export default SelectedSeatList;
  