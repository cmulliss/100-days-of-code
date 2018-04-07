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
    this.state = { videos: [] };

    //passes configuration options then callback fn
    YTSearch({ key: API_KEY, term: "squirrels" }, (videos) => {
      this.setState({ videos });
      console.log(videos);
      // this.setState(videos: videos)
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
render(<App />, document.querySelector(".container"));
//props, parent to child
