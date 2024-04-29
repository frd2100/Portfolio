import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

function Hero() {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1><span>I'm Federico Parrinello,</span> Full Stack developer Based in Toronto, Canada</h1>
      <p>Originally from Italy, I bring three years of comprehensive experience as a Full Stack Developer, specializing in both front and back-end technologies.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
      </div>
    </div>
  );
}

export default Hero;
