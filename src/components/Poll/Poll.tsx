import React from "react";
import { css } from "emotion";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Item = styled("div")`
  width: 32%;
  padding-bottom: 0%; /* 32:18, i.e. 16:9 */
  margin-bottom: 2%; /* (100-32*3)/2 */
`;

const Box = styled("div")`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 25px;

  /* identical to box height */
  /* text-transform: uppercase; */

  color: #434343;

  background: #e1e1e1;
  border-radius: 41.5px;
`;

interface PollState {}
const ButtonxD = styled("button")`
  border: none;
  background: #f5f5f5;
`;

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
