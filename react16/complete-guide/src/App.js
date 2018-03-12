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

  render() {
    return (
      <div className="App">
        <h1>I am a react app</h1>
        <button>Switch Name</button>
        <p />
        <button>Switch Name 2</button>
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
          My hobby is reading
        </Person>
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
