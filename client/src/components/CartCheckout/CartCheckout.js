import React, { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";
import "./CartCheckout.css";

const CartCheckout = ({ item }) => {
  const { name, imageURL, description, price, quantity } = item;

  const { addItemToCart, removeItemToCart } = useContext(CartContext);
  return (
    <>
      <div className="cart-items-container">
        <div className="cart-item">
          <img src={imageURL} alt={description} className="cart-img" />
          <div className="item-details">
            <h3>{name}</h3>
            <div className="item-detail">
              <span onClick={() => addItemToCart(item)}>
                <ion-icon name="add-circle"></ion-icon>
              </span>
              <span>{quantity}</span>
              <span onClick={() => removeItemToCart(item)}>
                <ion-icon name="remove-circle"></ion-icon>
              </span>
              <span>&#10005;</span>
              <span>Rs.{price}</span>
            </div>
          </div>
          <div className="item-total">Rs. {quantity * price}</div>
        </div>
      </div>
    </>
  );
};

export default CartCheckout;
