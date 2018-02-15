import React from 'react';
import { Link } from 'react-router-dom';

const AritistsList = (props) => {
    console.log(props);

const list = ({allArtists}) => {
    if (allArtists) {
    return allArtists.map((item) => {

        const style = {
            background: `url('/images/covers/${item.cover}.jpg')
            no-repeat`
        }

        return (
            <Link key={item.id} to={`/artists/$item.id`}
            className="artist_item"
            style={style}
            >
            <div>{item.name}</div>
            </Link>
        )
    } )
}
}
    return (
        <div className="artists_list">
        <h4>Browse the artists</h4>
        {list(props)}
        </div>
    )
}
export default AritistsList;

/*
Want to display the list, so need to trigger a fn,
'list' and pass props to it, so can grab the list 
of users from it. Whenever we trigger this fn, we are 
passing props to it. Pass object directly, using es6,
instead of props.allArtists. 
mpp, on each iteration, pass an item, return a div. 
allArtists isn't a fn, and first time it returns, will
be empty, and we can't map over an empty object. So, 
need to check, with conditional 'if'.

*/


