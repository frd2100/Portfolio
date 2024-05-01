import React, {useState} from 'react'
import './NavBar.css'
import ConnectWithMe from '../ConnectWithMe/ConnectWithMe.jsx'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'


const NavBar = () => {
 const [menu, setmenu] = useState("home")
  return (
    <div className= 'navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li><p>Home</p>{menu==="home"? <img src={underline} alt=''/>:<></> }</li>
            <li><p>About Me</p>{menu==="about"? <img src={underline} alt=''/>:<></> }</li>
            <li><p>Portfolio</p>{menu==="services"? <img src={underline} alt=''/>:<></> }</li>
            <li><p>Photography</p>{menu===""? <img src={underline} alt=''/>:<></> }</li>
            <li><p>Contact</p>{menu==="contact"? <img src={underline} alt=''/>:<></> }</li>
        </ul>
        <ConnectWithMe label='Connect with Me'/>
    </div>
  )
}

export default NavBar