import React from "react";
import { css } from "emotion";
import styled from "styled-components";

const Quest = styled("div")`
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 41px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 2%;

  color: #272526;
`;

interface PollState {}

interface PollProps {
  q: string;
}

export default class Question extends React.Component<PollProps, PollState> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <Quest>{this.props.q}</Quest>;
  }
}
