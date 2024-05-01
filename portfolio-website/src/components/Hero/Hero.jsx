import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import ConnectWithMe from '../ConnectWithMe/ConnectWithMe.jsx'


function Hero() {
  return (
    <div id='home' className="hero">
      <img src={profile_img} alt="" />
      <h1><span>I'm Federico Parrinello,</span> Full Stack developer Based in Toronto, Canada</h1>
      <p>Originally from Sicily (Italy), I bring three years of comprehensive experience as a Full Stack Developer, specializing in both front and back-end technologies.</p>
      <div className="hero-action">
      <AnchorLink className='anchor-link' offset={50} href='#contact'><ConnectWithMe label='Connect with Me'/></AnchorLink>
      </div>
    </div>
  );
}

export default Hero;
