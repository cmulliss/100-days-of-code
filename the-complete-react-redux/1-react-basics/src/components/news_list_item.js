import React from 'react';

// can delete the key as already have it in NewsList
const NewsListItem = ({item}) => {
    return (
        <div className="news_list_item">
        <h3>{item.title}</h3>
        <div>
        {item.feed}
        </div>
        </div>
    )
} 
export default NewsListItem;

/*
can destructure, whenever we pass an object as an argument,
(props) we can access the information INSIDE directly from
the argument. We are receiving props, which is just an 
object, props = { item: {} }, has child component 'item'
which is going to have some info inside. So by passing 
reference to the object inside props.

original below, destructured version above
const NewsListItem = (props) => {
    return (
        <div key={props.item.id}>
        <h3>{props.item.title}</h3>
        <div>
        {props.item.feed}
        </div>
        </div>
*/