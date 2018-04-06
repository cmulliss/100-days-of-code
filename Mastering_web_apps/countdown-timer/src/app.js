import React, { Component } from "react";
import { Form, FormControl, button } from "react-bootstrap";

import CountdownTimer from "./countdown";
import "./app.css";

class App extends Component {
  state = {
    deadline: "25 December 2018",
    newDeadline: "7 June 2018"
  };

  changeDeadline() {
    console.log("state", this.state);
    this.setState({ deadline: this.state.newDeadline });
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">countdown to {this.state.deadline}</div>
        <CountdownTimer
          deadline={this.state.deadline}
          newDeadline={this.state.newDeadline}
        />
        <Form inline>
          <FormControl
            className="deadline-input"
            placeholder="new date"
            onChange={(event) =>
              this.setState({ newDeadline: event.target.value })
            }
          />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </Form>
      </div>
    );
  }
}

export default App;
/*
<input
          placeholder="new date"
          onChange={(event) => console.log("event", event.target.value)}
        />
*/
