import React from "react";

const userOutput = (props) => {
  return (
    <div>
      <p>My name is {props.name}</p>
      <p>My new user is {props.name} </p>
    </div>
  );
};

export default userOutput;
