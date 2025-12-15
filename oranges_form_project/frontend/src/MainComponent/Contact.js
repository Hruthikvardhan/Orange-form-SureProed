import React, { useState } from "react";
import "./styles/Contact.css";

function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending your message...");

    const formData = new FormData(event.target);
    formData.append("access_key", "a1210e8e-0262-4d1b-bc44-321143086015");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(
        "Thank you! We’ve received your message and our team will reply soon."
      );
      event.target.reset();
    } else {
      setResult(
        "Sorry, something went wrong. Please try again or call us directly."
      );
      console.log("Error", data);
    }
    setLoading(false);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Got a question? Have feedback or need some help? Just reach out—our
        Orange Forms team is always happy to help you!
      </p>

      <div className="contact-info">
        <div className="info-item">
          <h3>Email Us</h3>
          <p>
            <a href="mailto:support@orangeforms.com">support@orangeforms.com</a>
            <br />
            <small>(We reply within 1 working day)</small>
          </p>
        </div>
        <div className="info-item">
          <h3>Call Us</h3>
          <p>
            +91 123 456 7890
            <br />
            <small>(Monday–Friday, 9 AM – 6 PM IST)</small>
          </p>
        </div>
        <div className="info-item">
          <h3>Visit Us</h3>
          <p>
            Orange Forms HQ
            <br />
            123, Orange Orchard Lane
            <br />
            Kurnool, Andhra Pradesh – 518002
            <br />
            India
            <br />
            <small>(Do call before visiting!)</small>
          </p>
        </div>
      </div>

      <div className="contact-form-section">
        <h2>Send us a Message</h2>
        <p>
          Fill out the form and our team will get back to you as soon as
          possible.
        </p>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="What is your message about?"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              placeholder="Type your question or feedback here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="submit-message-button"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {result && (
          <div
            style={{
              marginTop: "16px",
              color: result.startsWith("Thank") ? "green" : "red",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
