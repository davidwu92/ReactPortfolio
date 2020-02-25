import React from 'react'
import developer from './developer.png'
import gears from './gears.png'
import responsive from './responsive.png'
import adaptable from './adaptable.jpg'
import './about.css'
import Navbar from '../../Components/Navbar'

const About = () => {
  return(
    <>
      {/* <Navbar/> */}
      <div className="container" id="aboutContainer">
        <div id="pageTitle" className = "row center">
          <h2>About me</h2>
          <h6>I used to teach math and physics at a one-to-one school specializing in students with extremely diverse IEP's. </h6>
          <h6>Then I went back to school and transformed into a full-stack web developer with a drastically-expanded skillset. </h6>
        </div>
        {/* MARKETABLE SKILLS ROW */}
        <div className="row">
          <div className="col s12 m6 l3">
              {/* INNOVATOR */}
              <div className="card" id="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img alt="Web Applications" id="aboutImg" className="activator" src={developer}/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4 center" id="cardTitle">Innovative Web Apps.<i className="material-icons right" id="threeDots">more_vert</i></span>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4" id="aboutCardRevealTitle">Web App Innovator<i className="material-icons right">close</i></span>
                  <p>In addition to being the focus of my career path, Web Development is one of many creative outlets for myself. The projects in my portfolio display some of my original ideas brought to life through web apps.</p>
                  <p>I'll let you be the judge of just how interesting those ideas are; check out LAF and Harmonize, two of my brain-children from my days at UCI's coding bootcamp, in my portfolio section.</p>
                </div>
              </div>
          </div>
          <div className="col s12 m6 l3">
              {/* JAVASCRIPT DEVELOPER */}
              <div className="card" id="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img alt="Gears" id="aboutImg" className="activator" src={gears}/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4 center" id="cardTitle">Javascript Developer.<i className="material-icons right" id="threeDots">more_vert</i></span>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4" id="aboutCardRevealTitle">JS Developer<i className="material-icons right">close</i></span>
                  <p>I fell in love with coding as soon as I was introduced to Javascript. The skills practiced during my days as a UCI Physics undergrad translated fluidly as I developed mastery of JS functions, methods, and problem-solving tactics.</p>
                  <p>I write JS code with great attention to detail, with transparent, clean organizational structures, and with persistent problem-solving intent.</p>
                </div>
              </div>
          </div>
          <div className="col s12 m6 l3">
              {/* RESPONSIVE FRONT-END */}
              <div className="card" id="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img alt="Mobile Responsive" id="aboutImg" className="activator" src={responsive}/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4 center" id="cardTitle">Responsive Designs.<i className="material-icons right" id="threeDots">more_vert</i></span>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4" id="aboutCardRevealTitle">Responsive Web Design<i className="material-icons right">close</i></span>
                  <p>I am cool, confident, and comfortable writing functioning code in the back end. The same is true for working with UI/UX elements in the front end.</p>
                  <p>My full-stack web apps are responsive, designed to be viewed from any device.</p>
                </div>
              </div>
          </div>
          <div className="col s12 m6 l3">
                {/* PEOPLE-PERSON */}
              <div className="card" id="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img alt="Dinosaurs" id="aboutImg" className="activator" src={adaptable}/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4 center" id="cardTitle">Adaptable Learner.<i className="material-icons right" id="threeDots">more_vert</i></span>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4" id="aboutCardRevealTitle">Adaptable Learner<i className="material-icons right">close</i></span>
                  <p>
                    {/* We as developers must learn to adapt to intermittent shifts in tech trends and industry standards.  */}
                    I'm no stranger to navigating steep learning curves, nor am I to diving into unfamiliar technologies.</p>
                  <p>All the skills needed to craft my portfolio projects (and this site) were developed swiftly over the course of six months. I was always been a bit of a masochist when it came to wrestling with higher level math and physics class content—new coding concepts have proven to be no different.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About