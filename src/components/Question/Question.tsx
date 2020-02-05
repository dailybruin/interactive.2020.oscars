import React from "react";
import { css } from "emotion";
import styled from "styled-components";

const Question = styled("div")`
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 41px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 2%;

  color: #272526;
`;

interface PollState {}

interface PollProps {
  q: string;
}

export default class Poll extends React.Component<PollProps, PollState> {
  render() {
    return <Question>{this.props.q}</Question>;
  }
}
