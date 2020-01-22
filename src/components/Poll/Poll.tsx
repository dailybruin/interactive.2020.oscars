import React from "react";
import { css } from "emotion";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Item = styled("div")`
  width: 32%;
  padding-bottom: 0%; /* 32:18, i.e. 16:9 */
  margin-bottom: 2%; /* (100-32*3)/2 */
`;

const Item2 = styled("div")`
  flex: 0 32%;
  height: 100px;
  margin-bottom: 2%; /* (100-32*3)/2 */
`;

const Box = styled("div")`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */
  text-transform: uppercase;

  color: #434343;

  background: #e1e1e1;
  border-radius: 41.5px;
`;

let candidates = [
  "Jed",
  "Tyler",
  "Peter",
  "Luke",
  "Garrett",
  "Mike",
  "Connor",
  "Dustin",
  "Dylan"
];

export default class Poll extends React.Component {
  render() {
    return (
      <Container>
        {candidates.map(candidate => (
          <Item>
            <Box>{candidate}</Box>
          </Item>
        ))}
      </Container>
    );
  }
}
