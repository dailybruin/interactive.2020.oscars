import React from "react";
import { css } from "emotion";
import styled from "styled-components";
import Picture from "../../images/Rectangle 37.png";
import { colors, fonts, mediaQueries } from "../../shared/config";

const { mobile, notMobile } = mediaQueries;

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  color: ${colors.black};
  width: 100%;
  margin: 3%;
  text-align: center;
  align-content: center;
  ${mobile} {
  }
`;

const CardLayout = styled("a")`
  width: 50%;
  padding: 60px;
  text-decoration: none;
  color: ${colors.black};
  border: 1px solid ${colors.line};
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  ${mobile} {
    flex-direction: row;
    display: flex;
    width: 100%;
    padding: 0;
  }
`;

const Description = styled("div")`
  width: 50%;
  ${mobile} {
    justify-content: flex-end;
    flex-direction: column;
  }
`;

const Headline = styled("div")`
  flex: 0 50%;
  margin-bottom: 2%; /* (100-50*2)/2 */
  color: ${colors.black};
  font-size: 24px;
  font-weight: 900;
  /* font-family: Avenir; */
  width: 100%;
  text-align: center;
  word-wrap: break-word;

  ${mobile} {
    width: 100%;
    font-size: 20px;
  }
`;

const MiniBy = styled("div")`
  font-size: 18px;
  /* font-family: Avenir; */
  width: 100%;
  padding-bottom: 3%;

  ${mobile} {
    font-size: 14px;
    padding-bottom: 10%;
  }
`;

const MiniText = styled("div")`
  font-size: 18px;
  /* font-family: Avenir; */
  width: 100%;
  ${mobile} {
    display: none;
  }
`;

const BoxImage = styled("div")`
  width: 100%;
  background: #c4c4c4;
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
    articleLink: string;
  }[];
}

export default class Card extends React.Component<CardProps> {
  render() {
    const { cardData } = this.props;
    return (
      <Container>
        {cardData.map(card => (
          <CardLayout href={card.articleLink} target="_blank">
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
