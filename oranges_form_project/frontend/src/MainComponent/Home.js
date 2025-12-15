import React, { useEffect, useState } from "react";
import navelOrangeImg from "../assets/images/orange_navel.jpg";
import valenciaOrangeImg from "../assets/images/orange_valencia.jpg";
import "./styles/Home.css";

function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) setUsername(user);
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Welcome to Orange Forms</h1>
        <p>Your one-stop shop for the freshest and juiciest oranges!</p>
        {/* Use HTML <a> for standard navigation */}
        <a href="/products" className="shop-now-button">
          Shop Now
        </a>
        {username && (
          <div style={{ marginTop: 24, fontSize: "1.1em" }}>
            Welcome back, <b>{username}</b>!
          </div>
        )}
      </section>

      <section className="featured-products">
        <h2>Our Popular Oranges</h2>
        <div className="product-grid">
          <div className="featured-product-card">
            <a
              href="/product/1"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>Navel Oranges</h3>
              <img src={navelOrangeImg} alt="Navel Orange" />
              <p>Sweet and easy to peel.</p>
            </a>
          </div>
          <div className="featured-product-card">
            <a
              href="/product/2"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>Valencia Oranges</h3>
              <img src={valenciaOrangeImg} alt="Valencia Orange" />
              <p>Great for juicing.</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
