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
          <h6>Drag left or right to peruse my work. Click on the screenshot for more info.</h6>
        </div>
        {/* CAROUSEL */}
        <div class="carousel carousel-slider" onChange={onSlide}>
          {/* <div class="carousel-fixed-item center">
            <a class="btn waves-effect white grey-text darken-text-2"></a>
          </div> */}

          <div class="carousel-item" id="item1" href="#one!">
            <div className="card" id="card">
              <div id="pCardImage" className="card-image">
                  <img  alt="Harmonize Screenshot" className="activator" src={harmonize}/>
                  <i className="material-icons activator right" id="makeOpaque">more_vert</i>
              </div>
              <div className="card-reveal" id="makeOpaque">
                <span className="card-title grey-text text-darken-4" id="cardRevealTitle"><h5>Harmonize</h5><i className="material-icons right">close</i></span>
                <h6 id="carouselText">
                  Harmonize is a networking application, not unlike Facebook or LinkedIn, specialized for musicians such that users can...
                  <li>consolidate recordings/performances into their profiles as a display of talent.</li>
                  <li>add/remove instruments/skills tags, as well as search for other users by these tags.</li>
                  <li>create/edit/remove postings for upcoming gig opportunities.</li>
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://harmonizers.herokuapp.com/" target="_blank">
                    Visit Harmonize
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div class="carousel-item" id="item2" href="#two!">
            <div className="card" id="card">
              <div id="pCardImage" className="card-image">
                  <img  alt="Harmonize Screenshot" className="activator" src={laf}/>
                  <i className="material-icons activator right" id="makeOpaque">more_vert</i>
              </div>
              <div className="card-reveal" id="makeOpaque">
                <span className="card-title grey-text text-darken-4" id="cardRevealTitle"><h5>Lost And Found</h5><i className="material-icons right">close</i></span>
                <h6 id="carouselText">
                  LAF is a thing
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://the-laf-app.herokuapp.com/" target="_blank">
                    Visit LAF
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div class="carousel-item" id="item3" href="#three!">
            <div className="card" id="card">
              <div id="pCardImage" className="card-image">
                  <img  alt="Harmonize Screenshot" className="activator" src={reactScraper}/>
                  <i className="material-icons activator right" id="makeOpaque">more_vert</i>
              </div>
              <div className="card-reveal" id="makeOpaque">
                <span className="card-title grey-text text-darken-4" id="cardRevealTitle"><h5>Mongo Scraper</h5><i className="material-icons right">close</i></span>
                <h6 id="carouselText">
                  reactScraper is a thing
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://lit-lake-23677.herokuapp.com/" target="_blank">
                    Visit Mongo Scraper
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div class="carousel-item" id="item4" href="#four!">
            <div className="card" id="card">
              <div id="pCardImage" className="card-image">
                  <img  alt="Harmonize Screenshot" className="activator" src={crystalCollector}/>
                  <i className="material-icons activator right" id="makeOpaque">more_vert</i>
              </div>
              <div className="card-reveal" id="makeOpaque">
                <span className="card-title grey-text text-darken-4" id="cardRevealTitle"><h5>Crystal Collector</h5><i className="material-icons right">close</i></span>
                <h6 id="carouselText">
                  crystalCollector is a thing
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://davidwu92.github.io/Crystal-Collector-Math/" target="_blank">
                    Visit Crystal Collector
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div class="carousel-item" id="item5" href="#five!">
            <div className="card" id="card">
              <div id="pCardImage" className="card-image">
                  <img  alt="Harmonize Screenshot" className="activator" src={trainSimulator}/>
                  <i className="material-icons activator right" id="makeOpaque">more_vert</i>
              </div>
              <div className="card-reveal" id="makeOpaque">
                <span className="card-title grey-text text-darken-4" id="cardRevealTitle"><h5>Train Simulator</h5><i className="material-icons right">close</i></span>
                <h6 id="carouselText">
                  trainSimulator is a thing
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://davidwu92.github.io/TrainSimulator/" target="_blank">
                    Visit Train Simulator
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div class="carousel-item" id="item6" href="#six!">
            <div className="card" id="card">
              <div id="pCardImage" className="card-image">
                  <img  alt="Harmonize Screenshot" className="activator" src={triviaGame}/>
                  <i className="material-icons activator right" id="makeOpaque">more_vert</i>
              </div>
              <div className="card-reveal" id="makeOpaque">
                <span className="card-title grey-text text-darken-4" id="cardRevealTitle"><h5>Zelda Trivia Game</h5><i className="material-icons right">close</i></span>
                <h6 id="carouselText">
                  triviaGame is a thing
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://davidwu92.github.io/TriviaGame/" target="_blank">
                    Visit Zelda Trivia
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div class="carousel-item" id="item7" href="#seven!">
            <div className="card" id="card">
              <div id="pCardImage" className="card-image">
                  <img  alt="Harmonize Screenshot" className="activator" src={animeGif}/>
                  <i className="material-icons activator right" id="makeOpaque">more_vert</i>
              </div>
              <div className="card-reveal" id="makeOpaque">
                <span className="card-title grey-text text-darken-4" id="cardRevealTitle"><h5>Anime Gif Finder</h5><i className="material-icons right">close</i></span>
                <h6 id="carouselText">
                  animeGif is a thing
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://davidwu92.github.io/TriviaGame/" target="_blank">
                    Visit Gif Finder
                  </a>
                </h5>
              </div>
            </div>  
          </div>

        </div>
      </div> {/* container end */}
    </>
  )
}
export default Portfolio