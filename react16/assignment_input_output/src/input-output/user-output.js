import React from "react";

const userOutput = (props) => {
  return (
    <div>
      <p>My username is {props.username}</p>
      <p>My username is {props.newUserName}</p>
    </div>
  );
};

export default userOutput;
