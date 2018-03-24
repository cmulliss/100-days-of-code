import React from "react";

/* pass the props from react-router, are entering
this userHOC, and then we returned the fn, with 
the props. Also need to pass the props from 
react-router to the next commponent in the list
WrappedComponent, use rest operator
*/
const userHoc = (WrappedComponent, arg1) => {
  return (props) => (
    <div>
      {console.log(props)}
      {arg1}
      <WrappedComponent {...props} />
    </div>
  );
};

export default userHoc;
// job of this component is just to return the
// function, userHoc.
