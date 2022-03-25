import React from "react";

const ItemCard = ({ product: { img, name, price, quantity } }) => {
  return (
    <div className="col-md-4">
      <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
        <div className="m-2">
          <img src={img} className="card-img-top" alt="" />
        </div>
        <div className="card-body mx-auto">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <strong>price: ${price}</strong>
          </p>
          <a href="." className="btn btn-primary text-center">
            Add To Card
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
