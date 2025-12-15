import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Checkout.css";

function Checkout() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Submitting your order...");

    const formData = new FormData(event.target);
    formData.append("access_key", "a1210e8e-0262-4d1b-bc44-321143086015"); //Web3Forms key
    formData.append("subject", "New Orange Forms Order");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setLoading(false);
    if (data.success) {
      setOrderPlaced(true);
      setResult("");
      event.target.reset();
    } else {
      setResult("Sorry, something went wrong. Please try again.");
    }
  };

  if (orderPlaced) {
    return (
      <div className="checkout-container">
        <h1 style={{ color: "green" }}>Order Placed Successfully!</h1>
        <p style={{ fontSize: "1.2em", margin: "24px 0" }}>
          Thank you for shopping with Orange Forms.
          <br />
          We have received your order and will contact you soon for confirmation
          and delivery details.
        </p>
        <p>
          <Link to="/" className="checkout-button">
            Back to Home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form className="checkout-form-main" onSubmit={onSubmit}>
        <div className="checkout-section">
          <h2>Shipping Information</h2>
          <div className="checkout-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="Full Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="Address" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="City" required />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Pin Code</label>
              <input type="text" id="zipCode" name="Pin Code" required />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="Country"
                value="India"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Mobile Number</label>
              <input
                type="tel"
                id="phone"
                name="Mobile Number"
                pattern="[0-9]{10}"
                maxLength={10}
                required
                placeholder="10 digit mobile number"
              />
            </div>
          </div>
        </div>

        <div className="checkout-section">
          <h2>Payment Method</h2>
          <div style={{ marginTop: "12px", marginBottom: "12px" }}>
            <label>
              <input type="radio" name="payment" value="cod" checked readOnly />{" "}
              Cash on Delivery (COD)
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="payment"
                value="upi"
                disabled
                style={{ cursor: "not-allowed" }}
              />{" "}
              UPI&nbsp;{" "}
              <span style={{ color: "#999", fontSize: "0.95em" }}>
                (UPI will be available soon!)
              </span>
            </label>
          </div>
        </div>

        <div className="checkout-order-summary">
          <button
            className="place-order-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
        {result && (
          <div
            style={{
              marginTop: "16px",
              color: result.startsWith("Sorry") ? "red" : "green",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            {result}
          </div>
        )}
      </form>
    </div>
  );
}

export default Checkout;
