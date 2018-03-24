import React from "react";

import userHoc from "../hocs/userHoc";
// when we run this, we actually call userHoc
// not user.
const User = () => {
  return <div>User 1</div>;
};
// wrapped component and argument
export default userHoc(User, "Hello");
