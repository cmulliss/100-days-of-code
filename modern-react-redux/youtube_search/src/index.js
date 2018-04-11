import _ from "lodash";
import React, { Component } from "react";
import { render } from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search-bar";
import VideoList from "./components/video-list";
import VideoDetail from "./components/video-detail";

const API_KEY = "AIzaSyD90WtHqljXjJre1Y1xB-Ri53kll2h1ucQ";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("squirrels");
  }
  // new method
  videoSearch(term) {
    //passes configuration options then callback fn
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      console.log(videos);
      // this.setState(videos: videos)
    });
  }
  // creates a version of the function that can only be run
  // every 300ms
  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
render(<App />, document.querySelector(".container"));
//props, parent to child
