import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    console.log(props)
    return (
        <div>
        <Link to="/posts">Take me to /profile/posts</Link>
        </div>
    )
}
 
export default Profile;