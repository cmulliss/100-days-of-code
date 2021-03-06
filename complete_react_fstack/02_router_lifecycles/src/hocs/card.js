import React from "react";

// receiving some props
const Card = (props) => {
  const style = {
    background: "lightgrey"
  };
  // receiving props, returning a div
  return <div style={style}>{props.children}</div>;
};

export default Card;
/*
we want to include this card component, 
grab whatever from profile.js, as props.children, 
send it back to card and render the content inside 
that template. Can do this with props.children,
import Card component into profile.js

*/
