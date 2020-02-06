import React from "react";
import { css } from "emotion";
import styled from "styled-components";
import Picture from "../../images/Rectangle 37.png";
import { colors, fonts, mediaQueries } from "../../shared/config";

const { gold, black } = colors;
const { mobile, notMobile } = mediaQueries;

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  color: ${black};
  width: 80%;
  margin: 3%;
  text-align: center;
  align-content: center;

  ${mobile} {
  }
`;

const CardLayout = styled("div")`
  margin-top: 2%;
  width: 50%;

  ${mobile} {
    flex-direction: row;
    display: flex;
    padding-bottom: 1%;
  }
`;

const Description = styled("div")`
  ${mobile} {
    justify-content: flex-end;
    flex-direction: column;
  }
`;

const Headline = styled("div")`
  flex: 0 50%;
  height: 100px;
  margin-bottom: 2%; /* (100-50*2)/2 */
  color: ${black};
  font-size: 40px;
  font-weight: 900;
  /* font-family: Avenir; */
  margin: auto;
  width: 50%;
  padding: 4%;
  text-align: center;
  word-wrap: break-word;

  ${mobile} {
    width: 70%;
    height: auto;
    font-size: 30px;
    padding: 4%;
  }
`;

const MiniBy = styled("div")`
  font-size: 18px;
  margin: auto;
  /* font-family: Avenir; */
  width: 70%;
  padding-bottom: 3%;

  ${mobile} {
    font-size: 16px;
    padding-bottom: 10%;
  }
`;

const MiniText = styled("div")`
  font-size: 18px;
  margin: auto;
  /* font-family: Avenir; */
  width: 70%;
  padding-bottom: 7%;

  ${mobile} {
    display: none;
  }
`;

const BoxImage = styled("div")`
  width: 65%;
  height: 213px;
  background: #c4c4c4;
  margin: auto;

  ${mobile} {
    width: 50%;
    height: 100%;
    justify-content: flex-start;
  }
`;

let testing = [
  "BeEp BOOp TITLE YEY",
  "BeEp BOOp TITLE YEY",
  "BeEp BOOp TITLE YEY",
  "BeEp BOOp TITLE YEY"
];

interface CardProps {
  cardData: {
    author: string;
    imgURL: string;
    imgAlt: string;
    headline: string;
    blurb: string;
  }[];
}

export default class Card extends React.Component<CardProps> {
  render() {
    const { cardData } = this.props;
    return (
      <Container>
        {cardData.map(card => (
          <CardLayout>
            <BoxImage>
              <img src={card.imgURL} alt={card.imgAlt} />{" "}
            </BoxImage>
            <Description>
              <Headline>{card.headline}</Headline>
              <MiniBy>{card.author}</MiniBy>
              <MiniText>{card.blurb}</MiniText>
            </Description>
          </CardLayout>
        ))}
      </Container>
    );
  }
}
