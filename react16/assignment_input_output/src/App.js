import React, { Component } from "react";

import UserInput from "./input-output/user-input";
import UserOutput from "./input-output/user-output";

import "./App.css";

class App extends Component {
  state = {
    userName: "Motley"
  };
  inputChangeHandler = (event) => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <div>
        <UserInput
          changed={this.inputChangeHandler}
          currentName={this.state.userName}
        />
        <UserOutput username="Mot" />
        <UserOutput newUserName={this.state.userName} />
      </div>
    );
  }
}

export default App;
