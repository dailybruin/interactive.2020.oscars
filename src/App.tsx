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

import { css } from "emotion";
import styled from "styled-components";
import { colors, mediaQueries } from "./shared/config";

const Line = styled("div")`
  height: 3px;
  width: 100%;
  background-color: ${colors.line};
`;

const graph_data = {
  datasets: [
    {
      data: [1, 2, 3],
      backgroundColor: ["#F6D58B", "#abcdef", "green"],
      label: "Dataset 1"
    }
  ],
  labels: ["hi", "bye", "yeet"]
};

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
    const { mobile } = mediaQueries;
    return (
      <div
        className={css`
          background-color: black;
          padding: 0 15%;
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
          <PollWrapper />
          <ChartCard userData={graph_data} dbData={graph_data} />
          <Line />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=6TfYqksI6hE"
            className={css`
              width: 100% !important;
            `}
          />
          <Line />
          {/*graphic*/}
          <Line />
          <Card cardData={data.articleCards}> </Card>
        </div>
      </div>
    );
  }
}
