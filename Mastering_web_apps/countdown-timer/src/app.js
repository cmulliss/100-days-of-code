import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

import Clock from "./clock";
import "./app.css";

class App extends Component {
  state = {
    deadline: "December 25, 2018",
    newDeadline: ""
  };
  changeDeadline() {
    console.log("state", this.state);
    this.setState({ deadline: this.state.newDeadline });
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl
            className="Deadline-input"
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
