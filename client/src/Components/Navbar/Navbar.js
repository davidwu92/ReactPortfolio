import React from 'react'
// import { Link } from 'react-router-dom'
import './NavbarStyle.css'
import Scrollspy from 'react-scrollspy'

const Navbar = () => {
  return (
    <>
      <div className="navbar-fixed">
        <nav id="bottomNav" className="nav-extended black">
          <div className="nav-wrapper">
            <div className="brand-logo" id="navTitle"><a href="#home">David Wu</a></div>
          </div>
          <div id="navContent" className="nav-content">
            <Scrollspy items={ ['home', 'about', 'portfolio', 'resume'] } currentClassName="is-current">
            <ul className="tabs tabs-transparent">
              <li className="tab left"><a href="#home"><i className="fas fa-home"></i></a></li>
              <li className="tab"><a href="#about">About</a></li>
              <li className="tab"><a href="#portfolio">Portfolio</a></li>
              <li className="tab"><a href="#resume">Resume</a></li>
            </ul>
            </Scrollspy> 
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar