import React from "react";
import { render } from "react-dom";
// BrowserRouter reacts with the URL history
// Route executes whatever the BrowserRouter passes
//can use HashRouter instead
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
//MemoryRouter, wont change URL, everything stored in memory
//import { MemoryRouter, Route, Link } from 'react-router-dom';
// can use NavLink instead of Link, get additional options
// such as activeStyle
import Home from "./components/home";
import Posts from "./components/posts";
import Profile from "./components/profile";
import PostItem from "./components/post_item";
import Life from "./components/lifecycles";
import Conditional from "./components/conditional";
import User from "./components/user";
// wrap everything in BrowserRouter tag
// each Route has a path
//NavLinks in header
// pass object with rules inside profile
// myapp.com/posts
// myapp.com/profile/posts
/// want NavLink to take me to profile/posts, not just posts
//needs dynamic solution, go to profile.js
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink to="/">Home</NavLink>
          <br />
          <NavLink
            to="/Posts"
            activeStyle={{ color: "red" }}
            activeClassName="selected"
          >
            Posts
          </NavLink>
          <br />
          <NavLink
            to={{
              pathname: "/profile"
              //  hash: '#motley',
              // search: 'profile=true'
            }}
          >
            Profile
          </NavLink>
          <br />
          <NavLink to="/lifecycles">Life Cycles</NavLink>
          <br />
          <NavLink to="/conditional">Conditional</NavLink>
          <br />
          <NavLink to="/user">User</NavLink>
          <hr />
        </header>
        <Switch>
          <Route path="/lifecycles" component={Life} />
          <Route path="/conditional" component={Conditional} />
          <Route path="/posts/:id/:username" component={PostItem} />
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/user" component={User} />
          <Route exact path="/" component={Home} />
          <Route render={() => <h3>oops, 404 not found!</h3>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
render(<App />, document.querySelector("#root"));
// using : gives dynamic id, and perhaps username
//<Route path="/posts/:id/:username" component={PostItem} />
// colons give params
// how to grab it inside PostItem
// can replace 'exact', can use switch. Wrap all routes
// inside switch, go to 1st match, so put home at bottom
// put the least specific routes at end of chain
// 404, ideally create a component
