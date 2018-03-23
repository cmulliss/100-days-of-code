import React, { Component } from "react";

//import header
import Header from "./header";
import AlbumList from "./albumList";

const REQ_URL = `http://localhost:3004/artists`;

// class based because we need to import props
class Artist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: ""
    };
  }

  componentDidMount() {
    fetch(`${REQ_URL}/${this.props.match.params.artistid}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ artist: json });
      });
  }
  // we have the info available via state, so can grab
  // it directly from there
  render() {
    return (
      <div>
        <Header />
        <div className="artist_bio">
          <div className="avatar">
            <span
              style={{
                background: `url('/images/covers/${
                  this.state.artist.cover
                }.jpg') no-repeat`
              }}
            />
          </div>
          <div className="bio">
            <h3>{this.state.artist.name}</h3>
            <div className="bio_text">{this.state.artist.bio}</div>
          </div>
          <AlbumList albumList={this.state.artist.albums} />
        </div>
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
