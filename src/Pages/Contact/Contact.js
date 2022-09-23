import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="section__contact">
      <div className="section-hero contact-hero">
        <div className="hero-text-container">
          <h2 className="hero-title">CONTACT</h2>
          <p className="hero-subtitle">Get in touch with us</p>
        </div>
      </div>

      <div className="contact__container">
        <div className="map__container">
          <iframe
            className="map-styling"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20148.174476554355!2d4.3477615499999995!3d50.8585388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2sbe!4v1657792315944!5m2!1sen!2sbe"
            title="map"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="form__container">
          <input
            className="input__field"
            type="text"
            name="name"
            placeholder="Full Name"
          />

          <input
            className="input__field"
            type="phone"
            name="name"
            placeholder="Phone Number"
          />

          <input
            className="input__field"
            type="email"
            name="name"
            placeholder="Email Address"
          />

          <textarea
            className="input__field"
            type="textArea"
            name="name"
            placeholder="Message"
          />

          <input className="btn__send" type="submit" value="Send" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
