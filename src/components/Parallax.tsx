import React from "react";
import styled from "styled-components";
import simpleParallax from "simple-parallax-js";

import Pic1 from "../images/parallax/1.png";
import Pic2 from "../images/parallax/2.png";
import Pic3 from "../images/parallax/3.png";
import Pic4 from "../images/parallax/4.png";

const Wrapper = styled("div")`
  height: 100vh;
  width: 100%;
  background: url(${Pic1}), url(${Pic2}), url(${Pic3}), url(${Pic4});

  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const OutWrapper = styled("div")`
  background: linear-gradient(#fff3d7, black 55%);
`;

export default class ParallaxCover extends React.Component {
  constructor(props) {
    super(props);
    this.parallax = this.parallax.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.parallax);
  }

  parallax() {
    const elem = document.querySelector<HTMLElement>("#parallax");
    let pos1 = `${50 - window.scrollY * 0.2}%`;
    let pos2 = `${50 - window.scrollY * 0.3}%`;
    let pos3 = `${50 - window.scrollY * 0.4}%`;
    let pos4 = `${50 - window.scrollY * 0.5}%`;
    elem.style.backgroundPositionY =
      pos4 + ", " + pos3 + ", " + pos2 + ", " + pos1;
  }

  render() {
    return (
      <>
        <OutWrapper>
          <Wrapper id="parallax"></Wrapper>
        </OutWrapper>
      </>
    );
  }
}
