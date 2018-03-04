import React from 'react';
import { render } from 'react-dom';
// BrowserRouter reacts with the URL history
// Route executes whatever the BrowserRouter passes 
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';

// wrap everything in BrowserRouter tag
// each Route has a path
//links in header
// pass object with rules inside profile

// myapp.com/posts
// myapp.com/profile/posts
/// want link to take me to profile/posts, not just posts
//needs dynamic solution, go to profile.js
const App =  () => {
    return (
        <BrowserRouter>
        <div>
        <header>
            <Link to="/">Home</Link><br />
            <Link to="/Posts">Posts</Link><br />
            <Link to={{
                pathname: '/profile',
              //  hash: '#motley',
               // search: 'profile=true'
            }}>Profile</Link>
            <hr  />
        </header>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:id/:username" component={PostItem} />
            <Route path="/profile" component={Profile} />
            
            </div>
        </BrowserRouter>
    )
}
render(<App />, document.querySelector('#root'))
// using : gives dynamic id, and perhaps username
//<Route path="/posts/:id/:username" component={PostItem} />
// colons give params
// how to grab it inside PostItem, 