import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';

// myapp.com/posts
// myapp.com/profile/posts

const App = () => {
    return (
        <BrowserRouter>
        <div>
        <header>
        <Link to="/">Home</Link><br />
        <Link to="/Posts">Posts</Link><br />
        <Link to={{
            pathname:'/profile'
        }}>Profile</Link><br />
        <hr />
        </header>
        <Route exact path="/" component={Home}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/profile" component={Profile}/>
            </div>
        </BrowserRouter>
    )
}
render(<App />, document.querySelector('#root'));
/*
<Link to={{
pathname:'/profile',
hash: '#motley',
search: '?profile=true'
 }}>Profile</Link><br />
*/
