import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Portfolio from './Pages/Portfolio'

function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>

          <Route exact path="/about">
            <Navbar />
            <About />
          </Route>

          <Route exact path="/portfolio">
            <Navbar />
            <Portfolio />
          </Route>

          <Route exact path="/resume">
            <Navbar />
            <Resume />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
