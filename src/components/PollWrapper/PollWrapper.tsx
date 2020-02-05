import React from "react";
import { css } from "emotion";
import styled from "styled-components";
import Poll from "../Poll/Poll";
import Question from "../Question/Question";
import PollNumber from "../PollNumber/PollNumber";

interface PollState {
  ind: number;
  showChart: number;
  ques: {
    question: string;
    answers: string[];
    questionNumber: number;
  }[];
  numberOfQuestions: number;
  answer: string;
}

interface PollProps {}

export default class PollWrapper extends React.Component<PollProps, PollState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showChart: 0,
      ind: 0,
      answer: " ",
      ques: [
        {
          question: "fuckk",
          answers: [
            "JED",
            "TYLER",
            "PETER",
            "LUKE",
            "GARRETTE",
            "MIKE",
            "CONNOR",
            "DUSTIN",
            "MAX WU"
          ],
          questionNumber: 1
        },
        {
          question: "shittt",
          answers: [
            "JED",
            "TYLER",
            "PETER",
            "LUKE",
            "GARRETTE",
            "MIKE",
            "CONNOR",
            "DUSTIN",
            "MAX WU"
          ],
          questionNumber: 2
        },
        {
          question: "GOOD SHIT",
          answers: [
            "JED",
            "TYLER",
            "PETER",
            "LUKE",
            "GARRETTE",
            "MIKE",
            "CONNOR",
            "DUSTIN",
            "MAX WU"
          ],
          questionNumber: 3
        },
        {
          question: "fuck my life",
          answers: [
            "JED",
            "TYLER",
            "PETER",
            "LUKE",
            "GARRETTE",
            "MIKE",
            "CONNOR",
            "DUSTIN",
            "MAX WU"
          ],
          questionNumber: 4
        },
        {
          question: "I'm tired",
          answers: [
            "JED",
            "TYLER",
            "PETER",
            "LUKE",
            "GARRETTE",
            "MIKE",
            "CONNOR",
            "DUSTIN",
            "MAX WU"
          ],
          questionNumber: 5
        }
      ],
      // can I even do this
      // numberOfQuestions: this.state.ques.length
      numberOfQuestions: 5
    };
    this.increment = this.increment.bind(this);
  }
  increment = () => {
    if (this.state.ind < this.state.numberOfQuestions - 1)
      this.setState({ ind: this.state.ind + 1 });
    this.setState({
      answer: "xD"
    });
    try {
      fetch(
        "http://interactive-oscars-2020.interactive-2020-oscars.primary.dailybruin.com:14765/api/sendanswer",
        {
          method: "POST",
          body: JSON.stringify({
            answer: this.state.answer,
            questionId: 0
          }), // data can be string or {object}!
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    } catch {
      console.log("rip");
    }
  };
  render() {
    return (
      <div className="wrapper">
        <Question q={this.state.ques[this.state.ind].question}></Question>
        <Poll
          incrementFunc={this.increment}
          ans={this.state.ques[this.state.ind].answers}
        ></Poll>
        <PollNumber
          questionNumber={this.state.ques[this.state.ind].questionNumber}
          numberOfQuestions={this.state.numberOfQuestions}
        ></PollNumber>
      </div>
    );
  }
}
