import React from "react";
import "./App.css";
import Poll from "./components/Poll/Poll";
import Question from "./components/Question/Question";
import PollNumber from "./components/PollNumber/PollNumber";
import TitleImage from "./components/TitleImage/TitleImage";
import ChartCard from "./components/ChartCard/ChartCard";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import PollWrapper from "./components/PollWrapper/PollWrapper";
import ReactPlayer from "react-player";
import Magnifier from "react-magnifier";
import Parallax from "./components/Parallax";

import { css } from "emotion";
import styled from "styled-components";
import { colors, mediaQueries } from "./shared/config";

const ques = [
  {
    question: "Best Picture",
    answers: [
      "Ford v Ferrari",
      "The Irishman",
      "Jojo Rabbit",
      "Joker",
      "Little Women",
      "Marriage Story",
      "1917",
      "Once Upon a Time...in Hollywood",
      "Parasite"
    ],
    questionNumber: 1
  },
  {
    question: "Best Actor in a Leading Role",
    answers: [
      "Antonio Banderas (Pain and Glory)",
      "Leonardo DiCaprio (Once upon a Time...in Hollywood)",
      "Adam Driver (Marriage Story)",
      "Joaquin Phoenix (Joker)",
      "Jonathan Pryce (The Two Popes)"
    ],
    questionNumber: 2
  },
  {
    question: "Best Actress in a Leading Role",
    answers: [
      "Cynthia Erivo (Harriet)",
      "Scarlett Johansson (Marriage Story)",
      "Saoirse Ronan (Little Women",
      "Charlize Theron (Bombshell)",
      "Renee Zellweger (Judy)"
    ],
    questionNumber: 3
  },
  {
    question: "Best Animated Feature Film",
    answers: [
      "How to Train Your Dragon: The Hidden World",
      "I Lost My Body",
      "Klaus",
      "Missing Link",
      "Toy Story 4"
    ],
    questionNumber: 4
  },
  {
    question: "Best Director",
    answers: [
      "The Irishman (Martin Scorsese)",
      "Joker (Todd Phillips)",
      "1917 (Sam Mendes)",
      "Once upon a Time...in Hollywood (Quentin Tarantino)",
      "Parasite (Bong Joon Ho)"
    ],
    questionNumber: 5
  },
  {
    question: "Best Actress in a Supporting Role",
    answers: [
      "Kathy Bates (Richard Jewell)",
      "Laura Dern (Marriage Story)",
      "Scarlett Johansson (Jojo Rabbit)",
      "Florence Pugh (Little Women)",
      "Margot Robbie (Bombshell)"
    ],
    questionNumber: 6
  },
  {
    question: "Best Actor in a Supporting Role",
    answers: [
      "Tom Hanks (A Beautiful Day in the Neighboorhood)",
      "Anthony Hopkins (The Two Popes)",
      "Al Pacino (The Irishman)",
      "Joe Pesci (The Irishman)",
      "Brad Pitt (Once upon a Time...in Hollywood)"
    ],
    questionNumber: 7
  }
];
const Line = styled("div")`
  height: 3px;
  width: 100%;
  background-color: ${colors.line};
`;

interface AppState {
  query: any; // TODO: specify data format
}

export default class App extends React.Component<{}, AppState> {
  componentDidMount() {
    const kerckhoffAPI =
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2020.oscars";
    fetch(kerckhoffAPI, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(results => results.json())
      .then(results => this.setState({ query: results }));
  }

  render() {
    if (!this.state) return <></>;
    const data = this.state.query.data["site.aml"];
    // console.log(data);
    const { mobile, tablet } = mediaQueries;
    return (
      <>
        <Parallax />
        <div
          className={css`
            background-color: black;
            font-family: Nunito;
            padding: 0 15%;
            ${tablet} {
              padding: 0 50px;
            }
            ${mobile} {
              padding: 0 15px;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              background-color: ${colors.background};
            `}
          >
            <Header
              titleText={data.siteTitle}
              captionText={data.siteDescription}
            />
            <Line />
            <TitleImage
              credit={data.author}
              imgTitle={data.headline}
              imgCaption={data.blurb}
              imgURL={data.imageURL}
              imgAlt={data.imageAlt}
              articleLink={data.articleLink}
            ></TitleImage>
            <Line />
            <PollWrapper questions={ques} />
            {data.videoURL != "yeet" && (
              <>
                <Line />
                <ReactPlayer
                  url={data.videoURL}
                  className={css`
                    /* width: 80% !important; */
                    margin: 40px 0;
                    ${mobile} {
                      width: 100% !important;
                    }
                  `}
                />
              </>
            )}

            <Line />
            <Magnifier
              src={data.graphicURL}
              mgShape="square"
              zoomFactor={0.6}
              mgWidth={300}
              mgHeight={300}
              mgShowOverflow={false}
              className={css`
                margin: 40px 0;
                max-width: 500px;
              `}
            />
            <Line />
            <Card cardData={data.articleCards}> </Card>
            <div
              className={css`
                background-color: black;
                min-height: 60px;
                width: 100%;
                padding: 30px;
                box-sizing: border-box;
                color: white;
                text-align: center;
                ${mobile} {
                  font-size: 12px;
                }
              `}
            >
              <div>Published February 7th, 2020.</div>
              <div>
                Developed by Max Wu, Jay Park, Henry Trinh, Janis Chen, Meilin
                Cui, Matthew Ko, and Amy Seo. Developed by Lauren Ho.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
