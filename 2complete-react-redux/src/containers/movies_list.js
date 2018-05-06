import React, { Component } from "react";
import { connect } from "react-redux";
// import action creators
import * as actions from "../actions";

class MoviesList extends Component {
  componentWillMount() {
    this.props.moviesList();
  }
  renderList = (movies) => {
    if (movies) {
      return movies.map((movie) => {
        return <div>{movie.name}</div>;
      });
    }
  };
  render() {
    return <div>{this.renderList(this.props.movies)}</div>;
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    movies: state.movies
  };
}
// we imported actions at top
export default connect(mapStateToProps, actions)(MoviesList);

/* this is a container, in src/containers/movies_list.js
A container is just a component that is directly connected to redux state.
Redux is going to advise you to store all the components related to the redux state in containers.
1. Create a folder, containers, put a file, movies_list.js inside the containers folder.
2. Copy most of app.js into this container file.
3. Then in app.js make ref to this new file <MoviesList /> and import it too at top of app.js
4. Change App to MoviesList
5. NB: are splitting everything up for performance
6. 

*/

/* In render, call to a fn, renderList, that is going to iterate this array. Create renderLiist fn, will take whatever we have in mapStateToProps,in this case movies, and the main idea of mapStateToProps is to make this.movies available inside props, so can do this.props.movies.  Will take as argument the list of movies
with conditional to check if empty or not. Create renderLiist fn, is going to take as an argument the list of movies. 

Summary:
1. We have the reducers and the action creators
2. We imported connect from react-redux, so we can make a connection between this component, the action creators then the reducers
3. We imported the actions so we can use them
4. Then made the component available to redux with export, see above
5. Using mapStateToProps to inject the new state inside props, so we can access the props, this.props
6. And we are using the actions we have imported so we can call them whenever they are ready.
7. Then just fetching the info, making the new state available inside the props, and we are calling everything inside this.props that is movies, so we can get the info so we can loop it.
*/
