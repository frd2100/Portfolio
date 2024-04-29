import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

function Hero() {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>I'm Federico Parrinello, Full Stack developer Based in Toronto, Canada</h1>
      <p></p>
    </div>
  );
}

export default Hero;
