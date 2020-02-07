import React from "react";
import { css } from "emotion";
import styled from "styled-components";
import { colors } from "../../shared/config";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 80%;
`;

const Item = styled("div")`
  padding: 10px;
  box-sizing: border-box;
  width: 32%;
  position: relative;
  @media only screen and (max-width: 700px) {
    width: 50%;
  }
`;

const ButtonxD = styled("div")`
  border: none;
  text-align: center;
  background-color: ${colors.background};
  width: 100%;
  border-radius: 41.5px;
  cursor: pointer;
  &:hover {
    filter: brightness(130%);
  }
`;

const Box = styled("div")`
  box-sizing: border-box;
  font-style: normal;
  width: 100%;
  font-weight: 300;
  font-size: 18px;
  padding: 10px;
  color: #434343;
  background: #e1e1e1;
  border-radius: 41.5px;
`;

interface PollState {}

interface PollState {
  showChart: number;
  ind: number;
}

interface PollProps {
  ans: string[];
  onAnswerClick: any;
}

export default class Poll extends React.Component<PollProps, PollState> {
  constructor(props: any) {
    super(props);
  }

  onAnswerClick(ans: string, idx: number): any {
    this.props.onAnswerClick(ans);
  }

  render() {
    return (
      <Container>
        {this.props.ans.map((an, idx) => (
          <Item>
            <ButtonxD onClick={() => this.onAnswerClick(an, idx)}>
              <Box>{an}</Box>
            </ButtonxD>
          </Item>
        ))}
      </Container>
    );
  }
}
