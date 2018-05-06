import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/app.js";
import Car from "./components/car.js";

render(<App />, document.getElementById("root"));
