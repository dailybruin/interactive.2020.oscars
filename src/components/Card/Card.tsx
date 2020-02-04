import React from "react";
import { css } from "emotion";
import styled from "styled-components";
import Picture from "../../images/Rectangle 37.png";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: black;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  align-content: center;
`;

const Item = styled("div")`
  flex: 0 50%;
  height: 100px;
  margin-bottom: 2%; /* (100-50*2)/2 */
  color: #272526;
  font-size: 40px;
  font-weight: 900;
  font-family: Avenir;
  margin: auto;
  width: 70%;
  border: 10px;
`;

const Mini = styled("div")`
  font-size: 18px;
  margin: auto;
  font-family: Avenir;
  width: 70%;
  padding: 20px;
`;

const BoxImage = styled("div")`
  width: 385px;
  height: 213px;
  background: #c4c4c4;
  margin: auto;
  margin-left: 125px;
`;

let testing = [
  "BeEp BOOp TITLE YEY",
  "BeEp BOOp TITLE YeY",
  "BeEp BOOp TITLE YEY",
  "BeEp BOOp TITLE"
];

export default class Card extends React.Component {
  render() {
    return (
      <Container>
        {testing.map(card => (
          <div>
            <Mini> by this person </Mini>
            <BoxImage>
              <img src="{Picture}" alt="image" />{" "}
            </BoxImage>
            <Item>{card}</Item>
            <Mini>
              This is what we predicted this is what we predicted this is what
              we predicted
            </Mini>
          </div>
        ))}
      </Container>
    );
  }
}
