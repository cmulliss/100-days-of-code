import React from "react";
import { Link } from "react-router-dom";

// not taking any props, using Link
// to take us to home
const Header = () => {
  return (
    <Header>
      <Link to="/">Music Db</Link>
    </Header>
  );
};

export default Header;
