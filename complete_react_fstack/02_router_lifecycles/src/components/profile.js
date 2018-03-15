import React from "react";
import { Link } from "react-router-dom";

import Card from "../hocs/card";

//BrowserRouter is going to give props with all the
//info about the routes and whatever you are using
//want a dynamic URL, from link, can see from console
// so always getting dynamic url.

// create a redirect fn, needs to be returned to run
// got lot of stuff in props, so can use history
// push back to "/", is executing fn (below) and
// changing the history of the browser

const Profile = (props) => {
  const redir = () => {
    //props.history.push('/')
  };

  console.log(props);

  return (
    <Card>
      <Link
        to={{
          pathname: `${props.match.url}/posts`
        }}
      >
        Take me to /profile/posts
      </Link>
    </Card>
  );
};
export default Profile;
