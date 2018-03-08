import React from "react";

const Person = props => {
  const randomAge = Math.floor(Math.random() * 30);
  return (
    <div>
      <p>I am randomly {randomAge} years old!</p>
      <p>{props.children}</p>
      <p>
        I am a {props.name}, I am {props.age} years old
      </p>
      <p />
    </div>
  );
};

export default Person;
