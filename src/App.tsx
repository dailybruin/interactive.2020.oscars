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

const TitleImageProps = {
  credit: "by this author",
  imgTitle: "WE PREDICTED THE WINNERS",
  imgCaption:
    "yes we predicted the oscars yes we predicted the oscars yes we predicted the oscars",
  imgURL: "imagfeurl"

var data = {
  datasets: [
    {
      data: ["1"],
      backgroundColor: ["#F6D58B"],
      label: "Dataset 1"
    }
  ],
  labels: ["hi"]
};

const headProps = {
  titleText: "the oscars oo",
  captionText: "little words go with title :3"
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header
          titleText={headProps.titleText}
          captionText={headProps.captionText}
        />
        <ChartCard userData={data} dbData={data} />
        <br></br>
        <Card> </Card>
        <img src={logo} className="App-logo" alt="logo" />
        <TitleImage
          credit={TitleImageProps.credit}
          imgTitle={TitleImageProps.imgTitle}
          imgCaption={TitleImageProps.imgCaption}
          imgURL={TitleImageProps.imgURL}
        ></TitleImage>
        <Question></Question>
        <Poll></Poll>
        <PollNumber></PollNumber>
      </header>
    </div>
  );
};

export default App;
