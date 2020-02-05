import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Poll from "./components/Poll/Poll";
import Question from "./components/Question/Question";
import PollNumber from "./components/PollNumber/PollNumber";
import ChartCard from "./components/ChartCard/ChartCard";
import PollWrapper from "./components/PollWrapper/PollWrapper";
import Card from "./components/Card/Card";

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

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ChartCard userData={data} dbData={data} />
        <br></br>
        <Card> </Card>
        <img src={logo} className="App-logo" alt="logo" />
        <PollWrapper></PollWrapper>
        <Card></Card>
      </header>
    </div>
  );
};

export default App;
