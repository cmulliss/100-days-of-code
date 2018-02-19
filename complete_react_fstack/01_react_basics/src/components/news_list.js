import React from 'react';
import NewsItem from './news_item';

/* we get the 'news' object inside props
the <NewsItem />is going to go to the
NewsList and read the 1st iteration (item), go
to NewsItem, then to NewsList and pass it as 
props.
On each iteration, passing the actual item
but, props still empty
can choose name for props, item, is now in props 
*/
const NewsList = (props) => {

    const items = props.news.map((item) => {
        return (
            <NewsItem key={item.id} item={item}/>
        )
    });

    console.log(props)
    return (
        <div>
        {props.children}
        {items}
        </div>
    )
}
export default NewsList;
// objects NOT valid as a React child,
// object not valid jsx

// items should be rendered in NewsItem

/*
 const items = props.news.map((item) => {
        return (
            <div>
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
            </div>
        )
    });
    */
