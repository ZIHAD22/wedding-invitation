import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./SelectedCardItem.css";

const SelectedCardItem = ({ cardInfo: { name, img }, handleCardClear }) => {
  return (
    <div className="d-flex justify-content-around align-items-center mt-3">
      <div className="common">
        <img src={img} width={"50px"} alt="" />
      </div>
      <div>
        <h5>{name}</h5>
      </div>
      <div className="common">
        <FontAwesomeIcon icon={faTrash} fontSize={"20px"} />
      </div>
    </div>
  );
};

export default SelectedCardItem;
