import React from 'react';

/* returning one single element on each iteration,
the NewsItem will go to the NewsList 
Will receive props from parent NewsList
have 4 different props and 4 different iterations
so bring in return from NewsList
*/
const NewsItem = ({item}) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
            </div>
    )
}
export default NewsItem;
/*
Can improve this by above, bring in 'item'
by restructuring:
const NewsItem = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.item.title}</h3>
            <div>{props.item.feed}</div>
            </div>
    )
}
*/
