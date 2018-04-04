import React, { Component } from "react";

import "./app.css";

class CountdownTimer extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log("time", time);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    console.log("days", days, "seconds", seconds);
    this.setState({ days: days });
  }

  render() {
    //this.getTimeUntil(this.props.deadline);
    console.log("this.props", this.props);
    return (
      <div>
        <div>
          <div className="clock">days: {this.state.days}</div>
          <div className="clock">hours: {this.state.hours}</div>
          <div className="clock">minutes: {this.state.minutes}</div>
          <div className="clock">seconds: {this.state.seconds}</div>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;
