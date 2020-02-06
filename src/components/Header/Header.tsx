import React from "react";
import { css } from "emotion";
import styled from "styled-components";
import { colors, fonts, mediaQueries } from "../../shared/config";

import trophyWeb from "../../trophyWeb.svg";

const { gold, black } = colors;
const { mobile, notMobile } = mediaQueries;

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderText = styled("div")`
  /* font-family: Circular Std; */
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
  width: 100%;
  text-align: center;
  color: ${black};

  ${mobile} {
    font-weight: 900;
    font-size: 50px;
  }
`;

const CapText = styled("div")`
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  align-items: center;
  text-align: center;
  color: ${black};
  width: 100%;
  margin-bottom: 5%;
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
