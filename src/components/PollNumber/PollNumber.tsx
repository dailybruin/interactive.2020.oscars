import React from "react";
import { css } from "emotion";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;
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
  margin: 5px; /* and that, will result in a 10px gap */
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
  width: 94px;
  height: 47px;
  left: 562px;
  top: 2307px;

  display: flex;
  border: 1px solid #272526;
  border-radius: 26px;
  justify-content: center;
  border-radius: 50%;

  color: #ffffff;
  background: #272526;
  border-radius: 23.5px 26px 26px 26px;
  margin: 5px; /* and that, will result in a 10px gap */
`;

const CurPollText = styled("div")`
  display: flex;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 2px;
  text-transform: uppercase;

  justify-content: center;
  align-items: center;
  text-align: center;

  color: #f5f5f5;
`;

let polls = ["1", "2", "3", "4"];

export default class PollNumber extends React.Component {
  render() {
    return (
      <Container>
        {polls.map(poll => (
          <Poll>
            <PollText>{poll}</PollText>
          </Poll>
        ))}
        <CurPoll>
          <CurPollText>5</CurPollText>
        </CurPoll>
      </Container>
    );
  }
}
