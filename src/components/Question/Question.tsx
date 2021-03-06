import React from "react";
import { css } from "emotion";
import styled from "styled-components";

import { fonts } from "../../shared/config";

const { title } = fonts;

const Quest = styled("div")`
  font-style: normal;
  font-size: 30px;
  font-family: ${title};
  font-weight: 700;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 20px;
  @media only screen and (max-width: 700px) {
    font-size: 20px;
  }

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
