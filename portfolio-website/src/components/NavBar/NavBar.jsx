import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg'
import ConnectWithMe from '../ConnectWithMe/ConnectWithMe.jsx'

const NavBar = () => {
  return (
    <div className= 'navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Photography</li>
            <li>Contact</li>
        </ul>
        <ConnectWithMe label='Connect with Me'/>
    </div>
  )
}

export default NavBar