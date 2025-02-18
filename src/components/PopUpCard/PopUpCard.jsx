import React from "react";
import "./PopUpCard.css";
import closeSvg from "../../../public/close.svg";

const PopUpCard = ({ product,onClose }) => {
  if (!product) return null;

  return (
    <div className="popUp">
      <div className="popUpLeft">
        <img
          className="productImageSecond"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="popUpRight">
        <img
          className="closeButton"
          src={closeSvg}
          onClick={onClose}
        ></img>
        <h4>{product.title}</h4>
        <p>Brand: {product.brand}</p>
        <p>Model: {product.model}</p>
        <p>Color: {product.color}</p>
        <p className="description">
          <span>About this product:</span> <br /> <br /> {product.description}
        </p>
      </div>
    </div>
  );
};

export default PopUpCard;
