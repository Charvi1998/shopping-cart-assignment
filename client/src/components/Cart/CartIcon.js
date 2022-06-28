import { useContext } from "react";
import { ReactComponent as CartLogo } from "../../assets/CartLogo.svg";
import "./CartIcon.css";
import { CartContext } from "../../contexts/Cart.context";

const CartIcon = ({ openModal }) => {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="cart-icon-container" onClick={openModal}>
      <CartLogo className="shopping-logo" />
      <span className="item-count">{cartCount} items</span>
    </div>
  );
};

export default CartIcon;
