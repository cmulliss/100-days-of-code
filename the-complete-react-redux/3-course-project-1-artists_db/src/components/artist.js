import React, { Component } from "react";

//import header
import Header from "./header";

class Artist extends Component {
  render() {
    return (
      <div>
        <Header>header</Header>
      </div>
    );
  }
}

export default Artist;

/* When component mounts, need a way to fetch the id 
of the artists, so when working with react router we 
have access to the data inside this.props.match.params
id of params artistid (gave it in index.js).
will need a url to do a fetch, create a const for it. 
 */
