import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import CartCheckout from "../CartCheckout/CartCheckout";
import { ReactComponent as Offer } from "../../assets/Offer.svg";
import { CartContext } from "../../contexts/Cart.context";

const CartPage1 = () => {
  const navigate = useNavigate();
  const { cartItems, cartCount, cartTotal } = useContext(CartContext);
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <section className="main-cart-section">
        {cartItems.length ? (
          <>
            <header className="header-cart">
              <h3>My Cart </h3>
              <span>({cartCount} items)</span>
            </header>
            <Scrollbars>
              {cartItems?.map((item) => {
                return <CartCheckout key={item.id} item={item} />;
              })}

              <div className="offer-container">
                <div className="offer-logo">
                  <Offer />
                </div>
                <span className="offer-text">
                  You won't find it cheaper anywhere
                </span>
              </div>
            </Scrollbars>
            <div className="cart-footer">
              <p className="cart-footer-text">
                Promo code can be applied on payment page
              </p>
              <button className="cart-footer-btn">
                <>Proceed to Checkout</>{" "}
                <span>
                  Rs.{cartTotal}
                  {">"}
                </span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="no-items-in-cart">
              <p>No items in your Cart</p>
              <span>Your favourite items are just a click away</span>
            </div>
            <button className="start-shopping-btn" onClick={handleClick}>
              Start Shopping
            </button>
          </>
        )}
      </section>
    </>
  );
};

export default CartPage1;
