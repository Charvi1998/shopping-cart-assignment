import "../Products/Products.css";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Aside from "../Aside/Aside";
import ProductCard from "../ProductCard/ProductCard";
import { useContext } from "react";
import { ProductContext } from "../../contexts/Products.context";

const Products = () => {
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterItem = (id) => {
    const filteredProducts = products.filter((prod) => prod.category === id);
    setFilteredProducts(filteredProducts);
  };

  const handleOptionSelect = (event) => {
    const val = event.target.value;
    const filteredProducts = products.filter((prod) => prod.category === val);
    setFilteredProducts(filteredProducts);
  };

  return (
    <>
      <div className="products-page-container container">
        <Aside
          handleClick={filterItem}
          handleOptionSelect={handleOptionSelect}
        />
        <section className="products-grid">
          {filteredProducts.length
            ? filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Products;
