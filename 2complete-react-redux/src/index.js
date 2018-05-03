import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// have list of all reducers, grab and pass as argument
// to createStoreWithMiddleware(), the store is going to be created with all the reducers
import reducers from "./reducers";

import App from "./App";

// trigger fn, call applyMiddleware, going to do somehthing with
// createStore
const createStoreWithMiddleware = applyMiddleware()(createStore);
/* this fn, createStoreWithMiddleware(), takes an argument, a list of all the reducers, need a common place where they can all be combined so only pass one argument, so index is going to combine all the reducers and pass to the provider */
render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
/*
Wrap whole app in provider, then connect the provider with redux, using storeseea bove, like props. Inside store we need to pass a fn that is going to start all this behaviour, a trigger fn. Will do something with createStore, will create a store with middleware
Summary: we call the provider, create store and create an instance of the applying middleware and the created store, and we pass it to the store.
Can use a template to do this.
Action creator called first, going to return an object with a type and a payload.
So, this object is going to go to all the reducers and it's going to search for a reducer we manually create with this action. Then it's going to update the redux state, and once the state is updated, redux is going to re-render with the new info.

*/
