import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./App";

// trigger fn
const createStoreWithMiddleware = applyMiddleware()()

render(
  <Provider store={}>
    <App />
  </Provider>,
  document.getElementById("root")
);
/*
Wrap whole app in provider, then connect the provider with redux, suing store. Inside store we need to pass a fn what is going to start all this behaviour, a trigger fn. Will do something with createStore.
*/
