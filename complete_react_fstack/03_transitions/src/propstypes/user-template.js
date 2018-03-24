import React from "react";
import PropTypes from "prop-types";

const UserTemplate = (props) => {
  // console.log(props);
  return <div>user template</div>;
};

UserTemplate.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.array,
  spanish: PropTypes.bool,
  message: PropTypes.func,
  car: PropTypes.object
};

export default UserTemplate;
/* pulling in props from user.js, console.log
shows the state from parent component,
{name: "Motley", lastName: "Penguin", age: 11},
so now this component is using proptypes to
check the info we get and props. Use 
immediately after component.
*/
