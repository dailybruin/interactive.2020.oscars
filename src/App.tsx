import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Poll from "./components/Poll/Poll";
import Question from "./components/Question/Question";
import PollNumber from "./components/PollNumber/PollNumber";
import ChartCard from "./components/ChartCard/ChartCard";


var data = {
  datasets: [
    {
      data: [
        '1'
      ],
      backgroundColor: [
        "#F6D58B"
      ],
      label: 'Dataset 1',
    },
  ],
  labels: [
    'hi'
  ],
}
import Card from "./components/Card/Card";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ChartCard userData = {data} dbData = {data}/>
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
