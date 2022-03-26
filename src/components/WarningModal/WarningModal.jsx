import React from "react";
import "./WarningModal.css";

const WarningModal = ({ modalInfo: { modalText }, handleWarningModal }) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show sticky-top position-fixed warning-modal"
      role="alert"
    >
      <h6>{modalText}</h6>
      <button
        type="button"
        onClick={handleWarningModal}
        className="btn-close"
      ></button>
    </div>
  );
};

export default WarningModal;
