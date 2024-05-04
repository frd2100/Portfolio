import React from "react";
import "./Contact.css";
import ConnectWithMe from "../ConnectWithMe/ConnectWithMe.jsx";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log("mandata");
    formData.append("access_key", "641b76c1-8c8b-4608-ac30-febdbb596de5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
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
        <form onSubmit={onSubmit} className="contact-right">
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
          <ConnectWithMe type="submit" label="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
