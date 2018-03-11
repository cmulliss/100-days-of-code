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
  // can pass a referene to this handler as property
  // to our component, click={}
  switchNameHandler = (newName) => {
    //console.log("was clicked");
    this.setState({
      persons: [
        { name: newName, age: 17 },
        { name: "Pengy", age: 9 },
        { name: "Feathers", age: 11 }
      ]
    });
  };
  // use default event object
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Motley", age: 17 },
        { name: event.target.value, age: 9 },
        { name: "Feathers", age: 11 }
      ]
    });
  };
  /*how pass newName? Can use bind to handle 'this'
  and use a list or arguments passed into our function
  as one way of passing an argument.
  Also, can use => and pass arguments directly. 
  Is an anonymous function, that doesn't get called 
  until clicked, so can use ()
  May be better to use bind, depending on size of app
  as can be inefficient without.
  */
  render() {
    const myStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>I am a react app</h1>
        <button
          style={myStyle}
          onClick={this.switchNameHandler.bind(this, "Penguin")}
        >
          Switch Name
        </button>
        <p />
        <button onClick={() => this.switchNameHandler("Mot!!")}>
          Switch Name 2
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My hobby is reading
        </Person>
      </div>
    );
  }
}
