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
  // need to use this => es6 syntax, or 'this' won't refer
  // to the class at runtime
  switchNameHandler = () => {
    //console.log("was clicked");
    //now want to manipulate state on a click
    //setState will merge with existing data
    this.setState({
      persons: [
        { name: "Motley", age: 170 },
        { name: "Pinguin", age: 7 },
        { name: "Feathers", age: 100 }
      ]
    });
  };
  // method to pass down to person.js
  // will get an event object, but still want to change
  // the state, need to pass nameChangedHandler to the
  // second person as props

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Motley", age: 170 },
        { name: event.target.value, age: 7 },
        { name: "Feathers", age: 100 }
      ],
      otherstate: "some other value",
      showPersons: false
    });
  };
  // will use a ternary operator around Person list
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };
  render() {
    return (
      <div className="App">
        <h1>I am a react app</h1>
        <button className="myButton" onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {this.state.showPersons === true ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            >
              My hobby is reading
            </Person>
          </div>
        ) : null}
      </div>
    );
  }
}
// can access state in render method using 'this'
// which refers to the class
// can pass a referene to this handler as property
// to our component, click={}

/*how pass newName? Can use bind to handle 'this'
  and use a list or arguments passed into our function
  as one way of passing an argument.
  Also, can use => and pass arguments directly. 
  Is an anonymous function, that doesn't get called 
  until clicked, so can use ()
  May be better to use bind, depending on size of app
  as can be inefficient without.
  */
