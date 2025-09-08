import React from "react";
import { render } from "react-dom";
import timelineItems from "./data/timelineItems";
import { TimeBlock } from "./components/TimeBlock";

const App = () => (
  <div>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <TimeBlock />
  </div>
);

render(<App />, document.getElementById("root"));
