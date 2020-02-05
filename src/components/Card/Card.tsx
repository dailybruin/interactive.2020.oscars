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
  justify-content: space-around;
  color: ${black};
  width: 80%;
  margin: 3%;
  text-align: center;
  align-content: center;

  ${mobile} {
  }
`;

const CardLayout = styled("div")`
  ${mobile} {
    flex-direction: row;
  }
`;

const Description = styled("div")`
  ${mobile} {
    flex-direction: column;
  }
`;

const CardLayout = styled("div")`
  margin-top: 2%;

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

const Item = styled("div")`
  flex: 0 50%;
  height: 100px;
  margin-bottom: 2%; /* (100-50*2)/2 */
  color: ${black};
  font-size: 40px;
  font-weight: 900;
<<<<<<< Updated upstream
  /*font-family: Avenir;*/
=======
  /* font-family: Avenir; */
>>>>>>> Stashed changes
  margin: auto;
  width: 50%;
  padding: 4%;

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
<<<<<<< Updated upstream
  border: 10px;

  ${mobile} {
    font-size: 36px;
  }
`;

const MiniBy = styled("div")`
  font-size: 18px;
  margin: auto;
  /*font-family: Avenir;*/
  width: 70%;
  padding: 20px;

  ${mobile} {
    font-size: 16px;
  }
`;

const MiniText = styled("div")`
  font-size: 18px;
  margin: auto;
  /*font-family: Avenir;*/
  width: 70%;
  padding: 20px;
=======
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
>>>>>>> Stashed changes

  ${mobile} {
    display: none;
  }
`;

const BoxImage = styled("div")`
  width: 65%;
  height: 213px;
  background: #c4c4c4;
  margin: auto;
<<<<<<< Updated upstream
  margin-left: 125px;

  ${mobile} {
    width: 50%;
=======

  ${mobile} {
    width: 50%;
    height: 100%;
    justify-content: flex-start;
>>>>>>> Stashed changes
  }
`;

let testing = [
  "BeEp BOOp TITLE YEY",
  "BeEp BOOp TITLE YEY",
  "BeEp BOOp TITLE YEY",
  "BeEp BOOp TITLE YEY"
];

export default class Card extends React.Component {
  render() {
    return (
      <Container>
        {testing.map(card => (
          <CardLayout>
            <BoxImage>
              <img src="{Picture}" alt="image" />{" "}
            </BoxImage>
            <Description>
              <Item>{card}</Item>
              <MiniBy> by this person </MiniBy>
              <MiniText>
                This is what we predicted this is what we predicted this is what
                we predicted
              </MiniText>
            </Description>
          </CardLayout>
        ))}
      </Container>
    );
  }
}
