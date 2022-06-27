import { useContext } from "react";
import { ReactComponent as CartLogo } from "../../assets/CartLogo.svg";
import "./CartIcon.css";
import { CartContext } from "../../contexts/Cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <CartLogo className="shopping-logo" />
      <span className="item-count">{cartCount} items</span>
    </div>
  );
};

export default CartIcon;
