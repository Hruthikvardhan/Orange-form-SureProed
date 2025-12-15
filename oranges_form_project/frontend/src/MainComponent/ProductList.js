import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./styles/ProductList.css";

import navelOrangeImg from "../assets/images/orange_navel.jpg";
import valenciaOrangeImg from "../assets/images/orange_valencia.jpg";
import bloodOrangeImg from "../assets/images/orange_blood.jpg";
import caracaraOrangeImg from "../assets/images/orange_caracara.jpg";
import mandarinOrangeImg from "../assets/images/orange_mandarin.jpg";

const products = [
  {
    id: 1,
    name: "Navel Oranges",
    description:
      "Fresh, sweet, seedless, and very easy to peel. Great for snacks and kids’ tiffin boxes.",
    price: 299,
    imageUrl: navelOrangeImg,
  },
  {
    id: 2,
    name: "Valencia Oranges",
    description:
      "Juicy and tangy. Perfect for fresh homemade orange juice, salads, or eating on hot days.",
    price: 249,
    imageUrl: valenciaOrangeImg,
  },
  {
    id: 3,
    name: "Blood Oranges",
    description:
      "Vibrant red-fleshed oranges full of flavour and loaded with antioxidants. Add colour to any fruit platter.",
    price: 340,
    imageUrl: bloodOrangeImg,
  },
  {
    id: 4,
    name: "Cara Cara Oranges",
    description:
      "Naturally sweet with a hint of berry flavour. Superb for juices and desserts.",
    price: 330,
    imageUrl: caracaraOrangeImg,
  },
  {
    id: 5,
    name: "Mandarin Oranges",
    description:
      "Small, super easy to peel, and very sweet. Perfect for daily school snacks or office breaks.",
    price: 220,
    imageUrl: mandarinOrangeImg,
  },
];

function ProductList() {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });

  useEffect(() => {
    // Sync cart if it changes in other tabs/windows
    const syncCart = () => {
      setCartItems(JSON.parse(localStorage.getItem("cart") || "[]"));
    };
    window.addEventListener("storage", syncCart);
    return () => window.removeEventListener("storage", syncCart);
  }, []);

  const addToCart = (product) => {
    const existingIndex = cartItems.findIndex((item) => item.id === product.id);
    let updatedCart;
    if (existingIndex !== -1) {
      // Exists, increase qty
      updatedCart = cartItems.map((item, idx) =>
        idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // Add new product
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-list-container">
      <h1>Our Orange Varieties</h1>
      <div className="product-grid">
        {products.map((prod) => (
          <ProductCard key={prod.id} product={prod} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
