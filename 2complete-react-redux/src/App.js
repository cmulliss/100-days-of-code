import React, { Component } from "react";
import { connect } from "react-redux";

// import action creators
import * as actions from "./actions";

class App extends Component {
  componentWillMount() {
    this.props.moviesList();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello World</h1>
        </header>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    movies: state.movies
  };
}

export default App;
/*
This is where we connect the action creators and reducers
First need 'connect', the second thing is to call to an action creator, need to import the action creator, so can use it, 2 different ways to do this)

In react, from a component, we can access the parent state with this.props, BUT redux state and react state are different.
To use redux state with this.props, we need a way to inject the redux state in this.props so we can access the data.
So have fn provided by redux, mapstateToProps, converting the redux state to props.
Going to return some data, an object, movies in this case, from within the redux state.
Everything will be stored in 'movies' in the redux state. 
Got to reducers index file, it's going to be stored n something that calls movies. I want to make reference to this.props.movies and I should be getting whatever I have inside this state (of redux) state.movies. 
So we grab whatever we have within redux state, that calls movies and we can access through this.props movies with this.




*/
