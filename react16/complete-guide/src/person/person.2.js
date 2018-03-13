import React from "react";
import "./person.css";

const Person = (props) => {
  //const randomAge = Math.floor(Math.random() * 30);
  // input onChange, need to execute a method passed down
  // from the App.js file.
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am {props.name} and I am
        {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
/*
<input type="text" onChange={props.changed} value={props.name} />
value={props.name} sets up 2 way binding, as shows existing name. We want to setup 2 way binding, when we change it, we want to propagate that change so that we can update the state, but we also want to see the current state right from the start. To do this set value equal to props.name. Now have 2 way binding setup. We listen to changes, call the change method which refers to the nameChangeHandler, which updates the state and we passed down the state to the person with name and age and we output the name as the value of the input. This now allows us to show the value from the start.

const randomAge = Math.floor(Math.random() * 30);

<div className="Person">I am a person and I am {randomAge} years
*/
