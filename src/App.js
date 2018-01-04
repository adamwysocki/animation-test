import React, { Component } from "react";
import "./App.css";

import styled, { keyframes } from "styled-components";
import { bounce, shake, fadeInDownBig, lightSpeedIn, fadeIn } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;
const shakeAnimation = keyframes`${shake}`;
const fadeDownBigAnimation = keyframes`${fadeInDownBig}`;
const fadeInAnimation = keyframes`${fadeIn}`;

const DownDiv = styled.div`
  font-family: Anton;
  animation: 0.4s ${fadeDownBigAnimation};
  color: cornflowerblue;
`;

const BouncyDiv = styled.div`
  font-family: Anton;
  animation: 1.2s ${bounceAnimation};
  color: cornflowerblue;
`;

const ShakeDiv = styled.div`
  margin-top: 1%;
  font-family: Anton;
  animation: 0.8s ${shakeAnimation};
  color: cornflowerblue;
`;

const ThankYouDiv = styled.div`
  font-family: Anton;
  color: coral;
  font-size: 42px;
  animation: 4s ${fadeInAnimation};
`;

const titleDivStepDurations = [300, 1500, 1000];

class App extends Component {
  state = {
    titleDivStep: 1,
    displayThankYouDiv: false
  };

  fireThankYouDivAnimation() {
    setTimeout(() => {
      this.setState({ displayThankYouDiv: true });
    }, 1000);
  }

  fireNextTitleDivStep() {
    setTimeout(() => {
      let newTitleDivStep = this.state.titleDivStep + 1;
      this.setState({ titleDivStep: newTitleDivStep }, () => {
        if (this.state.titleDivStep < 3) {
          this.fireNextTitleDivStep();
        } else {
          this.fireThankYouDivAnimation();
        }
      });
    }, titleDivStepDurations[this.state.titleDivStep - 1]);
  }

  componentDidMount() {
    this.fireNextTitleDivStep();
  }

  getTitleDiv(step) {
    let animation = <DownDiv>HELLO</DownDiv>;
    switch (step) {
      case 1:
        animation = <DownDiv>HELLO</DownDiv>;
        break;
      case 2:
        animation = <BouncyDiv>HELLO</BouncyDiv>;
        break;
      case 3:
        animation = <ShakeDiv>HELLO</ShakeDiv>;
        break;
      default:
        animation = <BouncyDiv>HELLO</BouncyDiv>;
    }
    return animation;
  }

  render() {
    let titleDivToRender = this.getTitleDiv(this.state.titleDivStep);
    let thankYouDivToRender = <div className="thankyou-placeholder">Thank you for stopping by!</div>;

    if (this.state.displayThankYouDiv) {
      thankYouDivToRender = <ThankYouDiv>Thank you for stopping by</ThankYouDiv>;
    }

    return (
      <div className="App">
        <div className="bounce-wrapper">{titleDivToRender}</div>
        <div>{thankYouDivToRender}</div>
      </div>
    );
  }
}

export default App;
