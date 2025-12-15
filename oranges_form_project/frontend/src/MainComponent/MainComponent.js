// C:\Users\hruth\Desktop\sure_trust_projects\oranges_form_project\frontend\src\MainComponent\MainComponent.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import Checkout from "./Checkout";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import "./styles/MainComponent.css";

function MainComponent() {
  return (
    <div className="main-container">
      <Header />
      <main className="content">
        <Routes>
          {/* These routes are relative to the '/*' path in App.js */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default MainComponent;
