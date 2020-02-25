import React, {Component} from 'react'
import Navbar from '../../Components/Navbar'
import resume from './Resume.png'
import './resume.css'

const Resume = () => {
  return(
    <>
      {/* <Navbar/> */}
      <div className="container" id="resumeContainer">
        <div id="pageTitle" className = "row center">
          <h1>Resume</h1>
          <a className="black btn-small right">Download</a>
        </div>
        <div className="row">
          <img id="resumeImg" src={resume} alt="David Wu's Resume"></img>
        </div>
      </div>
    </>
  )
}


export default Resume