import React from "react";
import { css } from "emotion";
import styled from "styled-components";
import { colors, fonts, mediaQueries } from "../../shared/config";

import trophyWeb from "../../trophyWeb.svg";

const { gold, black } = colors;
const { title } = fonts;
const { mobile, notMobile } = mediaQueries;

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 40px;
  font-family: Nunito;
  ${mobile} {
    padding: 0px 10px;
  }
`;

const HeaderText = styled("div")`
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  width: 100%;
  text-align: center;
  width: 90%;
  color: ${black};
  margin: 30px 0;
  font-family: ${title};
  font-weight: 700;
  @media only screen and (max-width: 700px) {
    font-weight: 900;
    font-size: 50px;
    width: 100%;
  }

  @media only screen and (max-width: 500px) {
    font-weight: 900;
    font-size: 30px;
    width: 75%;
    ${mobile} {
      width: 95%;
    }
  }
`;

const CapText = styled("div")`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  align-items: center;
  text-align: center;
  color: ${black};
  width: 75%;
  justify-content: center;
  margin-bottom: 60px;
  ${mobile} {
    width: 95%;
  }
`;

const Trophy = styled("img")`
  margin-top: 5%;
  ${notMobile} {
    height: 241px;
    width: auto;
  }
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
      <Container>
        <Trophy src={trophyWeb} />
        <HeaderText>{title}</HeaderText>
        <CapText>{caption}</CapText>
      </Container>
    );
  }
}
