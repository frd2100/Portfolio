import React, {useState, useRef} from 'react'
import { useMediaQuery } from 'react-responsive';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './NavBar.css'
import ConnectWithMe from '../ConnectWithMe/ConnectWithMe.jsx'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const NavBar = () => {
 const [menu, setMenu] = useState("home");
 const isDesktop = useMediaQuery({ minWidth: 769 });
 const menuRef = useRef();

 const openMenu = ()=>{
  menuRef.current.style.right="0";
 };
 const closeMenu = ()=>{
  menuRef.current.style.right="-350px";
 };

  return (
    <div className= 'navbar'>
        <h1>Federico</h1>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#home'> <p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src={underline} alt=''/>:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={()=> setMenu("about")}>About Me</p></AnchorLink>{menu==="about"? <img src={underline} alt=''/>:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'> <p onClick={()=> setMenu("services")}>Portfolio</p></AnchorLink>{menu==="services"? <img src={underline} alt=''/>:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#photography'><p onClick={()=> setMenu("photography")}>Photography</p></AnchorLink> {menu===""? <img src={underline} alt=''/>:<></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=> setMenu("contact")}>Contact</p> </AnchorLink>{menu==="contact"? <img src={underline} alt=''/>:<></> }</li>
        </ul>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>{isDesktop && <ConnectWithMe label='Connect with Me'/>}</AnchorLink>
    </div>
  )
}

export default NavBar