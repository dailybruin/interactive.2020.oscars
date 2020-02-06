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

import { css } from "emotion";

const TitleImageProps = {
  credit: "by this author",
  imgTitle: "WE PREDICTED THE WINNERS",
  imgCaption:
    "yes we predicted the oscars yes we predicted the oscars yes we predicted the oscars",
  imgURL: "imagfeurl"
};

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

const headProps = {
  titleText: "the oscars oo",
  captionText: "little words go with title :3"
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
    console.log(data);
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <Header titleText={data.siteTitle} captionText={data.siteDescription} />
        <TitleImage
          credit={data.Author}
          imgTitle={data.Headline}
          imgCaption={data.blurb}
          imgURL={data.imageURL}
          imgAlt={data.imageAlt}
        ></TitleImage>
        <PollWrapper />
        <ChartCard userData={graph_data} dbData={graph_data} />
        <br></br>
        <Card cardData={data.articleCards}> </Card>
      </div>
    );
  }
}
