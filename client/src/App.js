import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route
} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Portfolio from './Pages/Portfolio'
// import Scrollspy from 'react-scrollspy'
import './app.css'

function App() {
  return (
    <>
      <Router>
        <div>
        {/* <Navbar/> */}
          <section id="home">
            <Navbar/>
            <Home/>
          </section>
          <section id="about">
            <Navbar/>
            <About />
          </section>
          <section id="portfolio">
            <Navbar/>
            <Portfolio />
          </section>
          <section id="resume">
            <Navbar/>
            <Resume />
          </section>
        </div>
      </Router>
    </>
  );
}

export default App;
