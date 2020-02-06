import React from "react";
import { css } from "emotion";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
  margin: auto;
`;

const Item = styled("div")`
  width: 32%;
  padding-bottom: 1%; /* Same as width, sets height */
  margin-bottom: 1%; /* (100-32*3)/2 */
  position: relative;
`;

const ButtonxD = styled("button")`
  border: none;
  background: white;
`;

const Box = styled("div")`
  box-sizing: border-box;
  width: 200px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 75px;
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
  incrementFunc: any;
}

export default class Poll extends React.Component<PollProps, PollState> {
  constructor(props: any) {
    super(props);
  }

  onAnswerClick(ans: string, idx: number): any {
    this.props.incrementFunc();
    // this.props.answer = ans;
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
