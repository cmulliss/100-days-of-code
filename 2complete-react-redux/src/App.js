import React, { Component } from "react";
import MoviesList from "./containers/movies_list";

class App extends Component {
  render() {
    return (
      <div>
        <MoviesList />
      </div>
    );
  }
}

export default App;

/* whenever component loaded on screen, we want to call to this action and this action is going to go the reducer, upddate the state, catch that new state so we can render the info here. Component mounts and we call the action creator, call fn, moviesList. */

//create renderList fn, argument is the list of movies. Can't map null, so use a conditional to check

// call to a fn to iterate array, renderList is going to take whatever we have inside mmap.state.props, ie movies. Main idea of mapStateToProps is to make movies available inside props

// converting the redux state to props, will return an object, whatever we want ot have available as props. Since I want to get movies, just going to call it movies, which is going to be the data we want to have, it's going to be inside the redux state and not the react state. In the index, everthing will be stored inside something called movies.

// we imported actions at top

/*
This is where we connect the action creators and reducers
First need 'connect', the second thing is to call to an action creator, need to import the action creator, so can use it, 2 different ways to do this)

In react, from a component, we can access the parent state with this.props, BUT redux state and react state are different.
To use redux state with this.props, we need a way to inject the redux state in this.props so we can access the data.
So have fn provided by redux, mapstateToProps, converting the redux state to props.
Going to return some data, an object, movies in this case, from within the redux state.
Everything will be stored in 'movies' in the redux state. 
Go to reducers index file, it's going to be stored n something that calls movies. I want to make reference to this.props.movies and I should be getting whatever I have inside this state (of redux) state.movies. 
So we grab whatever we have within redux state, that calls movies and we can access through this.props movies with this.
So, in the app, we have movies, and want to make reference to thuis.props.movies, and I should be getting whatever is inside this.state.movies (of redux).
Still getting an error, so mapStateToRedux needs something more to connect with redux. Chnge from exporting default App, but making use of connect instead. 
We imported all the actions, connect is going to make all the actions available, everthing in moviesList, so we can use it as this.props.moviesList. Is going to call to the action creators, and after redux state has updated, it's going to use the mapStateToProps, everthing available inside this.state.props.

We get null first, in main reducer, but after the compoenent is loaded, will go again and call the moviesList, then to to the action creator which will send all the data to the reducer and the reducer will update the state with whatever payload we have.
Then going to mapStateToProps and catching all the data.
So inside render we can create a fn, to just output all this info.

Containers, a container is just a component directly connected to redux state. 
*/
