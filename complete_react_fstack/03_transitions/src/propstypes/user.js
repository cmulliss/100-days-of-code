import React, { Component } from "react";
// passing props to this child component
import UserTemplate from "./user-template";

export default class User extends Component {
  state = {
    name: "Motley",
    lastName: 22,
    age: 11,
    hobbies: ["run", "read", "code"],
    spanish: false,
    mother: "Sue",
    color: "red",
    message() {
      console.log("Hi");
    },
    car: {
      brand: "Ford",
      model: "Focus"
    }
  };
  changeColor() {
    this.setState({
      color: "blue"
    });
  }
  render() {
    const style = {
      color: this.state.color
    };
    return (
      <div>
        <h4 style={style}>{this.state.mother}</h4>
        <div onClick={() => this.changeColor()}>Change Color</div>
        <UserTemplate {...this.state} />
      </div>
    );
  }
}
/* Going to be passing everything from the state
to the child component, If we want to pass the 
whole state of this component to the child component
as props, use spread operator */
