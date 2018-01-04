import React, { Component } from "react";
import "./App.css";

import Frame from "./components/frame";

const frames = [
  <Frame size="160px" interval="2">
    3
  </Frame>,
  <Frame size="160px" interval="2">
    2
  </Frame>,
  <Frame size="160px" interval="2">
    1
  </Frame>,
  <Frame size="90px" interval="10">
    Hi!
  </Frame>,
  <Frame size="60px" interval="10">
    Thank you for stopping by
  </Frame>,
  <Frame size="60px" interval="10">
    I like to write code
  </Frame>,
  <Frame size="120px" interval="4">
    ES6
  </Frame>,
  <Frame size="120px" interval="4">
    React
  </Frame>,
  <Frame size="120px" interval="4">
    & Node
  </Frame>
];

class App extends Component {
  state = {
    step: 1
  };

  componentWillMount() {
    this.timer = setInterval(this.tick, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    let nextStep = this.state.step + 1;
    this.setState({ step: nextStep });
    if (nextStep > frames.length) {
      clearInterval(this.timer);
    }
  };

  render() {
    let frame = frames[this.state.step - 1];

    return (
      <div className="App">
        <div className="bounce-wrapper">{frame}</div>
      </div>
    );
  }
}

export default App;
