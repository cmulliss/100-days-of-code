import React, { Component } from "react";

import UserInput from "./input-output/user-input";
import UserOutput from "./input-output/user-output";

import "./App.css";

class App extends Component {
  state = {
    username: "Motley"
  };
  changeUserNameHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div>
        <UserInput changed={this.changeUserNameHandler} />
        <UserOutput name="Me" />
        <UserOutput currentName={this.state.username} />
        <UserOutput />
      </div>
    );
  }
}

export default App;
