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

  // method to pass down to person.js
  // will get an event object, but still want to change
  // the state, need to pass nameChangedHandler to the
  // second person as props

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    this.setState({
      persons: [
        { id: "0", name: "Motley", age: 170 },
        { id: "1", name: event.target.value, age: 7 },
        { id: "2", name: "Feathers", age: 100 }
      ],
      otherstate: "some other value",
      showPersons: false
    });
  };
  // spreads out list of elements in array into a list
  // of elements which gets added to the new array,
  // with the objects from the old array
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };
  render() {
    // can do this as just js, not jsx as not in return
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>I am a react app</h1>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
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
