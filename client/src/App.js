import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route
} from 'react-router-dom'
import './app.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Portfolio from './Pages/Portfolio'
import StickerBoard from './Components/StickerBoard'


function App() {
  return (
    <>
      <Router>
        <div>
            <Navbar/>
          <section id="home">
            <Home/>
          </section>
          <section id="about">
            <About />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="resume">
            <Resume />
          </section>
        <StickerBoard/>
        </div>
      </Router>
    </>
  );
}

export default App;
