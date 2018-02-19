import React from 'react';
import NewsItem from './news_item';

const NewsList = (props) => {

    /* will return one single element on each iteration
    this <NewsItem /> will go to the NewsList and read the
    first iteration, go the the NewsItem and pass it as props.
    So now this NewsItem in within props, we have 4 different
    items.
    */
const items = props.news.map((item) =>  {
    return (
        <NewsItem key={item.id} item={item}/>
    )
})

    console.log(props)
    return (
        <div>
        {props.children}
        {items}
        </div>
    )
}
export default NewsList;
/*
index.js needs to pass the news to this component, 
NewsList, {props.news} won't work, as objects not 
valid child. so need way to loop this array of objects
coming from props and display the data right here.
Create variable at top, items, will be looping whatever
info we get from props.news, going to run an iteration,
on props.news to get each item of news. 
Now, need to render the code 
    {item.title}
    {item.feed}
within NewslistItem. 
*/