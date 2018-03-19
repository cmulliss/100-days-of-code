import React, { Component } from "react";

import Banner from "./banner";
import ArtistsList from "./artistsList";

const URL_ARTISTS = "http://localhost:3004/artists";

class Home extends Component {
  state = {
    artists: ""
  };

  render() {
    return (
      <div>
        <Banner />
        <ArtistsList>xx</ArtistsList>
      </div>
    );
  }
}

export default Home;

/* The child component, <ArtistsList />, we are passing
a prop with the list of all the artists to it. So can grab
it in ArtistsList and map over it. */

/* Going to fetch the data from the API, here in home, and pass 
the list of artists to the child component. When we fetch it we
want to set it into state, so can pass it as props. Use 
constructor so can use props. Make a request to a URL, and
create a variable to host the URL. 
We can use this to fetch the data, then store it in state
when we want to trigger something after component is mounted, 
we use lifecycle. Need to fetch, but convert response to json,
thne grab that json, is a callback, run a fn on it. Then grab
the json and set the artists state. 
At first when app loads, state will be empty, will add info
after everything renders.
*/
