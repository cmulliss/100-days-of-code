import React from 'react';

/* returning one single element on each iteration,
the NewsItem will go to the NewsList 
*/
const NewsItem = ({item}) => {
    return (
        <div>
        <h3>{item.title}</h3>
        <div>
            {item.feed}
        </div>
        </div>
    )
}
export default NewsItem;
/*
Above, can improve, instead of using props,
but restructuring, instead of bringing props
just bringing item:

const NewsItem = (props) => {
    return (
        <div>
        <h3>{props.item.title}</h3>
        <div>
            {props.item.feed}
        </div>
        </div>

can bring in item.
*/