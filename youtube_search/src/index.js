import React, { Component } from 'react';
import { render } from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyD90WtHqljXjJre1Y1xB-Ri53kll2h1ucQ';

class App extends Component  {
    constructor(props) {
        super(props);

    this.state = {
        videos: []
    };
    YTSearch({key: API_KEY, term: 'penguins'}, (data) => {
        this.setState({ videos: data});
    });
    }
    render () {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
}
export default App;

render(<App/>, document.querySelector('.container'));
/*
Only the most parent component should be responsible
for fetching data.
function(data) is the callback, and can be refactored
(data) => { this.setState {()}} etc

*/
