import React from "react";

const Conditional = () => {
  const returnValue = () => {
    return true;
  };
  // can use ternary operator
  // or can use a fn
  const showIt = () => {
    return returnValue() ? (
      <div>Hello, it&apos;s true</div>
    ) : (
      <div>Hello, it&apos;s false</div>
    );
  };

  return <div>{showIt()}</div>;
};
export default Conditional;
