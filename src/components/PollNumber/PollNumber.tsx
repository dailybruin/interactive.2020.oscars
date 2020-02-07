import React from "react";
import { css } from "emotion";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px;
  pointer-events: none;
`;

const Poll = styled("div")`
  width: 47px;
  height: 47px;

  @media only screen and (max-width: 980px) {
    width: 40px;
    height: 40px;
  }

  @media only screen and (max-width: 390px) {
    width: 30px;
    height: 30px;
  }

  display: flex;
  border: 1px solid #272526;
  border-radius: 26px;
  justify-content: center;
  margin: 5px;
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

  @media only screen and (max-width: 980px) {
    width: 84px;
    height: 40px;
  }

  @media only screen and (max-width: 390px) {
    width: 64px;
    height: 30px;
  }

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

interface PollState {
  showChart: number;
  ind: number;
}

interface PollProps {
  questionNumber: number;
  numberOfQuestions: number;
}

export default class PollNumber extends React.Component<PollProps, PollState> {
  constructor(props: any) {
    super(props);
  }
  render() {
    let numQuestions = this.props.numberOfQuestions;

    const { questionNumber } = this.props;
    const nums = Array.from(Array(numQuestions).keys());

    return (
      <Container>
        {nums.map(thing => {
          let qNumber = thing + 1;
          if (qNumber == questionNumber) {
            return (
              <CurPoll>
                <CurPollText>{questionNumber}</CurPollText>
              </CurPoll>
            );
          }
          return (
            <Poll>
              <PollText>{qNumber}</PollText>
            </Poll>
          );
        })}
      </Container>
    );
  }
}
