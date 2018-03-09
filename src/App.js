import React, { Fragment } from "react";
import "./App.css";

import Frame from "./components/Frame";
import TwitterIcon from "./components/TwitterIcon";
import GithubIcon from "./components/GithubIcon";
import EmailIcon from "./components/EmailIcon";
import BlogIcon from "./components/BlogIcon";
import StravaIcon from "./components/StravaIcon";

// some CONT's for responsiveness
const SMALL_WINDOW_WIDTH = 575;
const MEDIUM_WINDOW_WIDTH = 768;

// some SVG size options for responsiveness
const svgSizes = new Map([["small", "32"], ["medium", "48"], ["large", "64"]]);

// these are the frames of the animation and some params
const frames = [
  <Frame size="120px" interval="2" color="palevioletred">
    3
  </Frame>,
  <Frame size="120px" interval="2" color="palevioletred">
    2
  </Frame>,
  <Frame size="120px" interval="2" color="palevioletred">
    1
  </Frame>,
  <Frame size="120px" interval="10" color="dodgerblue">
    Hi!
  </Frame>,
  <Frame size="35px" interval="10" color="dodgerblue">
    Thank you for stopping by
  </Frame>,
  <Frame size="35px" interval="10" color="dodgerblue">
    I like to write code
  </Frame>,
  <Frame size="120px" interval="4" color="dodgerblue">
    ES6
  </Frame>,
  <Frame size="120px" interval="4" color="dodgerblue">
    React
  </Frame>,
  <Frame size="120px" interval="4" color="dodgerblue">
    & Node
  </Frame>,
  <Frame size="35px" interval="8" color="dodgerblue">
    Feel free to get in touch
  </Frame>,
  <Frame size="30px" interval="14" color="dodgerblue">
    I promise not to rhyme too much!
  </Frame>,
  <div style={{ color: "dodgerblue" }}>
    Adam Wysocki
    <div className="quote">"Controlling complexity is the essence of computer programming." - Brian W. Kernighan</div>
  </div>
];
//"Software is the invisible writing that whispers the stories of possibility to our hardware." - Grady Booch

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  // setup a listener to handle resizes
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  // clean up
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  // update sizes
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  // get the SVG icon size based on screen width
  calculateIconSize() {
    if (this.state.width <= SMALL_WINDOW_WIDTH) {
      return svgSizes.get("small");
    } else if (this.state.width > SMALL_WINDOW_WIDTH && this.state.width <= MEDIUM_WINDOW_WIDTH) {
      return svgSizes.get("medium");
    } else {
      return svgSizes.get("large");
    }
  }

  // still need to break this up into smaller components
  render() {
    //let frame = frames[11];
    const svgSize = this.calculateIconSize();

    return (
      <div className="outerWrapper">
        <div className="topContainer">
          <div className="frameContainer">
            <div style={{ color: "dodgerblue" }}>
              Adam Wysocki
              <div className="quote">
                "Controlling complexity is the essence of computer programming." - Brian W. Kernighan
              </div>
            </div>
          </div>
        </div>
        <div className="middleContainer">
          <div>
            <h1>Professional</h1>
            <ul>
              <li>Software Engineering Manager</li>
              <li>25+ years experience</li>
              <li>Node.js/React/Ember</li>
              <li>MySql/Mongo/Postgresql</li>
              <li>Jest/Mocha/Chai</li>
              <li>Flow/Typescript</li>
            </ul>
          </div>
          <div>
            <h1>Personal</h1>
            <ul>
              <li>Husband/Dad</li>
              <li>Marathoner</li>
              <li>Triathlete</li>
              <li>Vegan</li>
              <li>Ironist</li>
              <li>Born in New Jersey</li>
            </ul>
          </div>
          <div>
            <h1>Odd</h1>
            <ul>
              <li>Obsessive movie quoter</li>
              <li>Miley Cyrus super fan</li>
              <li>Former US Marine</li>
              <li>Wrote a video game in 1984</li>
              <li>Thinks the Matrix is probably real</li>
              <li>Believes Elon Musk is actually an AI</li>
            </ul>
          </div>
        </div>
        <div className="bottomContainer">
          <div className="contactBox">
            <a href="https://www.twitter.com/theadamwysocki">
              <TwitterIcon size={svgSize} color={"cornflowerblue"} />
              <div>@theadamwysocki</div>
            </a>
          </div>
          <div className="contactBox">
            <a href="https://github.com/adamwysocki">
              <GithubIcon size={svgSize} color={"cornflowerblue"} />
              <div>github/adamwysocki</div>
            </a>
          </div>
          <div className="contactBox">
            <a href="mailto:adam@adamwysocki.me?subject=Please stop rhyming">
              <EmailIcon size={svgSize} color={"cornflowerblue"} />
              <div>adam@adamwysocki.me</div>
            </a>
          </div>
          <div className="contactBox">
            <a href="https://medium.com/@theadamwysocki">
              <BlogIcon size={svgSize} color={"cornflowerblue"} />
              <div>medium/@theadamwysocki</div>
            </a>
          </div>
          <div className="contactBox">
            <a href="https://www.strava.com/athletes/adamwysocki">
              <StravaIcon size={svgSize} color={"cornflowerblue"} />
              <div>strava/adamwysocki</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
