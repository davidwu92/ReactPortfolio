import React from 'react'
import developer from './developer.png'
import gears from './gears.png'
import responsive from './responsive.png'
import adaptable from './adaptable.jpg'
import './about.css'

const About = () => {
  return(
    <>
      <div className="container" id="pageContainer">
        <div id="pageTitle" className = "row center">
          <h2>What I do</h2>
          {/* <h5>(Yes, the cards are clickable.)</h5> */}
        </div>
        {/* MARKETABLE SKILLS ROW */}
        <div className="row">
          <div className="col s12 m3">
              {/* INNOVATOR */}
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={developer}/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4 center">Innovative Web Apps.<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Web App Innovator<i className="material-icons right">close</i></span>
                  <p>In addition to being the focus of my career path, Web Development is one of many creative outlets for myself. The projects in my portfolio display some of my original ideas brought to life through web apps.</p>
                  <p>"Are they even good ideas?" I'll let you be the judge of just how interesting they are; check out LAF and Harmonize, two of my brain-children from my days at UCI's coding bootcamp, in my portfolio section.</p>
                </div>
              </div>
          </div>
          <div className="col s12 m3">
              {/* JAVASCRIPT DEVELOPER */}
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={gears}/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4 center">Javascript Developer.<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">JS Developer<i className="material-icons right">close</i></span>
                  <p>I fell in love with coding as soon as I was introduced to Javascript. The skills practiced during my days as a UCI Physics undergrad translated fluidly as I developed mastery of JS functions, methods, and problem-solving tactics.</p>
                  <p>I write JS code with great attention to detail, with transparent, clean organizational structures, and with persistent problem-solving intent.</p>
                </div>
              </div>
          </div>
          <div className="col s12 m3">
              {/* RESPONSIVE FRONT-END */}
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={responsive}/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4 center">Responsive Web Design.<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Responsive Web Design<i className="material-icons right">close</i></span>
                  <p>I am cool, confident, and comfortable writing functioning code in the back end. The same is true for coding the front end.</p>
                  <p>My web apps are responsive, designed to be viewable from any screen.</p>
                </div>
              </div>
          </div>
          <div className="col s12 m3">
                {/* PEOPLE-PERSON */}
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={adaptable}/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4 center">Adaptable Learner.<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Responsive Web Design<i className="material-icons right">close</i></span>
                  <p>I am cool, confident, and comfortable writing functioning code in the back end. The same is true for coding the front end.</p>
                  <p>My web apps are responsive, designed to be viewable from any screen.</p>
                </div>
              </div>
          </div>
        </div>
        <div className="row">

        </div>
      </div>
    </>
  )
}

export default About