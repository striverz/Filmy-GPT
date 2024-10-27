import React from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"


const Header = () => {
  return (
    <div className="header">
        <nav>
            <img src={logo} alt="logo" className="logo"></img>
        </nav>
        
    </div>
  )
}

export default Header