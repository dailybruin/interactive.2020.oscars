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
  ${mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled("div")`
  justify-content: center;
  margin: 10px 25px;
  width: 40%;
  ${mobile} {
    width: 90%;
    margin: 10px 10px;
  }
`;

const Img = styled("div")`
  background: ${grey};
  width: 60%;
  min-height: 200px;
  margin: 20px 20px;
  ${mobile} {
    width: 90%;
    align-items: center;
  }
`;

const ImgCredit = styled("div")`
  font-family: ${baseText};
  font-size: 16px;
  margin: 15px 15px;
  color: ${black};
`;

const ImgTitle = styled("div")`
  font-family: ${title};
  font-weight: 900;
  font-size: 40px;
  margin: 20px 20px;
  color: ${black};
`;

const ImgCaption = styled("div")`
  font-family: ${baseText};
  font-size: 18px;
  margin: 15px 15px;
  color: ${black};
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
        <Img>
          <img src={this.props.imgURL} alt={this.props.imgAlt}></img>
        </Img>
        <Container>
          <ImgCredit>{this.props.credit}</ImgCredit>
          <ImgTitle>{this.props.imgTitle}</ImgTitle>
          <ImgCaption>{this.props.imgCaption}</ImgCaption>
        </Container>
      </ContainerAll>
    );
  }
}
