import React from "react";

import "./App.css";

import Poll from "./components/Poll/Poll";
import Question from "./components/Question/Question";
import PollNumber from "./components/PollNumber/PollNumber";
import Header from "./components/Header/Header";

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
        <Question></Question>
        <Poll></Poll>
        <PollNumber></PollNumber>
      </header>
    </div>
  );
};

export default App;
