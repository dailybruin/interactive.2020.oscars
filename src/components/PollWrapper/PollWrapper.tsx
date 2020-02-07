import React from "react";
import { css } from "emotion";
import styled from "styled-components";
import Poll from "../Poll/Poll";
import Question from "../Question/Question";
import PollNumber from "../PollNumber/PollNumber";
import ChartCard from "../ChartCard/ChartCard";

import { mediaQueries } from "../../shared/config";

interface PollState {
  idx: number;
  showChart: boolean;
  userData: any;
}

interface PollProps {
  questions: {
    question: string;
    answers: string[];
    questionNumber: number;
  }[];
}

const graph_colors = [
  "#BE9A47",
  "#D1AB52",
  "#DDB863",
  "#EAC164",
  "#F1CA73",
  "#FBD684",
  "#FFDF98",
  "#FFEABA",
  "#FFF3D7"
];
const db_data = [
  {
    datasets: [
      {
        data: [2, 8, 1, 5, 10, 5, 37, 13, 16],
        backgroundColor: graph_colors,
        label: "Dataset 1"
      }
    ],
    labels: [
      "Ford v Ferrari",
      "The Irishman",
      "Jojo Rabbit",
      "Joker",
      "Little Women",
      "Marriage Story",
      "1917",
      "Once Upon a Time...in Hollywood",
      "Parasite"
    ]
  },
  {
    datasets: [
      {
        data: [5, 12, 10, 68, 2],
        backgroundColor: graph_colors,
        label: "Dataset 1"
      }
    ],
    labels: [
      "Antonio Banderas (Pain and Glory)",
      "Leonardo DiCaprio (Once upon a Time...in Hollywood)",
      "Adam Driver (Marriage Story)",
      "Joaquin Phoenix (Joker)",
      "Jonathan Pryce (The Two Popes)"
    ]
  },
  {
    datasets: [
      {
        data: [10, 14, 38, 4, 31],
        backgroundColor: graph_colors,
        label: "Dataset 1"
      }
    ],
    labels: [
      "Cynthia Erivo (Harriet)",
      "Scarlett Johansson (Marriage Story)",
      "Saoirse Ronan (Little Women)",
      "Charlize Theron (Bombshell)",
      "Renee Zellweger (Judy)"
    ]
  },
  {
    datasets: [
      {
        data: [10, 6, 11, 20, 50],
        backgroundColor: graph_colors,
        label: "Dataset 1"
      }
    ],
    labels: [
      "How to Train Your Dragon: The Hidden",
      "World",
      "I Lost My Body",
      "Klaus",
      "Missing Link",
      "Toy Story 4"
    ]
  },
  {
    datasets: [
      {
        data: [12, 5, 26, 16, 38],
        backgroundColor: graph_colors,
        label: "Dataset 1"
      }
    ],
    labels: [
      "The Irishman (Martin Scorsese)",
      "Joker (Todd Phillips)",
      "1917 (Sam Mendes)",
      "Once upon a Time...in Hollywood (Quentin Tarantino)",
      "Parasite (Bong Joon Ho)"
    ]
  },
  {
    datasets: [
      {
        data: [4, 43, 12, 27, 11],
        backgroundColor: graph_colors,
        label: "Dataset 1"
      }
    ],
    labels: [
      "Kathy Bates (Richard Jewell)",
      "Laura Dern (Marriage Story)",
      "Scarlett Johansson (Jojo Rabbit)",
      "Florence Pugh (Little Women)",
      "Margot Robbie (Bombshell)"
    ]
  },
  {
    datasets: [
      {
        data: [20, 5, 15, 10, 47],
        backgroundColor: graph_colors,
        label: "Dataset 1"
      }
    ],
    labels: [
      "Tom Hanks (A Beautiful Day in the Neighboorhood)",
      "Anthony Hopkins (The Two Popes)",
      "Al Pacino (The Irishman)",
      "Joe Pesci (The Irishman)",
      "Brad Pitt (Once upon a Time...in Hollywood)"
    ]
  }
];

export default class PollWrapper extends React.Component<PollProps, PollState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showChart: false,
      userData: null,
      idx: 0
    };
    this.sendAnswer = this.sendAnswer.bind(this);
  }

  sendAnswer(arg, i) {
    this.setState({
      showChart: true
    });
    const { idx } = this.state;
    // this.setState({ userData: db_data[0] });
    // return;
    try {
      fetch(
        "https://interactive-oscars-2020.interactive-2020-oscars.primary.dailybruin.com:14765/api/sendanswer",
        {
          method: "POST",
          body: JSON.stringify({
            answer: arg,
            questionId: idx
          }), // data can be string or {object}!
          headers: {
            "Content-Type": "application/json"
          }
        }
      ).then(_ => {
        fetch(
          `https://interactive-oscars-2020.interactive-2020-oscars.primary.dailybruin.com:14765/api/questions/${idx}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
          .then(response => response.json())
          .then(data => {
            const { counts } = data;
            let keys = Object.keys(counts);
            let values = Object.values(counts);
            let found = -1;
            for (let i = 0; i < keys.length; i++) {
              if (keys[i] == arg) {
                found = i;
              }
            }
            if (found >= 0) {
              keys[found] = keys[found] + 1;
            } else {
              keys.push(arg);
              values.push(1);
            }
            const new_data = {
              datasets: [
                {
                  data: values,
                  backgroundColor: graph_colors,
                  label: "Dataset 1"
                }
              ],
              labels: keys
            };

            this.setState({
              userData: new_data
            });
          });
      });
    } catch {
      console.log("rip");
    }
  }
  render() {
    const { idx, showChart, userData } = this.state;
    const { questions } = this.props;
    const { mobile } = mediaQueries;

    console.log(userData);
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          margin: 40px 0;
          ${mobile} {
            height: 100vh;
            margin: 0;
          }
        `}
      >
        <div
          className={css`
            margin-bottom: 20px;
          `}
        >
          Poll: Respond to see results!
        </div>
        <Question q={questions[idx].question}></Question>

        {showChart ? (
          userData && (
            <ChartCard
              showNext={idx != questions.length - 1}
              dbData={db_data[idx]}
              userData={userData}
              onNextClick={() => {
                if (idx < questions.length - 1)
                  this.setState({ idx: idx + 1, showChart: false });
              }}
            />
          )
        ) : (
          <>
            <Poll
              // incrementFunc={this.increment}
              onAnswerClick={this.sendAnswer}
              ans={questions[idx].answers}
            ></Poll>
          </>
        )}
        <PollNumber
          questionNumber={questions[idx].questionNumber}
          numberOfQuestions={questions.length}
        ></PollNumber>
      </div>
    );
  }
}
