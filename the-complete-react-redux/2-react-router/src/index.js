import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Components
import Posts from './components/posts';
import Profile from './components/profile';


class App extends Component {
    render () {
        return (
            <div>
               home 
            </div>
        )
    }
}

//export default App;

render(
    <BrowserRouter>
    <div>
    <header>
    <Link to="/">Home</Link><br />
    <Link to="/posts">Posts</Link><br />
    <Link to="/profile">Profile</Link>
    </header>
    <Route exact path="/" component={App} ></Route>
        <Route path="/posts" component={Posts}></Route>
        <Route path="/profile" component={Profile}></Route>
    </div>
    </BrowserRouter>, 
    document.querySelector('#root'));
