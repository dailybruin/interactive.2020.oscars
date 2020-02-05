import React from "react";
import "./App.css";
import Poll from "./components/Poll/Poll";
import Question from "./components/Question/Question";
import PollNumber from "./components/PollNumber/PollNumber";
import ChartCard from "./components/ChartCard/ChartCard";
import Card from "./components/Card/Card";
<<<<<<< Updated upstream
=======
import Header from "./components/Header/Header";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======

const headProps = {
  titleText: "the oscars oo",
  captionText: "little words go with title :3"
};
>>>>>>> Stashed changes

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
<<<<<<< Updated upstream
=======
        <Header
          titleText={headProps.titleText}
          captionText={headProps.captionText}
        />
>>>>>>> Stashed changes
        <ChartCard userData={data} dbData={data} />
        <br></br>
        <Question></Question>
        <Poll></Poll>
        <PollNumber></PollNumber>
        <Card> </Card>
      </header>
    </div>
  );
};

export default App;
