import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation";
import HomePage from "./components/HomePage/HomePage";
import Products from "./components/Products/Products";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import CartPage from "./components/CartPage/CartPage";

import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<Products />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
