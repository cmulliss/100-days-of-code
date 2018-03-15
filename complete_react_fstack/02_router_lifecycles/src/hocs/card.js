import React from "react";

const Card = (props) => {
  const style = {
    background: "pink"
  };

  return (
    <Card>
      <div style={style}>
        {props.children}
        card
      </div>
    </Card>
  );
};

export default Card;
/*
we want ot include this card component, 
grab whatever from profile.js, send it back
to card and render the content inside 
that template. Can do this with 
props.children. import Card component into
profile.js, 

*/
