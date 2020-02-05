import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Poll from "./components/Poll/Poll";
import Question from "./components/Question/Question";
import PollNumber from "./components/PollNumber/PollNumber";
import TitleImage from "./components/TitleImage/TitleImage";

const TitleImageProps = {
  credit: "by this author",
  imgTitle: "WE PREDICTED THE WINNERS",
  imgCaption:
    "yes we predicted the oscars yes we predicted the oscars yes we predicted the oscars",
  imgURL: "imagfeurl"
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
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
