import React, {useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './NavBar.css'
import ConnectWithMe from '../ConnectWithMe/ConnectWithMe.jsx'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'


const NavBar = () => {
 const [menu, setMenu] = useState("home")
  return (
    <div className= 'navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link' href='#home'> <p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src={underline} alt=''/>:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={()=> setMenu("about")}>About Me</p></AnchorLink>{menu==="about"? <img src={underline} alt=''/>:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'> <p onClick={()=> setMenu("services")}>Portfolio</p></AnchorLink>{menu==="services"? <img src={underline} alt=''/>:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#photography'><p onClick={()=> setMenu("photography")}>Photography</p></AnchorLink> {menu===""? <img src={underline} alt=''/>:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=> setMenu("contact")}>Contact</p> </AnchorLink>{menu==="contact"? <img src={underline} alt=''/>:<></> }</li>
        </ul>
        <AnchorLink className='anchor-link' offset={50} href='#contact'><ConnectWithMe label='Connect with Me'/></AnchorLink>
    </div>
  )
}

export default NavBar