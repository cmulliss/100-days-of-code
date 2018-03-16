import React from "react";
import { Link } from "react-router-dom";

import Card from "../hocs/card";
import Auth from "../hocs/auth";

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
    <Auth>
      <Card>
        <Link
          to={{
            pathname: `${props.match.url}/posts`
          }}
        >
          Take me to /profile/posts
        </Link>
      </Card>
    </Auth>
  );
};
export default Profile;
/* Profile is returning a link, in jsx, can use
a HOC to show a template of this.
Create card.js, want to wrap this and send back to
card, then render the content inside the template
can do with props.children.
Import card component, then in card.js, will receive 
props from profile.js, and render {props.children}
So, card is a HOC of all the content within <Card />
*/
