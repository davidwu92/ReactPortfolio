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
import liarsDice from './LiarsDice.png'
import wukityper from './Wukityper.png'

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
          <h6>Click a card for more info, or click a black button to visit the project. My best/most-recent projects are listed first.</h6>
        </div>

        {/* ROWS OF APPS */}
        <div className="row" style={{padding:"0"}}>

          {/* WUKITYPER */}
          <div className="col s12 m3 l3">
            <div className="card"  style={{height:"auto"}}>
              <div className="card-content grey lighten-2 center" style={{padding:"5px"}}>
                <span className="card-title activator black-text"><b>WukiTyper (Typing Test)</b></span>
              </div>
              <div className="card-image" style={{height:"auto"}}>
                <img className="activator" src={wukityper}/>
              </div>
              <div className="card-content grey lighten-2" style={{padding:"3px"}}>
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://wukityper.herokuapp.com/" target="_blank">
                  Visit WukiTyper
                </a>
                <span>  </span>
                <a className="white-text waves-effect waves-light btn black btn-small right" href="https://github.com/davidwu92/TypeTest" target="_blank">
                  Visit Github
                </a>
              </div>
              <div className="card-reveal" style={{padding:"7px"}}>
                <span className="card-title grey-text text-darken-4 center">WukiTyper<i className="material-icons right">close</i></span>
                <p className="grey-text" style={{margin:"0px"}}>Stack: Express, ReactJS, NodeJS, Mongo</p>
                <p className="grey-text" style={{margin:"0px"}}>NPM Packages: axios, toastify</p>
                <p style={{textIndent:"15px"}}>This app uses the Wikimedia API to scrape Wikipedia articles and turn them into the words in a typing test. The test measures speed, accuracy, and other statistics on the user's typing ability; taking the test has an added bonus of potentially learning something new as the user types Wikipedia article summaries!</p>
                <p style={{textIndent:"15px"}}>I built the entire app out myself in May of 2020. My goal was to practice and learn the code behind a simple typing test, such that I could build a new multiplayer typing-game application. The application works wonderfully, and you're welcome to shoot for a position on the Top 50 Leaderboards!</p>
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://wukityper.herokuapp.com/" target="_blank">
                  Visit WukiTyper
                </a>
                <span>  </span>
                <a className="white-text waves-effect waves-light btn black btn-small right" href="https://github.com/davidwu92/TypeTest" target="_blank">
                  Visit Github
                </a>
              </div>
            </div>
          </div>        

          {/* LIARS DICE */}
          <div className="col s12 m3 l3">
            <div className="card"  style={{height:"auto"}}>
              <div className="card-content grey lighten-4 center" style={{padding:"5px"}}>
                <span className="card-title activator black-text"><b>Liars' Dice</b></span>
              </div>
              <div className="card-image" style={{height:"auto"}}>
                <img className="activator" src={liarsDice}/>
              </div>
              <div className="card-content grey lighten-4" style={{padding:"3px"}}>
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://liars-dice-app.netlify.app/" target="_blank">
                  Play Liars' Dice
                </a>
                <span>  </span>
                <a className="white-text waves-effect waves-light btn black btn-small right" href="https://github.com/davidwu92/liarsDice" target="_blank">
                  Visit Github
                </a>
              </div>
              <div className="card-reveal" style={{padding:"7px"}}>
                <span className="card-title grey-text text-darken-4 center">Liars' Dice<i className="material-icons right">close</i></span>
                <p className="grey-text" style={{margin:"0px"}}>Stack: Express, ReactJS, NodeJS, Socket.IO</p>
                <p className="grey-text" style={{margin:"0px"}}>NPM Packages: axios, toastify, socket, nodemon, cors.</p>
                <p style={{textIndent:"15px"}}>A mostly-solo project of mine created throughout April 2020. I spent about two weeks learning how Socket.io works, creating live-chat applications, and developing a responsive, live, browser-based multiplayer game.</p>
                <p style={{textIndent:"15px"}}>This game was playtested quite a few times with members of my own family during the COVID-19 outbreak. While the game is more complicated than worth explaining here (read the rules <a target="_blank" href="https://liars-dice-app.netlify.app/rules">here</a>), it is worth noting that the app features a live chat with emojis, a live server that manages game states, and rather complex game logic.</p>
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://liars-dice-app.netlify.app/" target="_blank">
                  Play Liars' Dice
                </a>
                <span>  </span>
                <a className="white-text waves-effect waves-light btn black btn-small right" href="https://github.com/davidwu92/liarsDice" target="_blank">
                  Visit Github
                </a>
              </div>
            </div>
          </div>        
          
          {/* PAYTRACK */}
          <div className="col s12 m3 l3">
            <div className="card"  style={{height:"auto"}}>
              <div className="card-content grey lighten-2 center" style={{padding:"5px"}}>
                <span className="card-title activator black-text"><b>PayTrack</b></span>
              </div>
              <div className="card-image" style={{height:"auto"}}>
                <img className="activator" src={payTrack}/>
              </div>
              <div className="card-content grey lighten-2" style={{padding:"3px"}}>
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://paytrackapp.herokuapp.com/" target="_blank">
                  Visit Paytrack
                </a>
                <span>  </span>
                <a className="white-text waves-effect waves-light btn black btn-small right" href="https://github.com/davidwu92/PaymentTracker" target="_blank">
                  Visit Github
                </a>
              </div>
              <div className="card-reveal" style={{padding:"7px"}}>
                <span className="card-title grey-text text-darken-4 center">PayTrack<i className="material-icons right">close</i></span>
                <p className="grey-text" style={{margin:"0px"}}>Stack: Mongo, Express, ReactJS, NodeJS</p>
                <p className="grey-text" style={{margin:"0px"}}>NPM Packages: FullCalendar, JSONWebToken, passport-jwt, axios, toastify.</p>
                <p style={{textIndent:"15px"}}>As the sole developer, contributor, and innovator, I completed the entire app (server, database, UI/UX elements, etc.) in about two weeks' worth of coding in March 2020.</p>
                <p style={{textIndent:"15px"}}>The app is designed to be the ultimate calendar-based budgeting tool. Users can set up one-time or recurring groups of income/expense events, which are color-coded and rendered My Calendar and My Statements.</p>
                <p style={{textIndent:"15px"}}>Financial events that have been added to the calendar are used to generate statements and graphs; both boast a nifty feature that allows the user to choose which month's, year's, and/or categories' events they wish to have analyzed.</p>
                <p style={{textIndent:"15px"}}>The calendar, statements, and graphs pages have customizable category-color-schemes saved to the user's preferences.</p>
                <p style={{textIndent:"15px"}}>While anyone is free to create a new account, feel free to try this app's features out using login info: "user1" | "password" (username | password, sans-quotation marks).</p>
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://paytrackapp.herokuapp.com/" target="_blank">
                  Visit Paytrack
                </a>
                <span>  </span>
                <a className="white-text waves-effect waves-light btn black btn-small right" href="https://github.com/davidwu92/PaymentTracker" target="_blank">
                  Visit Github
                </a>
              </div>
            </div>
          </div>

          {/* SPEED SCRABBLE */}
          <div className="col s12 m3 l3">
            <div className="card"  style={{height:"auto"}}>
              <div className="card-content grey lighten-4 center" style={{padding:"5px"}}>
                <span className="card-title activator black-text"><b>Speed Scrabble</b></span>
              </div>
              <div className="card-image" style={{height:"auto"}}>
                <img className="activator" src={speedScrabble}/>
              </div>
              <div className="card-content grey lighten-4" style={{padding:"3px"}}>
                <a className="white-text waves-effect waves-light btn black btn-small" href="http://speedscrabble.herokuapp.com/" target="_blank">
                  Play S. Scrabble
                </a>
                <span>  </span>
                <a className="white-text waves-effect waves-light btn black btn-small right" href="https://github.com/davidwu92/SpeedScrabble" target="_blank">
                  Visit Github
                </a>
              </div>
              <div className="card-reveal" style={{padding:"7px"}}>
                <span className="card-title grey-text text-darken-4 center">Speed Scrabble<i className="material-icons right">close</i></span>
                <p className="grey-text" style={{margin:"0px"}}>Stack: Mongo, Express, ReactJS, NodeJS</p>
                <p className="grey-text" style={{margin:"0px"}}>NPM Packages: JSONWebToken, passport-jwt, axios, toastify.</p>
                <p style={{textIndent:"15px"}}>This is a full-stack, fully-responsive game played in your web browser. I highly recommend playing at least once! Again, you can skip User Registration using username: "user1" and password: "password" (no quotation marks).</p>
                <p style={{textIndent:"15px"}}>In March of 2020, I wrote this project with some help from a classmate named Paul; Paul worked on importing/writing routes for the dictionary and wrote out logic for the leaderboard page. Meanwhile, I worked on everything else:</p>
                <p style={{textIndent:"0px"}}><b>~</b><i>homepage, user registration, login and logout functionality</i></p>
                <p style={{textIndent:"0px"}}><b>~</b><i>creating the game board grid and coding the tiles' drag-drop functionality (touch-drop for mobile/tablet devices)</i></p>
                <p style={{textIndent:"0px"}}><b>~</b><i>the game timer and creating a complex scoring system based on game time, letter rarity, and word lengths</i></p>
                <p style={{textIndent:"0px"}}><b>~</b><i>the routes for sending/storing the user's scores in our database.</i></p>
                <p style={{textIndent:"0px"}}><b>~</b><i>logic for reading words off the board, checking the board state legality, and checking word legality against the Scrabble dictionary.</i></p>
                <p style={{textIndent:"15px"}}>That last bullet point is still among the hardest challenges I've tackled yet. The program had to figure out if any tiles were placed illegally on the board (no "islands" of words/tiles, all words in a single crossword...) as well as check the legality of all the entered words.</p>
                <p style={{textIndent:"15px"}}>But I was able to solve these problems with time (after trying a myriad of different, failed strategies). The end result is a fully-functioning, fun single-player game that I invite anyone to try.</p>
                <a className="white-text waves-effect waves-light btn black btn-small" href="http://speedscrabble.herokuapp.com/" target="_blank">
                  Play S. Scrabble
                </a>
                <span>  </span>
                <a className="white-text waves-effect waves-light btn black btn-small right" href="https://github.com/davidwu92/SpeedScrabble" target="_blank">
                  Visit Github
                </a>
              </div>
            </div>
          </div>

          <div className="col s12 m12 l12"></div>

          {/* IRVINE KUMON */}
          <div className="col s12 m3 l3">
            <div className="card"  style={{height:"auto"}}>
              <div className="card-content grey lighten-4 center" style={{padding:"5px"}}>
                <span className="card-title activator black-text"><b>Irvine Kumon Website</b></span>
              </div>
              <div className="card-image" style={{height:"auto"}}>
                <img className="activator" src={irvineKumon}/>
              </div>
              <div className="card-content grey lighten-4" style={{padding:"3px"}}>
                <a className="white-text waves-effect waves-light btn black btn-small" href="http://irvinekumon.com/" target="_blank">
                  Visit Irvine Kumon
                </a>
              </div>
              <div className="card-reveal" style={{padding:"7px"}}>
                <span className="card-title grey-text text-darken-4 center">Irvine Kumon<i className="material-icons right">close</i></span>
                <p className="grey-text" style={{margin:"0px"}}>Tech: HTML/CSS, Wordpress, GoDaddy</p>
                <p style={{textIndent:"15px"}}>Kumon is a franchise offering after-school tutoring and reinforcement programs. During the outbreak of COVID-19 in March 2020, the director of two Irvine Kumon centers asked me to fix up their website, as it hadn't had any significant updates since its creation in 2013 by an amateur web developer named Christine. I was asked to make the site mobile-responsive and embed some forms.</p>
                <p style={{textIndent:"15px"}}>Upon logging into Wordpress with Christine's credentials, I found a phenomenally messy splatter of code and text: unformatted essays copy-pasted from mass emails, incoherently-ordered bullet points, dilapidated info on the business itself, etc. Clients (many of whom were immigrants with non-English primary languages) had trouble extracting essential information on the business' COVID-19 updates; this was debilitating to the business in a time of online-only client-staff interaction.</p>
                <p style={{textIndent:"15px"}}>Thanks to my front-end work, the site is organized with color-coded info boxes, logically-placed links and menu items, and clear, step-by-step tutorials.</p>
                <a className="white-text waves-effect waves-light btn black btn-small" href="http://irvinekumon.com/" target="_blank">
                  Visit Irvine Kumon
                </a>
              </div>
            </div>
          </div>

          {/* HARMONIZE */}
          <div className="col s12 m3 l3">
            <div className="card"  style={{height:"auto"}}>
              <div className="card-content grey lighten-2 center" style={{padding:"5px"}}>
                <span className="card-title activator black-text"><b>Harmonize</b></span>
              </div>
              <div className="card-image" style={{height:"auto"}}>
                <img className="activator" src={harmonize}/>
              </div>
              <div className="card-content grey lighten-2" style={{padding:"3px"}}>
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://harmonizers.herokuapp.com/" target="_blank">
                  Visit Harmonize
                </a>
                <span> </span>
                <a className="white-text waves-effect waves-light btn black btn-small right" href="https://github.com/davidwu92/Harmonize2" target="_blank">
                  Visit Github
                </a>
              </div>
              <div className="card-reveal" style={{padding:"7px"}}>
                <span className="card-title grey-text text-darken-4 center">Harmonize<i className="material-icons right">close</i></span>
                <p className="grey-text" style={{margin:"0px"}}>Stack: Mongo, Express, ReactJS, NodeJS</p>
                <p className="grey-text" style={{margin:"0px"}}>NPM Packages: JSONWebToken, axios, bcrypt, nodemailer</p>
                <p style={{textIndent:"15px"}}>My idea for this app was to create an online community for both amateur and professional musicians. I and two fellow UCI Coding Bootcamp students turned Harmonize into an ambitious networking application for musicians, allowing users to...</p>                  
                <p style={{textIndent:"0px"}}><b>~</b>display recordings and performances into their public profile.</p>
                <p style={{textIndent:"0px"}}><b>~</b>add/remove instruments/skills tags and search for other users by these tags.</p>
                <p style={{textIndent:"0px"}}><b>~</b>create, edit, and remove postings for gig opportunities.</p>
                <p style={{textIndent:"15px"}}>As a long-time pianist, coding this app became a huge passion project. I've put well over a hundred hours into this project alone, and I am responsible for front- and back-end development of the Search, Register, Gig Posting, and edit Profile features. I was also the SCRUM lord!</p>
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://harmonizers.herokuapp.com/" target="_blank">
                  Visit Harmonize
                </a>
                <span> </span>
                <a className="white-text waves-effect waves-light btn black btn-small right" href="https://github.com/davidwu92/Harmonize2" target="_blank">
                  Visit Github
                </a>
              </div>
            </div>
          </div>
          
          {/* LOST AND FOUND */}
          <div className="col s12 m3 l3">
            <div className="card"  style={{height:"auto"}}>
              <div className="card-content grey lighten-4 center" style={{padding:"5px"}}>
                <span className="card-title activator black-text"><b>Lost and Found (LAF)</b></span>
              </div>
              <div className="card-image" style={{height:"auto"}}>
                <img className="activator" src={laf}/>
              </div>
              <div className="card-content grey lighten-4" style={{padding:"3px"}}>
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://the-laf-app.herokuapp.com/" target="_blank">
                  Visit LAF
                </a>
                <span> </span>
                <a className="white-text waves-effect waves-light btn black btn-small right" href="https://github.com/davidwu92/Project-Two" target="_blank">
                  Visit Github
                </a>
              </div>
              <div className="card-reveal" style={{padding:"7px"}}>
                <span className="card-title grey-text text-darken-4 center">Lost and Found<i className="material-icons right">close</i></span>
                <p className="grey-text" style={{margin:"0px"}}>Stack: Express, Sequelize, NodeJS</p>
                <p className="grey-text" style={{margin:"0px"}}>NPM Packages: JSONWebToken, axios</p>
                <p style={{textIndent:"15px"}}>LAF is a full-stack Express-Sequelize app designed to digitize lost and found offices in any densely-populated settings and events.</p>                  
                <p style={{textIndent:"15px"}}>I was the SCRUM master, idea-conceiver, and repository owner, and I was responsible for much of the back end code: posting "found" items, building the database, and adding event settings.</p>
                <p style={{textIndent:"15px"}}></p>                  
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://the-laf-app.herokuapp.com/" target="_blank">
                  Visit LAF
                </a>
                <span> </span>
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://github.com/davidwu92/Project-Two" target="_blank">
                  Visit Github
                </a>
              </div>
            </div>
          </div>

          {/* ZELDA TRIVIA */}
          <div className="col s12 m3 l3">
            <div className="card"  style={{height:"auto"}}>
              <div className="card-content grey lighten-2 center" style={{padding:"5px"}}>
                <span className="card-title activator black-text"><b>Zelda Trivia Game</b></span>
              </div>
              <div className="card-image" style={{height:"auto"}}>
                <img className="activator" src={triviaGame}/>
              </div>
              <div className="card-content grey lighten-2" style={{padding:"3px"}}>
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://davidwu92.github.io/TriviaGame/" target="_blank">
                  Visit Zelda Trivia
                </a>
                <span> </span>
                <a className="white-text waves-effect waves-light btn black btn-small right" href="https://github.com/davidwu92/TriviaGame" target="_blank">
                  Visit Github
                </a>
              </div>
              <div className="card-reveal" style={{padding:"7px"}}>
                <span className="card-title grey-text text-darken-4 center">Zelda Trivia<i className="material-icons right">close</i></span>
                <p className="grey-text" style={{margin:"0px"}}>Stack: JS, HTML, CSS</p>
                <p className="grey-text" style={{margin:"0px"}}>NPM Packages: moment.js, materialize</p>
                <p style={{textIndent:"15px"}}>The Zelda Trivia Game is a front-end app I built one weekend from HTML, CSS and Javascript.</p>
                <p style={{textIndent:"15px"}}>While it isn't the smoothest JS logic or the prettiest CSS I've ever written, Zelda Trivia is one of many early projects I created that show honest growth and provide snapshots of my early Javascript/DOM manipulation skills. In retrospect, the app is a pretty good effort for the five week mark!</p>
                <p style={{textIndent:"15px"}}></p>                  
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://davidwu92.github.io/TriviaGame/" target="_blank">
                  Visit Zelda Trivia
                </a>
                <span> </span>
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://github.com/davidwu92/TriviaGame" target="_blank">
                  Visit Github
                </a>
              </div>
            </div>
          </div>

          {/* GIF FINDER */}
          <div className="col s12 m3 l3">
            <div className="card"  style={{height:"auto"}}>
              <div className="card-content grey lighten-2 center" style={{padding:"5px"}}>
                <span className="card-title activator black-text"><b>Anime GIF Finder</b></span>
              </div>
              <div className="card-image" style={{height:"auto"}}>
                <img className="activator" src={animeGif}/>
              </div>
              <div className="card-content grey lighten-2" style={{padding:"3px"}}>
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://davidwu92.github.io/GIF-APIs/" target="_blank">
                  Visit GIF Finder
                </a>
                <span> </span>
                <a className="white-text waves-effect waves-light btn black btn-small right" href="https://github.com/davidwu92/GIF-APIs" target="_blank">
                  Visit Github
                </a>
              </div>
              <div className="card-reveal" style={{padding:"7px"}}>
                <span className="card-title grey-text text-darken-4 center">Anime GIF Finder<i className="material-icons right">close</i></span>
                <p className="grey-text" style={{margin:"0px"}}>Stack: JS, HTML, CSS</p>
                <p className="grey-text" style={{margin:"0px"}}>NPM Packages: moment.js, materialize, axios</p>
                <p style={{textIndent:"15px"}}>This was one of the earlier assignments given to us at the UC Irvine Coding Bootcamp, designed to help familiarize us with AJAX/API requests.</p>
                <p style={{textIndent:"15px"}}>While my JS and CSS abilities were still in their developing stages, this project provides honest insight about my growing sense of UI/UX elements and my perseverance as logic-oriented problem-solver. In retrospect, I'm proud of how much I had learned in just a few months' coding, and I continue to use the skills learned from this assignment today.</p>
                <p style={{textIndent:"15px"}}></p>                  
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://davidwu92.github.io/GIF-APIs/" target="_blank">
                  Visit GIF Finder
                </a>
                <span> </span>
                <a className="white-text waves-effect waves-light btn black btn-small" href="https://github.com/davidwu92/GIF-APIs" target="_blank">
                  Visit Github
                </a>
              </div>
            </div>
          </div>

        </div>{/* END PORTFOLIO PROJECT ROW */}
      </div> {/* container end */}
    </>
  )
}
export default Portfolio