import React from 'react';
import './Footer.css';
import footer_logo from "../../assets/footer_logo.svg";
import ConnectWithMe from '../ConnectWithMe/ConnectWithMe.jsx'


const Footer = () => {
  return (
<div className="footer">
    <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>Originally from Sicily (Italy), I bring three years of comprehensive experience as a Full Stack Developer, 
                specializing in both front and back-end technologies.</p>
        </div>
        <div className="footer-top-right">
             <div className="footer-email-input">
                <img src="" alt="" />
                <input type="email" />
            </div>
            <ConnectWithMe label='Subscribe'/>
        </div>
    </div>
    <hr/>
    <div className="footer-bottom">
        <div className="footer-bottom-left">© 2024 Federico Parrinello. All Rights Reserved </div>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
    </div>
</div>  )
}

export default Footer