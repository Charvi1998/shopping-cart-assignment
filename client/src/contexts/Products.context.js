import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const updateProduct = async () => {
      let productData = await fetch("http://localhost:5000/products");
      let parsedProduct = await productData.json();
      setProducts(parsedProduct);
    };
    updateProduct();
  }, []);

  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
