import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const ItemCard = (props) => {
  const {
    product: { img, name, price },
    handleAddToCard,
    modalShow,
  } = props;
  return (
    <div className="col-md-4">
      <div className="card mx-auto mb-5 " style={{ width: "18rem" }}>
        <div className="">
          <img src={img} className="card-img-top" alt="" />
        </div>
        <div className="card-body mx-auto text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <strong>price: ${price}</strong>
          </p>
          <button
            onClick={() => handleAddToCard(props.product)}
            className="btn btn-primary text-center"
          >
            Add To Card <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
