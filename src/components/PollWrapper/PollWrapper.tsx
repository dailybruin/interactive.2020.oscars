import React from "react";
import { css } from "emotion";
import styled from "styled-components";
import Poll from "../Poll/Poll";
import Question from "../Question/Question";
import PollNumber from "../PollNumber/PollNumber";

interface PollState {
  ind: number;
  showChart: boolean;
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
      showChart: false,
      ind: 0,
      answer: " ",
      ques: [
        {
          question: "ahhhhhhhhhhhhhhhhhhh",
          answers: [
            "JED",
            "TYLER",
            "beter",
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
          question: "shizzle",
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
          question: "GOOD SHIzzle",
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
          question: "duck my life",
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
      numberOfQuestions: 5
    };
    var increment = this.increment.bind(this);
    var answer = "";
  }
  // increment = () => {
  //   if (this.state.ind < 4) {
  //     this.setState({ ind: this.state.ind + 1 });
  //   }
  //   this.setState({
  //     answer: "xD"
  //   });
  //   try {
  //     fetch(
  //       "http://interactive-oscars-2020.interactive-2020-oscars.primary.dailybruin.com:14765/api/sendanswer",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({
  //           answer: this.state.answer,
  //           questionId: 0
  //         }), // data can be string or {object}!
  //         headers: {
  //           "Content-Type": "application/json"
  //         }
  //       }
  //     );
  //   } catch {
  //     console.log("rip");
  //   }
  // };
  increment = arg => {
    if (this.state.ind < 4) {
      this.setState({ ind: this.state.ind + 1 });
      this.setState({ showChart: !this.state.showChart }); // toggle showing chart
    }
    this.setState({
      answer: arg
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
          // incrementFunc={this.increment}
          incrementFunc={this.increment.bind(this)}
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
