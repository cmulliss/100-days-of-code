import React from "react";

const Person = (props) => {
  // const randomAge = Math.floor(Math.random() * 30);
  return (
    <div>
      <p onClick={props.click}>
        I am {props.name}, I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default Person;
