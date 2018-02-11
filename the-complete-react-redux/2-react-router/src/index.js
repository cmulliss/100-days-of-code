import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';

import Posts from './components/posts';
import Profile from './components/profile';
import PostsItem from './components/posts_item';
import NotFound from './components/404';


class App extends Component {
    render () {
        return <div>home</div>
    }
}
render(
    <BrowserRouter>
    <div>
    <header>
        <NavLink to="/" activeStyle={{color: 'red'}}
        activeClassName="selected">Home</NavLink><br />
        <NavLink to="/posts">Posts</NavLink><br />
        <NavLink to="/profile">Profile</NavLink>
        <hr />
    </header>
    <Switch>
    <Route path="/posts/:id" component={PostsItem}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/posts" component={Posts}/>
    <Route exact path="/" component={App}/>
    <Route path="*" component={NotFound}/>
    </Switch>
    </div>
    </BrowserRouter>, 
    document.querySelector('#root'));

    /* the parent component is always BrowserRouter
    NavNavLink is a replacement for NavLink if we have Nav
    inside our Header. It is going to give us 2 different 
    properties we can use, activeStyle (buggy) and activeClassName, better, use this.
    */

