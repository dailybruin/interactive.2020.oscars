import React from "react";
import { css } from "emotion";
import styled from "styled-components";
import { colors, fonts, mediaQueries } from "../../shared/config";

const { gold, black, grey } = colors;
const { title, baseText } = fonts;
const { mobile, notMobile } = mediaQueries;

const ContainerAll = styled("a")`
  text-decoration: none;
  color: ${black};
  display: flex;
  flex-direction: row;
  justify-content: center;
  word-wrap: break-word;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
  ${mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled("div")`
  text-align: center;
  margin: 15px;
  width: 40%;
  ${mobile} {
    width: 90%;
  }
`;

const Img = styled("img")`
  background: ${grey};
  width: 60%;
  min-height: 200px;
  margin: 20px 20px;
  object-fit: cover;

  ${mobile} {
    width: 90%;
    align-items: center;
    margin: 0 10px;
  }
`;

const ImgCredit = styled("div")`
  font-family: ${baseText};
  font-size: 16px;
  color: ${black};
  ${mobile} {
    font-size: 14px;
  }
`;

const ImgTitle = styled("div")`
  font-family: ${title};
  font-weight: 700;
  font-size: 40px;
  color: ${black};
  margin: 20px 0;
  ${mobile} {
    font-size: 30px;
    margin: 0;
  }
`;

const ImgCaption = styled("div")`
  font-family: ${baseText};
  font-size: 18px;
  color: ${black};
  ${mobile} {
    font-size: 12px;
  }
`;

interface TitleImageProps {
  credit: string;
  imgTitle: string;
  imgCaption: string;
  imgURL: string;
  imgAlt: string;
  articleLink: string;
}

export default class TitleImage extends React.Component<TitleImageProps> {
  render() {
    return (
      <ContainerAll href={this.props.articleLink} target="_blank">
        <Img src={this.props.imgURL} alt={this.props.imgAlt} />
        <Container>
          <ImgCredit>{this.props.credit}</ImgCredit>
          <ImgTitle>{this.props.imgTitle}</ImgTitle>
          <ImgCaption>{this.props.imgCaption}</ImgCaption>
        </Container>
      </ContainerAll>
    );
  }
}
