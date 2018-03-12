import React from "react";

const userOutput = (props) => {
  return (
    <div>
      <p>My name is {props.newName}</p>
      <p>My new user is {props.changed} </p>
    </div>
  );
};

export default userOutput;
