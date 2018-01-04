import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn, fadeOut } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`;

class Frame extends Component {
  state = {
    animation: fadeInAnimation,
    interval: "2s"
  };

  componentDidMount() {
    this.timer = setInterval(this.tick, 1);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidUpdate() {
    clearInterval(this.timer);
    this.timer = setInterval(this.tick, parseInt(this.props.interval, 10) * 1000);
  }

  tick = () => {
    this.setState({ animation: fadeOutAnimation });
    clearInterval(this.timer);
  };

  render() {
    let interval = `${this.props.interval}s`;
    const FrameDiv = styled.div`
      font-size: ${this.props.size};
      font-family: Anton;
      color: ${this.props.color || "cornflowerblue"};
      animation: ${interval} ${this.state.animation};
      text-shadow: 1px 1px grey;
    `;

    return <FrameDiv>{this.props.children}</FrameDiv>;
  }
}

export default Frame;
