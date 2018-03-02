import _ from 'lodash';
import React, { Component } from 'react';
import { render } from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyD90WtHqljXjJre1Y1xB-Ri53kll2h1ucQ';

/* SelectedVideo will be a video object and will always
be passed into VideoDetail. Will pass a callback into
VideoList, then from there into VideoListItem. Whenever
the VideoListItem is clicked it will run the callback with
the video that belongs to it.
  */ 
class App extends Component  {
    constructor(props) {
        super(props);
 this.state = {
        videos: [],
        selectedVideo: null
    };
    this.videoSearch('squirrels');
    }
    /* Make a new method on App, one argument 'term'
    Move initial search down into VideoSearch */
    videoSearch(term) {
        YTSearch({key: API_KEY, term:  term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });
        //resolves as this.setState({videos: videos})
        // key and value the same
        });
    }
/* want to throttle, returns a new fn that can only be 
called every 330ms. This is then passed to <SearchBar />
onSearchTermChange callback is throttled
*/
    render () {
        const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
//console.log(this.state.videos)
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => 
                        this.setState({selectedVideo})}
                 videos={this.state.videos}/>
            </div>
        )
    }
}
export default App;

render(<App/>, document.querySelector('.container'));
/*
callback, is a fn we are going to pass from App to
VideoList, and finally into VideoListItem

For search, we are going to pass a callback down into
the SearchBar, this is going to take a string and make
a new YTSearch, update state and set the list of the 
new videos 

Only the most parent component should be responsible
for fetching data.
function(data) is the callback, and can be refactored
(data) => { this.setState {()}} etc

*/
