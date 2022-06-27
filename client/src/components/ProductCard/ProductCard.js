import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";
import "../Products/Products.css";

const ProductCard = ({ product }) => {
  // console.log({ product });
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card" key={product.id}>
      <h2 className="product-heading">{product.name}</h2>
      <img
        src={product.imageURL}
        alt={product.description}
        className="product-img"
      />
      <p className="product-desc">{product.description}</p>
      <div className="side-view side-view-content">
        <div className="product-footer">
          <p className="product-price">MRP Rs.{product.price}</p>
          <button
            className="btn btn-buy-now "
            // onClick={(id) => addItemToCart(product.id)}
            onClick={addProductToCart}
          >
            Buy Now
          </button>
        </div>
        <div className="product-footer-media">
          <button
            className="btn btn-buy-now "
            // onClick={(id) => addItemToCart(product.id)}
            onClick={addProductToCart}
          >
            Buy Now @ MRP Rs.{product.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
