import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./SelectedCardItem.css";

const SelectedCardItem = ({
  cardInfo: { name, img, id },
  handleCardDelete,
  enableBtn,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-3 px-4">
      <div className="common">
        <img src={img} width={"50px"} alt="" />
      </div>
      <div>
        <h5>{name}</h5>
      </div>
      <button
        className="common rounded-pill p-2"
        disabled={enableBtn}
        onClick={() => handleCardDelete(id)}
      >
        <FontAwesomeIcon icon={faTrash} fontSize={"20px"} />
      </button>
    </div>
  );
};

export default SelectedCardItem;
