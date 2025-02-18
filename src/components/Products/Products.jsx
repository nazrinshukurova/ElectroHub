import { useState, Fragment } from "react";
import PopUpCard from "../PopUpCard/PopUpCard"; 
import './Product.css'

const Products = ({ product }) => {
  if (!product) return null;

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const discountPrice = (price, discount) => {
    return discount ? price - (price / 100) * discount : price; 
  };

  const discounted = discountPrice(product.price, product.discount);

  const handleProductClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <Fragment>
      {isPopupVisible && (
        <div className="overlay" onClick={handleClosePopup}></div>
      )}

      <div className="product-card" onClick={handleProductClick}>
        <img className="productImage" src={product.image} alt={product.name} />
        <h3 className="productName">{product.name}</h3>

        <div className="prices">
          <p
            className="price"
            style={{
              textDecoration: discounted !== product.price ? "line-through" : "none",
              color: discounted !== product.price ? "red" : "#000",
              fontSize: discounted !== product.price ? "17px" : "20px",
            }}
          >
            ${product.price}
          </p>
          {discounted !== product.price && <p className="discount">${discounted}</p>}
        </div>
      </div>

      {isPopupVisible && (
        <div className="popup-wrapper">
          <PopUpCard product={product} onClose={handleClosePopup} />
        </div>
      )}
    </Fragment>
  );
};

export default Products;
