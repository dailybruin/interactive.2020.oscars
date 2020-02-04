import React from "react";
import { css } from "emotion";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
`;

const Poll = styled("div")`
  width: 47px;
  height: 47px;
  left: 562px;
  top: 2307px;

  display: flex;
  border: 1px solid #272526;
  border-radius: 26px;
  justify-content: center;
`;

const PollText = styled("div")`
  display: flex;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 2px;
  text-transform: uppercase;

  justify-content: center;
  align-items: center;
  text-align: center;

  color: #272526;
`;

const CurPoll = styled("div")`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
  text-transform: uppercase;

  color: #ffffff;
  background: #272526;
  border-radius: 23.5px 26px 26px 26px;
`;
let polls = ["1", "2", "3", "4", "5"];

export default class PollNumber extends React.Component {
  render() {
    return (
      <Container>
        {polls.map(poll => (
          <Poll>
            <PollText>{poll}</PollText>
          </Poll>
        ))}
      </Container>
    );
  }
}
