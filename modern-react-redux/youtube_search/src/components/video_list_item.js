import React from 'react';

/* ({video}) is idential to const video = props.video

Going to pass the callback that's inside props to 
VideoListItem, which now has access to property
onVideoSelect. ES6 trick, can pull multiple props off 
the props object. Next line identical to 
const video = props.video
const onVideoSelect = props.onVideoSelect
Need to make use of callback, so when user clicks on
the li, means an event here. Will pass it a fn, will 
pass it this particular VideoListItems video.
*/
const VideoListItem = ({video, onVideoSelect}) => {
    //console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} alt={video.snippet.title}/>
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    )};
export default VideoListItem;

/*
const VideoListItem = (props) => {
    return(
        <li>Video</li>
    )
}

const VideoListItem = ((props) => 
        <li>Video</li> )

 const video = props.video is identical */
