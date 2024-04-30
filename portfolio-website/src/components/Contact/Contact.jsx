import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/call_icon.svg";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>blabla bla bla blabla bla bla blabla bla bla blabla bla bla </p>
          <div className="contact-detail">
            <img src={mail_icon} alt="" />
            <p>prova@prova.com</p>
          </div>
          <div className="contact-detail">
            <img src={call_icon} alt="" />
            <p>+1 000 0000-000</p>
          </div>
          <div className="contact-detail">
            <img src={location_icon} alt="" />
            <p>ON, Canada</p>
          </div>
        </div>
        <div className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholer="Enter your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholer="Enter your Email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholer="Enter your Message"
          ></textarea>
          <button className="contact-submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
