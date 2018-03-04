import React from 'react';

const PostItem = (props) =>  {
    console.log(props)
    return(
        <div>
        {props.match.params.id}<br />
        {props.match.params.username}
         </div>
    )
}
export default PostItem;
//console shows data, params etc
//