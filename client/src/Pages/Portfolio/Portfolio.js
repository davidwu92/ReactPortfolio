import React, {useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import M from "materialize-css";
import './portfolio.css'
import harmonize from './Harmonize.jpg'
import animeGif from './AnimeGifFinder.jpg'
import crystalCollector from './CrystalCollector.jpg'
import laf from './LAF.jpg'
import trainSimulator from './TrainSimulator.jpg'
import triviaGame from './TriviaGame.jpg'
import reactScraper from './ReactScraper.jpg'

const Portfolio =()=>{

  useEffect(()=>{
    // Carousel Initialization
    let elem = document.querySelector('.carousel');
    let instance = M.Carousel.init(elem, 
      // OPTIONS
      { indicators: true,
        // Zoom for unselected items
         fullWidth:true,
          }
    );
  }, [])
  const onSlide = (event) =>{
    console.log(event)
  }
  return(
    <>
      <Navbar/>
      <div className="container" id="pageContainer">
        <div id="pageTitle" className = "row center">
          <h1>Portfolio</h1>
          <h6>Here's some of my work.</h6>
        </div>
        {/* CAROUSEL */}
        <div class="carousel carousel-slider" onChange={onSlide}>
          <div class="carousel-fixed-item center">
            {/* <a class="btn waves-effect white grey-text darken-text-2"></a> */}
          </div>
          <div class="carousel-item" id="item1" href="#one!">
            <img id="portfolioImg" alt="Harmonize Screenshot" src={harmonize}/>
            <div className="row">
              <div className="col s12 m12 l12">
                <h4 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://harmonizers.herokuapp.com/" target="_blank">
                    Visit Harmonize
                  </a>
                </h4>
              </div>
              <div className="col s12 m6 l6">
                <h6 id="carouselText">My idea for this app was to create a space for musicians to join. </h6>
              </div>
            </div>              
          </div>

          <div class="carousel-item" id="item2" href="#two!">
            <img id="portfolioImg" alt="LAF Screenshot" src={laf}/>
            <div className="row">
              <div className="col s12 m12 l12">
                <h4 className="left">              
                  <a id="carouselLink" className="white-text btn black" href="https://the-laf-app.herokuapp.com/" target="_blank">
                    Visit LAF
                  </a>
                </h4>
              </div>
              <div className="col s12 m6 l6">
                <h6 id="carouselText">This is Harmonize.</h6>
              </div>
            </div>
          </div>
          <div class="carousel-item" id="item3" href="#three!">
            <img id="portfolioImg" alt="React Scraper Screenshot" src={reactScraper}/>
            <div className="row">
              <div className="col s12 m12 l12">
                <h4 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://lit-lake-23677.herokuapp.com/" target="_blank">
                    Visit Google Books Scraper
                  </a>
                </h4>
              </div>
              <div className="col s12 m6 l6">
                <h6 id="carouselText">This is Harmonize.</h6>
              </div>
            </div>       
          </div>

          <div class="carousel-item" id="item4" href="#four!">
            <img id="portfolioImg" alt="Crystal Collector Screenshot" src={crystalCollector}/>
            <div className="row">
              <div className="col s12 m12 l12">
                <h4 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://davidwu92.github.io/Crystal-Collector-Math/" target="_blank">
                    Visit Crystal Collector
                  </a>
                </h4>
              </div>
              <div className="col s12 m6 l6">
                <h6 id="carouselText">This is Harmonize.</h6>
              </div>
            </div>                   
          </div>

          <div class="carousel-item" id="item5" href="#five!">
            <img id="portfolioImg" alt="Train Simulator Screenshot" src={trainSimulator}/>
            <div className="row">
              <div className="col s12 m12 l12">
                <h4 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://davidwu92.github.io/TrainSimulator/" target="_blank">
                    Visit Train Simulator
                  </a>
                </h4>
              </div>
              <div className="col s12 m6 l6">
                <h6 id="carouselText">This is Harmonize.</h6>
              </div>
            </div>       
          </div>

          <div class="carousel-item" id="item6" href="#six!">
            <img id="portfolioImg" alt="Zelda Trivia Screenshot" src={triviaGame}/>
            <div className="row">
              <div className="col s12 m12 l12">
                <h4 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://davidwu92.github.io/TriviaGame/" target="_blank">
                    Visit Zelda Trivia
                  </a>
                </h4>
              </div>
              <div className="col s12 m6 l6">
                <h6 id="carouselText">This is Harmonize.</h6>
              </div>
            </div> 
          </div>

          <div class="carousel-item" id="item7" href="#seven!">
            <img id="portfolioImg" alt="Anime GIF Finder Screenshot" src={animeGif}/>
            <div className="row">
              <div className="col s12 m12 l12">
                <h4 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://davidwu92.github.io/GIF-APIs/" target="_blank">
                    Visit GIF Finder
                  </a>
                </h4>
              </div>
              <div className="col s12 m6 l6">
                <h6 id="carouselText">This is Harmonize.</h6>
              </div>
            </div> 
          </div>

        </div>
      </div> {/* container end */}
    </>
  )
}
export default Portfolio