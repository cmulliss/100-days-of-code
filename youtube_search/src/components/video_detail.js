import React from 'react';

/*need to make sure video has been provided before
 it attempts to render. Need to make sure we have a 
 loaded video before displaying video detail */
const VideoDetail = ({ video }) => {
    if (!video) {
      return <div>Loading...</div>;
    }
// can use string interpolation, backticks, es6 magic
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
  
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} title="title"/>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  };
  
  export default VideoDetail;