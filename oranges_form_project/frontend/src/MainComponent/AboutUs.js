import React from "react";
import "./styles/AboutUs.css";
import aboutOrangesImg from "../assets/images/about_oranges.jpg";

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Orange Forms</h1>
      <p>
        Welcome to Orange Forms! We celebrate the flavours of India by bringing
        you the freshest, juiciest oranges directly from trusted Indian farmers.
        Whether it's sweet Navel oranges from Nagpur or juicy Mandarins from
        Coorg, we make sure every orange is packed with nutrition and taste.
      </p>
      <p>
        Our journey started with a simple goal: make India’s finest oranges
        accessible to everyone—delivered to your doorstep, fresh from the
        orchard. We work closely with local growers in Maharashtra, Andhra
        Pradesh, and the North-East to get you the best fruit of the season.
      </p>
      <p>
        Enjoy healthy snacking for your family: oranges perfect for tiffin
        boxes, daily breakfast juice, or even a quick office break. We are
        committed to top quality, affordable prices, and complete customer
        happiness.
      </p>
      <p>
        Thank you for supporting Indian farmers and choosing Orange Forms. Let’s
        build healthy habits, together!
      </p>
      <img
        src={aboutOrangesImg}
        alt="Fresh Indian Oranges"
        className="about-us-image"
      />
    </div>
  );
}

export default AboutUs;
