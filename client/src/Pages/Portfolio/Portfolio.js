import React, {useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import M from "materialize-css";
import './portfolio.css'
import harmonize from './Harmonize.png'
import animeGif from './AnimeGifFinder.png'
import crystalCollector from './CrystalCollector.png'
import laf from './LAF.png'
import trainSimulator from './TrainSimulator.png'
import triviaGame from './TriviaGame.png'
import reactScraper from './ReactScraper.png'

const Portfolio =()=>{


  // MAKE IMAGES PNG'S INSTEAD OF JPG

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
          <h6>Click on the screenshot for more info. Drag left or right to peruse my work.</h6>
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
              </div>
              <div className="card-reveal" id="portfolioCardReveal">
                <span className="card-title grey-text text-darken-4"><h5 id="profileCardRevealTitle">Harmonize<i className="material-icons right">close</i></h5></span>
                <h6 id="carouselText">
                  My idea for this app was to create an online community for both amateur and professional musicians.
                  I and two fellow UCI Coding Bootcamp students turned Harmonize into an ambitious networking application for musicians, allowing users to...
                  <li>display recordings and performances into their public profile.</li>
                  <li>add/remove instruments/skills tags and search for other users by these tags.</li>
                  <li>create, edit, and remove postings for gig opportunities.</li>
                  As a long-time pianist, coding this app became a huge passion project. I've put well over a hundred hours into this project alone, and I am responsible for front- and back-end development of the Search, Register, Gig Posting, and edit Profile features.
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
              </div>
              <div className="card-reveal" id="portfolioCardReveal">
                <span className="card-title grey-text text-darken-4"><h5 id="profileCardRevealTitle">Lost And Found<i className="material-icons right">close</i></h5></span>
                <h6 id="carouselText">
                  LAF is a full-stack Express-Sequelize app designed to digitize lost and found offices in any densely-populated settings and events.
                  I was the SCRUM master and repository owner, and I was responsible for much of the back end code: posting "found" items, building the database, and adding event settings.
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
              </div>
              <div className="card-reveal" id="portfolioCardReveal">
                <span className="card-title grey-text text-darken-4"><h5 id="profileCardRevealTitle">React Books Scraper<i className="material-icons right">close</i></h5></span>
                <h6 id="carouselText">
                  React Books is a quick application I wrote that scrapes information from Google Books that match the keywords searched. 
                  It was my first full-stack MERN (Mongo, react, express, node) application, written with plenty of UI/UX "don't"s but fully functional nonetheless.
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://lit-lake-23677.herokuapp.com/" target="_blank">
                    Visit React Scraper
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div class="carousel-item" id="item4" href="#four!">
            <div className="card" id="card">
              <div id="pCardImage" className="card-image">
                  <img  alt="Harmonize Screenshot" className="activator" src={crystalCollector}/>
              </div>
              <div className="card-reveal" id="portfolioCardReveal">
                <span className="card-title grey-text text-darken-4"><h5 id="profileCardRevealTitle">Crystal Collector<i className="material-icons right">close</i></h5></span>
                <h6 id="carouselText">
                  This simple math game was one of the first applications I've ever coded back in September of 2019 (other than some guessing games like Hangman and a Psychic Game).
                  It was a fun logic exercise that used HTML, CSS, and Javascript to create a front-end web app.
                  There was once a time when I was very proud of this project! I've grown much since then.
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
              </div>
              <div className="card-reveal" id="portfolioCardReveal">
                <span className="card-title grey-text text-darken-4"><h5 id="profileCardRevealTitle">Train Simulator<i className="material-icons right">close</i></h5></span>
                <h6 id="carouselText">
                  The Train Simulator is a front-end web application that simulates departures and arrivals at a hypothetical train station.
                  The application uses axios requests and firebase collections to keep track of train times.
                  I was especially proud of algebra-heavy code I wrote to perform calculations involving time.
                  At least I was, until I learned that Moment.JS existed.
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
              </div>
              <div className="card-reveal" id="portfolioCardReveal">
                <span className="card-title grey-text text-darken-4"><h5 id="profileCardRevealTitle">Zelda Trivia Game<i className="material-icons right">close</i></h5></span>
                <h6 id="carouselText">
                  The Zelda Trivia Game is a front-end app I built one weekend from HTML, CSS and Javascript.
                  While it isn't the smoothest JS logic or the prettiest CSS I've ever written, Zelda Trivia is one of many early projects I coded that show honest growth and provide snapshots of my early Javascript/DOM manipulation skills.
                  In retrospect, the app is a pretty good effort for the five week mark!
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
              </div>
              <div className="card-reveal" id="portfolioCardReveal">
                <span className="card-title grey-text text-darken-4"><h5 id="profileCardRevealTitle">Anime Gif Finder<i className="material-icons right">close</i></h5></span>
                <h6 id="carouselText">
                  The Anime Gif Finder is a basic front-end app that uses HTML, CSS, and Javascript to perform axios requests to the GIPHY API and return anime-themed GIFs.
                  The user can search for different tags (anime titles, characters, or really any other string) to add to the pre-selected tags and find more GIFs.
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://davidwu92.github.io/GIF-APIs/" target="_blank">
                    Visit Gif Finder
                  </a>
                </h5>
              </div>
            </div>  
          </div>

          <div class="carousel-item" id="item8" href="#eight!">
            <div className="card" id="card">
              <div id="pCardImage" className="card-image">
                  <img  alt="Harmonize Screenshot" className="activator" src={animeGif}/>
              </div>
              <div className="card-reveal" id="portfolioCardReveal">
                <span className="card-title grey-text text-darken-4"><h5 id="profileCardRevealTitle">Anime Gif Finder<i className="material-icons right">close</i></h5></span>
                <h6 id="carouselText">
                  The Anime Gif Finder is a basic front-end app that uses HTML, CSS, and Javascript to perform axios requests to the GIPHY API and return anime-themed GIFs.
                  The user can search for different tags (anime titles, characters, or really any other string) to add to the pre-selected tags and find more GIFs.
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black" href="https://davidwu92.github.io/GIF-APIs/" target="_blank">
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