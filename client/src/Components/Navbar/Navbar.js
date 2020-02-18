import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyle.css'

const Navbar = () => {
  return (
    <nav id="bottomNav" className="nav-extended black">
      <div className="nav-wrapper" id="navWrapper">
        <div className="brand-logo" id="nav"><Link to="/">David Wu</Link></div>
      </div>
      <div id="navContent" className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab left"><Link to="/"><i className="fas fa-home"></i></Link></li>
          <li className="tab"><Link to="/about">About</Link></li>
          <li className="tab"><Link to="/portfolio">Portfolio</Link></li>
          <li className="tab"><Link to="/resume">Resume</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar