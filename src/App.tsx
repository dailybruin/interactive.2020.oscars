import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Poll from "./components/Poll/Poll";
import Question from "./components/Question/Question";
import PollNumber from "./components/PollNumber/PollNumber";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Question></Question>
        <Poll></Poll>
        <PollNumber></PollNumber>
      </header>
    </div>
  );
};

export default App;
