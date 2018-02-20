import React from 'react';
import { css } from 'glamor';

/* returning one single element on each iteration,
the NewsItem will go to the NewsList 
Will receive props from parent NewsList
have 4 different props and 4 different iterations
so bring in return from NewsList
*/
const NewsItem = ({item}) => {

    let news_item = css({
        padding: '20px',
        boxSizing: 'border-box',
        borderBottom: '1px solid grey',
        ':hover': {
            color:'red'
        },
        '@media(max-width: 500px)': {
            color: 'blue'
        }
    })
    let item_grey = css({
        background: 'lightgrey'
    })
// css using backticks, template strings
    return (
        <div className={`${news_item} ${item_grey}`} >
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
css using es6 syntax
<div {...news_item} {...item_grey}>
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
            </div>
*/
