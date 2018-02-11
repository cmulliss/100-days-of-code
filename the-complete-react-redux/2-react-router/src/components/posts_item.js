import React from 'react';

//import PropTypes from 'prop-types';

const PostsItem = ({match}) => {
    return (<div>
        {match.params.id}
        </div>)
}
export default PostsItem;