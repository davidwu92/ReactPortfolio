import React from 'react'
import './home.css'

const Home = () => {
  return(
    <>
      <div className="container" id="homeContainer">
        <div id="whiteSpace">
          {/* Space */}
        </div>
        <div className="row">
          <h2 className="center">Hello.</h2>
          <h2 className="center">My name is David Wu.</h2>
          <h4 className="center">I am a web developer.</h4>
        </div>
      </div>
    </>
  )
}

export default Home