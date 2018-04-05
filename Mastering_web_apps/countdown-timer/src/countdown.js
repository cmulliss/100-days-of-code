import React, { Component } from "react";

import "./app.css";

class CountdownTimer extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  // prevents infinite loop, just runs once
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  // runs after and allows us to keep updating timer
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log("time", time);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.setState({
      // es6, if key and value the same can use one only
      days,
      hours,
      minutes,
      seconds
    });
  }

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <div className="clock">{this.leading0(this.state.days)} Days</div>
        <div className="clock">{this.leading0(this.state.hours)} Hours</div>
        <div className="clock">{this.leading0(this.state.minutes)} Minutes</div>
        <div className="clock">{this.leading0(this.state.seconds)} Seconds</div>
      </div>
    );
  }
}

export default CountdownTimer;
