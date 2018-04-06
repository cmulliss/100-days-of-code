import React from "react";

const VideoList = (props) => {
  return (
    <div>
      <ul className="col-md-4 list-group">videolist</ul>
      {props.videos.length}
    </div>
  );
};

export default VideoList;
