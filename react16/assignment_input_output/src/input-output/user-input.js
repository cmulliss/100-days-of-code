import React from "react";

const userInput = (props) => {
  return (
    <div>
      <input onChange={props.changed} value={props.currentName} />
    </div>
  );
};

export default userInput;
