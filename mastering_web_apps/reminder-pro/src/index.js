import React, { Component } from "react";
import { render } from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
