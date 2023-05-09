import React, { useState } from 'react'
import { menuItems } from './NavbarItem'
import './navbarstyle.css'
import {Link} from 'react-router-dom'

function Navbar() {

  const[menuIcon,setMenuIcon] = useState(true)
  const handleMenuIcon = ()=>{
    setMenuIcon(!menuIcon)
  }
  return (
    <nav className='navbar'>
        <p className='nav-logo'>TRIPSY</p>
        <div className="menuicon">
          <i className={menuIcon?"fas fa-bars":"fas fa-times"} onClick={handleMenuIcon}></i>
        </div>
        <ul className={menuIcon?"nav-items":"nav-items active"}>
          {
            menuItems.map((items,i)=>(
              <li key={i} ><Link to={items.url} className={items.cname}><i className={items.icon}></i>{items.name}</Link></li>
            ))
          }
          <button>Sign Up</button>
        </ul>
      
    </nav>
  )
}

export default Navbar
