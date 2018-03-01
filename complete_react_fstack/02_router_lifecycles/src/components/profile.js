import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    console.log(props)

    props.history.push('/')

    return (
        <div>
        <Link to={{
            pathname: `${props.match.url}/posts`
        }}>Take me to /profile/posts</Link>
        </div>
    )
}
 
export default Profile;
// dynamic url