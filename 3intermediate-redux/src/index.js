import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";

import reducers from "./reducers";

import App from "./components/app";
import Car from "./components/car";

const CreateStoreWithMiddleware = applyMiddleware()(createStore);

render(
  <div>
    <Provider store={CreateStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/car/id" component={Car} />
        </div>
      </BrowserRouter>
    </Provider>
  </div>,
  document.getElementById("root")
);
