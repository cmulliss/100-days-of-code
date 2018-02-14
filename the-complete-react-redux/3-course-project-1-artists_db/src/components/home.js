import React, { Component } from 'react';

import Banner from '../components/banner';
import AritistsList from '../components/artistsList';


/* can use this to fetch the data, then store it in state
when we want to trigger something after component is mounted, 
we use lifecycle. Need to fetch, but convert response to json,
thne grab that json, is a callback, run a fn on it. Then grab
the json and and set the artists state, 
*/
const URL_ARTISTS = 'http://localhost:3004/artists';

class Home extends Component {
constructor(props) {
    super(props);

    this.state = {
        artists: ''
    }
}
componentDidMount() {
    fetch(URL_ARTISTS, {
        method: 'GET'
    })
    .then(response  => response.json())
    .then(json => {
        console.log(json)
        this.setState({
            artists: json
        })
    } )
}

    render () {
        return (
            <div>
                <Banner />
                <AritistsList 
                allArtists={this.state.artists} />
            </div>
        )
    }
}

export default Home;