import React from 'react';
import { Link } from 'react-router-dom';

//BrowserRouter is going to give props with all the
//info about the routes and whatever you are using
//want a dynamic URL, from link, can see from console
// so always getting dynamic url.

const Profile = (props) =>  {
    console.log(props);

    return(
        <div>
        <Link to={{
            pathname: `${props.match.url}/posts`
        }}>Take me to /profile/posts</Link>
        </div>
    )
}
export default Profile;