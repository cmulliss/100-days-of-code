import React from "react";
import PropTypes from "prop-types";

const UserTemplate = (props) => {
  // console.log(props);
  return <div>user template</div>;
};

// oneOfType to check for an array
// custom, see mother, 3 args
UserTemplate.propTypes = {
  name: PropTypes.oneOf(["Motley", "Cherry"]),
  lastname: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(["Penguin", "Me"])
  ]),
  age: PropTypes.number.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  spanish: PropTypes.bool,
  message: PropTypes.func,
  car: PropTypes.object,
  mother: function(props, propName, componentName) {
    //console.log(props, propName, componentName);
    if (props[propName] !== "Sue") {
      // console.log("No");
      return new Error(
        `The name is ${props[propName]} is incorrect. Should be Susan`
      );
    }
  }
};

export default UserTemplate;
/* pulling in props from user.js, console.log
shows the state from parent component,
{name: "Motley", lastName: "Penguin", age: 11},
so now this component is using proptypes to
check the info we get and props. Use 
immediately after component.
*/
