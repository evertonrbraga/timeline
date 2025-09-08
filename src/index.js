import React from "react";
import { render } from "react-dom";
import { Dashboard } from "./pages/dashboard";

const App = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

render(<App />, document.getElementById("root"));
