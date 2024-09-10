import React from "react";
import { Modal } from "antd";

const PaymentModal = ({ visible, onConfirm, onCancel, selectedSeats }) => {
  return (
    <Modal
      title="Xác nhận thanh toán"
      visible={visible}
      onOk={onConfirm}
      onCancel={onCancel}
    >
      <p>Bạn có chắc muốn thanh toán cho {selectedSeats.length} ghế?</p>
    </Modal>
  );
};

export default PaymentModal;
