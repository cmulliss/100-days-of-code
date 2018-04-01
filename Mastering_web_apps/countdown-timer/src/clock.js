import React, { Component } from "react";

import "./app.css";

export default class Clock extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  // to avoid infinite loops
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 100);
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

    // keys and values are same so es6, can just use one
    // instead of days: days etc
    this.setState({ days, hours, minutes, seconds });
  }
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <div className="clock-days">{this.leading0(this.state.days)} Days</div>
        <div className="clock-hours">
          {this.leading0(this.state.hours)} Hours
        </div>
        <div className="clock-minutes">
          {this.leading0(this.state.minutes)} Minutes
        </div>
        <div className="clock-seconds">
          {this.leading0(this.state.seconds)} Seconds
        </div>
      </div>
    );
  }
}
