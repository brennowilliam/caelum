import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Semantic UI Styles
import "semantic-ui-css/semantic.min.css";

// Router
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
