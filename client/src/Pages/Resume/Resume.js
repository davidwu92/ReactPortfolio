import React from 'react'
import resume from './Resume.png'
import resumepdf from './Resume2020.pdf'
import './resume.css'

const Resume = () => {
  return(
    <>
      {/* <Navbar/> */}
      <div className="container" id="resumeContainer">
        <div id="pageTitle" className = "row center">
          <h1>Resume</h1>
          <a 
            // href={process.env.PUBLIC_URL + '/Resume2020.pdf'}
            href={resumepdf}
            target="_blank"
            className="black btn-small right">Download</a>
        </div>
        <div className="row" id="resumeDiv">
          <img id="resumeImg" src={resume} alt="David Wu's Resume"></img>
        </div>
      </div>
    </>
  )
}


export default Resume