import React from 'react';
import { Link } from 'react-router-dom';

const AritistsList = (props) => {
    console.log(props);

const list = ({allArtists}) => {
    return allArtists.map((item) => {
        return (
            <div>Item</div>
        )
    } )
}

    return (
        <div className="artists_list">
        <h4>Browse the artists</h4>
        </div>
    )
}
export default AritistsList;


