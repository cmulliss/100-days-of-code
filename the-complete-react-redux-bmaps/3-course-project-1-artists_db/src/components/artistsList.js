import React from "react";
// to be able to use links
import { Link } from "react-router-dom";

// whenever rendering this list, going
// to grab the props, from home, and pass in 'return'
// fn will be called list
const ArtistList = (props) => {
  // whenever we trigger this fn we are passing
  // props, we get an object with all the artists
  const list = ({ allArtists }) => {
    if (allArtists) {
      return allArtists.map(function(item) {
        const stlyes = {
          background: `url('/images/covers/${item.cover}.jpg') no-repeat`
        };

        return (
          <Link
            key={item.id}
            to={`/artist/${item.id}`}
            className="artist_item"
            style={stlyes}
          >
            <div>{item.name}</div>
          </Link>
        );
      });
    }
  };

  return (
    <div className="artists_list">
      <h4>Browse the artists</h4>
      {list(props)}
    </div>
  );
};

export default ArtistList;

/*
We made a request to an API and got the list of 
artists, then once we have got the list we are 
passing it on as props. 
This list is going to receive some data from Home,
pass some props to render the list

Want to display the list, so need to trigger a fn,
'list' and pass props to it, so can grab the list 
of users from it. Whenever we trigger this fn, we are 
passing props to it. Pass object directly, using es6,
instead of props.allArtists. 
mpp, on each iteration, pass an item, return a div. 
allArtists isn't a fn, and first time it returns, will
be empty, and we can't map over an empty object. So, 
need to check, with conditional 'if'.

*/
