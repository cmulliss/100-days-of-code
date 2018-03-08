import React, { Component } from "react";
import Person from "./person/person";
import "./App.css";

export default class App extends Component {
  state = {
    persons: [
      { name: "Motley", age: 17 },
      { name: "Pingu", age: 7 },
      { name: "Feathers", age: 10 }
    ]
  };
  // can access state in render method using 'this'
  // which refers to the class
  switchNameHandler = () => {
    console.log("was clicked");
  };
  render() {
    return (
      <div className="App">
        <h1>I am a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My hobbby is reading
        </Person>
      </div>
    );
  }
}
