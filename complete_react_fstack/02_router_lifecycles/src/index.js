import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
//import { HashRouter, Route, Link } from 'react-router-dom';
//import { MemoryRouter, Route, Link } from 'react-router-dom';



import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';

// myapp.com/posts
// myapp.com/profile/posts

const App = () => {
    return (
        <BrowserRouter>
        <div>
        <header>
        <NavLink to="/">Home</NavLink><br />
        <NavLink to="/Posts"
        activeStyle={{color:'red'}}
        activeClassName="selected"
        >Posts</NavLink><br />
        <NavLink to={{
            pathname:'/profile'
        }}>Profile</NavLink><br />
        <hr />
        </header>
        <Switch>
            
            <Route path="/posts/:id/:username" component={PostItem}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/" component={Home}/>
            </Switch>
            </div>
        </BrowserRouter>
    )
}
render(<App />, document.querySelector('#root'));
{/* 
NavLinks give 'activeStyle' option

SWitch, all the most specific routes at top of list
least at bottom.

<Redirect from="/profile" to="/" />

set of rules inside an object
<NavLink to={{
pathname:'/profile',
hash: '#motley',
search: '?profile=true'
 }}>Profile</NavLink><br />

  import NotFound from './components/404';
    <Route path="*" component={NotFound}/>
*/}
