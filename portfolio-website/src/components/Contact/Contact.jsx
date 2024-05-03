import React from "react";
import "./Contact.css";
import ConnectWithMe from '../ConnectWithMe/ConnectWithMe.jsx'
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

function Contact() {
  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
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
          <input type="text" placeholder="Enter your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your Email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your Message"
          ></textarea>
            <ConnectWithMe label='Submit'/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
