import React, {useEffect} from 'react'
import M from "materialize-css";
import './portfolio.css'
import harmonize from './Harmonize.png'
import animeGif from './AnimeGifFinder.png'
import irvineKumon from './IrvineKumon.png'
import laf from './LAF.png'
// import trainSimulator from './TrainSimulator.png'
import speedScrabble from './SpeedScrabble.png'
import triviaGame from './TriviaGame.png'
import reactScraper from './ReactScraper.png'
import bamazon from './Bamazon.png'
import payTrack from './PayTrack.png'

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
      <div className="container" id="pageContainer" style={{width:"100%"}}>
        <div id="pageTitle" className = "row center">
          <h1>Portfolio</h1>
          {/* <h6>Drag left or right to peruse some of my work. Click a screenshot for links and info.</h6> */}
        </div>

      {/* REMOVING THE CAROUSEL: Let's make cards. */}
      <div className="row" style={{padding:"0"}}>
            {/* PAYTRACK */}
            <div className="col s6 m3 l3">
              <div className="card"  style={{height:"auto"}}>
                <div className="card-image" style={{height:"auto"}}>
                  <img className="activator" src={payTrack}/>
                </div>
                <div className="card-content black" style={{padding:"5px"}}>
                  <span className="card-title activator white-text center">PayTrack<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal" style={{padding:"7px"}}>
                  <span className="card-title grey-text text-darken-4">PayTrack<i className="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                  <a className="white-text btn black btn-small" href="https://harmonizers.herokuapp.com/" target="_blank">
                    Visit Paytrack
                  </a>
                  <span>  </span>
                  <a className="white-text btn black btn-small" href="https://github.com/davidwu92/Harmonize2" target="_blank">
                    Visit Github
                  </a>
                </div>
              </div>
            </div>
      </div>


        {/* CAROUSEL */}
        <div>
        {/* <div class="carousel carousel-slider" onChange={onSlide}>
          
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
                  <img  alt="PayTrack Screenshot" className="activator" src={payTrack}/>
              </div>
              <div className="card-reveal" id="portfolioCardReveal">
                <span className="card-title grey-text text-darken-4"><h5 id="profileCardRevealTitle">PayTrack<i className="material-icons right">close</i></h5></span>
                <h6 id="carouselText">
                  PayTrack is the first project I tackled post-graduation. It was started and finished in about two weeks' worth of mostly-solo coding in March of 2020.
                </h6>
                <h6 id="carouselText">
                  This full-stack MERN application allows the user to create recurring or one-time financial calendar events; it uses react-materialize, re-charts, and FullCalendar for an extremely user-friendly UI/UX.
                  Users have access to graphs and statements that summarize financial activity (by month, year, and/or category!) they wish to track.
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://paytrackapp.herokuapp.com/" target="_blank">
                    Visit PayTrack
                  </a>
                  <span>  </span>
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://github.com/davidwu92/PaymentTracker" target="_blank">
                    Visit Github Repo
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div class="carousel-item" id="item4" href="#four!">
            <div className="card" id="card">
              <div id="pCardImage" className="card-image">
                  <img  alt="Harmonize Screenshot" className="activator" src={irvineKumon}/>
              </div>
              <div className="card-reveal" id="portfolioCardReveal">
                <span className="card-title grey-text text-darken-4"><h5 id="profileCardRevealTitle">Irvine Kumon Website<i className="material-icons right">close</i></h5></span>
                <h6 id="carouselText">
                  The owner and directors of two Irvine Kumon centers asked me to assist them with updating their website, as it was written on Wordpress back in 2013 by an amateur web developer and friend of the Kumon owners... and hadn't been updated since.
                </h6>
                <h6 id="carouselText">
                  My initial goal for this front-end job was simply to make a few components mobile-responsive, but I took it upon myself to revamp almost every page on the site. As the outbreak of COVID-19 raged on, families enrolled at Irvine Kumon were in desperate need of updated, concise information; the centers had transitioned into contact-free homework and Zoom session classes, but the site was not informative enough of how these changes were implemented.
                  I have stored each page's initial HTML code along with files documenting my changes in the Github repo.
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black btn-small" href="http://irvinekumon.com" target="_blank">
                    Visit Irvine Kumon
                  </a>
                  <span>  </span>
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://github.com/davidwu92/irvineKumonFiles" target="_blank">
                    Visit Github Repo
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div class="carousel-item" id="item5" href="#five!">
            <div className="card" id="card">
              <div id="pCardImage" className="card-image">
                  <img  alt="Harmonize Screenshot" className="activator" src={speedScrabble}/>
              </div>
              <div className="card-reveal" id="portfolioCardReveal">
                <span className="card-title grey-text text-darken-4"><h5 id="profileCardRevealTitle">Speed Scrabble<i className="material-icons right">close</i></h5></span>
                <h6 id="carouselText">
                  Speed Scrabble was the second project I completed post-graduation. I used to play this game as a child for hours on end against my older sister, and had the idea to turn it into a web application!
                </h6>
                <h6 id="carouselText">
                  The entire project was coded by myself and my friend Paul (a fellow Harmonize developer). I built out many of the game mechanics: the user's hand, the board, the ability to drag-and-drop tiles (or tap-place them on mobile/tablet), swapping tiles out with tiles still in the "bag", reading the words off the board, etc.
                </h6>
                <h6 id="carouselText">
                  It was quite a fun challenge working with this self-built Scrabble Board grid! 
                  I created the game board using an array of 10 arrays (resulting in a 10x10 matrix), and had the pleasure of figuring out the logic for 1. reading off all the words placed on the board and 2. coding an algorithm that checks if tile placement on the board was legal.
                </h6>
                <h5 className="left">
                  <a id="carouselLink" className="white-text btn black btn-small" href="http://speedscrabble.herokuapp.com/" target="_blank">
                    Visit/Play Speed Scrabble
                  </a>
                  <span>  </span>
                  <a id="carouselLink" className="white-text btn black btn-small" href="https://github.com/davidwu92/SpeedScrabble" target="_blank">
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

        </div> */}
        </div>
      </div> {/* container end */}
    </>
  )
}
export default Portfolio