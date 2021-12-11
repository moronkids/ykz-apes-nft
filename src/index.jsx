import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//global state
import Hooks from "providers";
ReactDOM.render(
  <React.StrictMode>
    <Hooks>
      <App />
    </Hooks>
  </React.StrictMode>,
  document.getElementById("root")
);
