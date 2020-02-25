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
import bamazon from './Bamazon.png'

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
                  <br></br>
                  As a long-time pianist, coding this app became a huge passion project. I've put well over a hundred hours into this project alone, and I am responsible for front- and back-end development of the Search, Register, Gig Posting, and edit Profile features.
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://harmonizers.herokuapp.com/" target="_blank">
                    Visit Harmonize
                  </a>
                  <span>  </span>
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://github.com/davidwu92/Harmonize2" target="_blank">
                    Visit Github Repo
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
                </h6>
                <h6 id="carouselText">
                  I was the SCRUM master and repository owner, and I was responsible for much of the back end code: posting "found" items, building the database, and adding event settings.
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://the-laf-app.herokuapp.com/" target="_blank">
                    Visit LAF
                  </a>
                  <span>  </span>
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://github.com/davidwu92/Project-Two" target="_blank">
                    Visit Github Repo
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
                  React Books is a quick application I wrote that takes the user's search query, then scrapes and saves information from Google Books. 
                </h6>
                <h6 id="carouselText">
                  It was my first full-stack MERN (Mongo, react, express, node) application, written for educational and experimental purposes.
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://lit-lake-23677.herokuapp.com/" target="_blank">
                    Visit React Scraper
                  </a>
                  <span>  </span>
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://github.com/davidwu92/ReactGoogleBooks" target="_blank">
                    Visit Github Repo
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
                  This simple math game was one of the first applications I had ever created back in September of 2019 (other than some guessing games like Hangman and a Psychic Game).
                  It was a fun logic exercise that used HTML, CSS, and Javascript to create a front-end web app.
                </h6>
                <h6 id="carouselText">
                  While the application's styling shows apparent infancy in my mastery of CSS, I was reasonably proud of the JS logic behind this game! I've grown much as a developer since then.
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://davidwu92.github.io/Crystal-Collector-Math/" target="_blank">
                    Visit Crystal Collector
                  </a>
                  <span>  </span>
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://github.com/davidwu92/Crystal-Collector-Math" target="_blank">
                    Visit Github Repo
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
                  The Train Simulator is a front-end web application that simulates departures and arrivals for a hypothetical train station using Axios requests and Firebase collections.
                </h6>
                <h6 id="carouselText">
                  The assignment was given to us only a few weeks into our class, and I found myself spending many hours writing tediously algebra-heavy code based solely on UNIX timestamps to calculate time-based events: first departures, intervals between departures and arrivals, etc.
                  I was so very proud of the JS code I wrote that day, as it was fully functional and performed accurate time calculations for my trains.
                </h6>
                <h6 id="carouselText">
                  At least I was, until I learned that Moment.JS existed in our next class session.
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://davidwu92.github.io/TrainSimulator/" target="_blank">
                    Visit Train Simulator
                  </a>
                  <span>  </span>
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://github.com/davidwu92/TrainSimulator" target="_blank">
                    Visit Github Repo
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
                </h6>
                <h6 id="carouselText">
                  While it isn't the smoothest JS logic or the prettiest CSS I've ever written, Zelda Trivia is one of many early projects I created that show honest growth and provide snapshots of my early Javascript/DOM manipulation skills.
                  In retrospect, the app is a pretty good effort for the five week mark!
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://davidwu92.github.io/TriviaGame/" target="_blank">
                    Visit Zelda Trivia
                  </a>
                  <span>  </span>
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://github.com/davidwu92/TriviaGame" target="_blank">
                    Visit Github Repo
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
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://davidwu92.github.io/GIF-APIs/" target="_blank">
                    Visit Gif Finder
                  </a>
                  <span>  </span>
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://github.com/davidwu92/GIF-APIs" target="_blank">
                    Visit Github Repo
                  </a>
                </h5>
              </div>
            </div>  
          </div>

          <div class="carousel-item" id="item8" href="#eight!">
            <div className="card" id="card">
              <div id="pCardImage" className="card-image">
                  <img  alt="Harmonize Screenshot" className="activator" src={bamazon}/>
              </div>
              <div className="card-reveal" id="portfolioCardReveal">
                <span className="card-title grey-text text-darken-4"><h5 id="profileCardRevealTitle">Bamazon<i className="material-icons right">close</i></h5></span>
                <h6 id="carouselText">
                  As one of my first backend CLI applications, Bamazon uses the terminal to simulate a storefront.
                  It uses Javascript logic, a MySQL database, and inquirer.js for customer interactions in the terminal.
                </h6>
                <h6 id="carouselText">
                  The user (customer) has the ability to place orders in the terminal, which in turn depletes the items in stock at the Bamazon warehouse and calculates a purchase total.
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://github.com/davidwu92/bamazon" target="_blank">
                    Visit Github Repo
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