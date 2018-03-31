import React, { Component } from "react";

import "./app.css";

class App extends Component {
  state = {
    deadline: "December 25, 2018",
    newDeadline: ""
  };
  changeDeadline() {
    console.log("state", this.state);
  }
  render() {
    return (
      <div className="App">
        <div>
          <div className="App-title">Countdown to {this.state.deadline}</div>
          <div className="clock-days">days</div>
          <div className="clock-hours">hours</div>
          <div className="clock-minutes">minutes</div>
          <div className="clock-seconds">seconds</div>
        </div>
        <input
          placeholder="new date"
          onChange={(event) =>
            this.setState({ newDeadline: event.target.value })
          }
        />
        <button onClick={() => this.changeDeadline()}>Submit</button>
      </div>
    );
  }
}

export default App;
