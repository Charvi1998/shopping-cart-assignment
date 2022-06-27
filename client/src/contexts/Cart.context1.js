import { createContext, useContext, useReducer } from "react";
import CartPage1 from "../components/CartPage/CartPage1";
import { ProductContext } from "./Products.context";

export const CartContext = createContext();

const Cart = () => {
  const { products } = useContext(ProductContext);
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <CartContext.Provider value={products}>
        <CartPage1 />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
