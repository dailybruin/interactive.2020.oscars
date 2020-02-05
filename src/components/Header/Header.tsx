import React from "react";
import { css } from "emotion";
import styled from "styled-components";
import { colors, fonts, mediaQueries } from "../../shared/config";

import trophyWeb from "../../trophyWeb.svg";

const { gold, black } = colors;
const { mobile, notMobile } = mediaQueries;

const HeaderText = styled("div")`
  /* font-family: Circular Std; */
  display: flex;
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
<<<<<<< Updated upstream
  display: flex;
  align-items: center;
  text-align: center;
  color: ${black};
  ${mobile} {
    font-weight: 900;
    font-size: 48px;
    line-height: 61px;
=======

  display: flex;
  align-items: center;
  text-align: center;

  color: ${black};

  ${mobile} {
    font-weight: 900;
    font-size: 50px;
>>>>>>> Stashed changes
  }
`;

const CapText = styled("div")`
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  display: flex;
  align-items: center;
  text-align: center;
  color: ${black};
<<<<<<< Updated upstream
  ${mobile} {
    font-size: 14px;
    line-height: 19px;
  }
`;

const Trophy = styled("img")`
=======

  margin-bottom: 5%;
`;

const Trophy = styled("img")`
  margin-top: 5%;

>>>>>>> Stashed changes
  ${notMobile} {
    height: 241px;
    width: auto;
  }
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  ${mobile} {
    height: 165px;
    width: auto;
  }
`;

interface HeaderProps {
  titleText: string;
  captionText: string;
}

export default class Header extends React.Component<HeaderProps> {
  render() {
    const title = this.props.titleText;
    const caption = this.props.captionText;

    return (
      <>
        <Trophy src={trophyWeb} />
        <HeaderText>{title}</HeaderText>
        <CapText>{caption}</CapText>
      </>
    );
  }
}
