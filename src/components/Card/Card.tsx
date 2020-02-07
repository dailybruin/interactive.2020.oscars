import React from "react";
import { css } from "emotion";
import styled from "styled-components";
import Picture from "../../images/Rectangle 37.png";
import { colors, fonts, mediaQueries } from "../../shared/config";

const { mobile, notMobile, tablet } = mediaQueries;

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  color: ${colors.black};
  width: 100%;
  text-align: center;
  align-content: center;
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

  cursor: pointer;
  &:hover {
    background-color: white;
  }

  ${tablet} {
    padding: 20px;
  }
  ${mobile} {
    flex-direction: row;
    display: flex;
    width: 100%;
    padding: 0;
  }
`;

const Description = styled("div")`
  width: 100%;
  word-wrap: break-word;
  text-align: center;
  ${mobile} {
    justify-content: flex-end;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;
    width: 50%;
  }
`;

const Headline = styled("div")`
  color: ${colors.black};
  font-size: 24px;
  font-weight: 900;
  width: 100%;
  text-align: center;
  margin-top: 10px;
  font-family: Montserrat;
  font-weight: 600;
  ${mobile} {
    font-size: 20px;
    width: 100% !important;
  }
`;

const MiniBy = styled("div")`
  font-size: 18px;
  /* font-family: Avenir; */
  width: 100%;
  ${mobile} {
    font-size: 14px;
  }
`;

const MiniText = styled("div")`
  font-size: 14px;
  margin-top: 10px;
  /* font-family: Avenir; */
  width: 100%;
  ${mobile} {
    display: none;
  }
`;

const BoxImage = styled("img")`
  width: 100%;
  background: #c4c4c4;
  height: 200px;
  object-fit: cover;
  ${mobile} {
    width: 50% !important;
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
    imageURL: string;
    imageAlt: string;
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
            <MiniBy
              className={css`
                margin-bottom: 10px;
                ${mobile} {
                  display: none;
                }
              `}
            >
              {card.author}
            </MiniBy>
            <BoxImage src={card.imageURL} alt={card.imageAlt}></BoxImage>
            <Description>
              <Headline>{card.headline}</Headline>
              <MiniBy
                className={css`
                  margin-top: 5px;
                  ${notMobile} {
                    display: none;
                  }
                `}
              >
                {card.author}
              </MiniBy>
              <MiniText>{card.blurb}</MiniText>
            </Description>
          </CardLayout>
        ))}
      </Container>
    );
  }
}
