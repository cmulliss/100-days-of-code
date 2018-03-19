import React from "react";

const ArtistList = (props) => {
  console.log(props);
  return <div>artist list</div>;
};

export default ArtistList;

/*
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
