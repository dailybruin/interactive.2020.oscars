import React from "react";
import { css } from "emotion";
import styled from "styled-components";
import Picture from "../../images/Rectangle 37.png";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Item = styled("div")`
  flex: 0 50%;
  height: 100px;
  margin-bottom: 2%; /* (100-50*2)/2 */
  color: #272526;
`;

let card = ["one", "two", "three", "four"];

export default class Poll extends React.Component {
  render() {
    return (
      <Container>
        {card.map(card => (
          <Item>{card}</Item>
        ))}
      </Container>
    );
  }
}
