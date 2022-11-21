import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Pages from "./router.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Header /> */}
      <Pages />
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
