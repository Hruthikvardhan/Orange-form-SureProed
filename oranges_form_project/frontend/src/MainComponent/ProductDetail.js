import React from "react";
import { useParams } from "react-router-dom";
import "./styles/ProductDetail.css";

import navelOrangeImg from "../assets/images/orange_navel.jpg";
import valenciaOrangeImg from "../assets/images/orange_valencia.jpg";
import bloodOrangeImg from "../assets/images/orange_blood.jpg";
import caracaraOrangeImg from "../assets/images/orange_caracara.jpg";
import mandarinOrangeImg from "../assets/images/orange_mandarin.jpg";

const oranges = [
  {
    id: 1,
    name: "Navel Oranges",
    description:
      "Sweet and seedless. India’s favourite snack orange—easy to peel and packed with Vitamin C.",
    price: 299,
    imageUrl: navelOrangeImg,
    benefits: ["High in Vitamin C", "Easy to peel", "Perfect for all ages"],
    origin: "Maharashtra, India",
  },
  {
    id: 2,
    name: "Valencia Oranges",
    description:
      "Famous for juiciness and bright taste. Enjoy fresh juice at home.",
    price: 249,
    imageUrl: valenciaOrangeImg,
    benefits: [
      "Great for juicing",
      "Naturally refreshing",
      "Juicy and nutritious",
    ],
    origin: "Andhra & Maharashtra",
  },
  {
    id: 3,
    name: "Blood Oranges",
    description:
      "A rare treat! Bright red flesh, sweet and tangy, packed with antioxidants.",
    price: 340,
    imageUrl: bloodOrangeImg,
    benefits: [
      "Rich in antioxidants",
      "Unique flavour",
      "Adds colour to your plate",
    ],
    origin: "Select Indian farms",
  },
  {
    id: 4,
    name: "Cara Cara Oranges",
    description:
      "Low acidity, sweet, with a hint of berries. Great for eating or juices.",
    price: 330,
    imageUrl: caracaraOrangeImg,
    benefits: ["Mild & sweet", "Loaded with vitamins", "Unique taste"],
    origin: "Premium local growers",
  },
  {
    id: 5,
    name: "Mandarin Oranges",
    description: "Tiny, sweet, very easy to peel. Classic for snacks.",
    price: 220,
    imageUrl: mandarinOrangeImg,
    benefits: ["Great for kids", "No mess peeling", "Sweet taste"],
    origin: "North-East India",
  },
];

function ProductDetail() {
  const { id } = useParams();
  const product = oranges.find((p) => p.id === parseInt(id));

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingIdx = cart.findIndex((item) => item.id === product.id);

    if (existingIdx !== -1) {
      cart[existingIdx].quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  if (!product) {
    return <div className="product-detail-not-found">Product not found.</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-image-section">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-detail-image"
        />
      </div>
      <div className="product-info-section">
        <h1>{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <div className="product-price">₹{product.price} / kg</div>

        <div className="product-features">
          <h3>Key Features & Benefits:</h3>
          <ul>
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="product-origin">
          <strong>Origin:</strong> {product.origin}
        </div>
        <button className="add-to-cart-detail-button" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
