import React from 'react';
import VideoListItem from './video_list_item';

/*need to render one videoList item per video
return a reference to this array that gets returned
const VideoItems 
*/
const VideoList = (props) => {
    const VideoItems = props.videos.map((video) =>  {
    return (
     <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        video={video} 
        key={video.etag}/>)
});
//console.log(props.videos)
    return (
    <ul className="col-md-4 list-group">
    {VideoItems}
    </ul>
    );
};
export default VideoList;
/* class based component this.props, 
function based component, (props)

for each element of videos, will have a fn
that gets called with a single video, will
return a VideoListItem and pass it to 
video as a property named video.
Than save a reference to this array that 
gets returned: const VideoItems = 
*/