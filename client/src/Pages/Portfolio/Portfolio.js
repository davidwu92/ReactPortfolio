import React, {useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import M from "materialize-css";
import './portfolio.css'
import adaptable from '../About/adaptable.jpg'

const Portfolio =()=>{

  useEffect(()=>{
    // Carousel Options
    let elem = document.querySelector('.carousel');
    let instance = M.Carousel.init(elem, 
      { indicators: true, padding: 100 }
    );
  }, [])
  
  return(
    <>
      <Navbar/>
      <div className="container" id="pageContainer">
        <div id="pageTitle" className = "row center">
          <h1>Portfolio</h1>
        </div>
        {/* CAROUSEL */}
        <div class="carousel">
          <a class="carousel-item" href="#one!">
            <img src={adaptable}/>
          </a>
          <a class="carousel-item" href="#two!">
            <img src={adaptable}/>
          </a>
          <a class="carousel-item" href="#three!">
            <img src={adaptable}/>
          </a>
          <a class="carousel-item" href="#four!"><img src={adaptable}/></a>
          <a class="carousel-item" href="#five!"><img src={adaptable}/></a>
        </div>
      </div> {/* container end */}
    </>
  )
}
export default Portfolio