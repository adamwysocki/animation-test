import React, {Fragment} from "react";
import "./App.css";

import Frame from "./components/Frame";
import TwitterIcon from "./components/TwitterIcon";
import GithubIcon from "./components/GithubIcon";
import EmailIcon from "./components/EmailIcon";

const SMALL_WINDOW_WIDTH = 575;
const MEDIUM_WINDOW_WIDTH = 768;

const svgSizes = new Map([['small', "48"], ['medium', "64"], ['large', "96"]]);

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
  <div style={{color: "dodgerblue"}}>
    Adam Wysocki
    <div className="quote">"Software is the invisible writing that whispers the stories of possibility to our hardware." - Grady Booch</div>
  </div>
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
 
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillMount() {
    this.timer = setInterval(this.tick, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  tick = () => {
    let nextStep = this.state.step + 1;
    this.setState({ step: nextStep });
    if (nextStep >= frames.length) {
      clearInterval(this.timer);
    }
  };

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  calculateIconSize() {
    if(this.state.width <= SMALL_WINDOW_WIDTH) {
      return svgSizes.get('small');
    } else if(this.state.width > SMALL_WINDOW_WIDTH && this.state.width <= MEDIUM_WINDOW_WIDTH) {
      return svgSizes.get('medium');
    } else {
      return svgSizes.get('large');
    }
  }

  render() {
    let frame = frames[this.state.step - 1];
    const svgSize = this.calculateIconSize();

    return (
      <Fragment>
        <div className="App">
          <div className="frameContainer">{frame}</div>
        </div>
        <div className="container">
            <div className="contactBox"><a href="https://www.twitter.com/theadamwysocki"><TwitterIcon size={svgSize} color={"cornflowerblue"}/><div>@theadamwysocki</div></a></div>
            <div className="contactBox"><a href="https://github.com/adamwysocki"><GithubIcon size={svgSize} color={"cornflowerblue"}/><div>github.com/adamwysocki</div></a></div>
            <div className="contactBox"><a href="mailto:adam@adamwysocki.me?subject=Please stop rhyming"><EmailIcon size={svgSize} color={"cornflowerblue"}/><div>adam@adamwysocki.me</div></a></div>
        </div>
      </Fragment>
    );
  }
}

export default App;
