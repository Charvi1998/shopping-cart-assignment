import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./ModalPage.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import CartCheckout from "../CartCheckout/CartCheckout";
import { ReactComponent as Offer } from "../../assets/Offer.svg";
import { CartContext } from "../../contexts/Cart.context";
import CartIcon from "../Cart/CartIcon";

Modal.setAppElement("#root");
const ModalPage = () => {
  const navigate = useNavigate();
  const { cartItems, cartCount, cartTotal } = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleShopping = () => {
    closeModal();
    navigate("/");
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div className="modal">
      <CartIcon openModal={openModal} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          content: {
            position: "absolute",
            top: "2rem",
            padding: "0px",
            borderRadius: "0px",
          },
        }}
      >
        <>
          <section className="main-cart-section">
            <header className="header-cart">
              <div>
                <h3>My Cart </h3>
                <span>({cartCount} items)</span>
              </div>
              <span onClick={closeModal}>
                <ion-icon
                  name="close-outline"
                  className="close-outline"
                ></ion-icon>
              </span>
            </header>
            {cartItems.length ? (
              <>
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
                <button className="btn " onClick={handleShopping}>
                  Start Shopping
                </button>
              </>
            )}
          </section>
        </>
      </Modal>
    </div>
  );
};

export default ModalPage;
