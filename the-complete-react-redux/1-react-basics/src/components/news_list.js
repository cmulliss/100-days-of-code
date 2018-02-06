import React from 'react';
import NewsListItem from './news_list_item';

const NewsList = (props) => {
    console.log(props);

const items = props.news.map((item) => {
    return (
        <NewsListItem key={item.id} item={item}/>
    )
});

    return (
        <div>
            {items}
        </div>
    )
}
export default NewsList;
/*
Within index.js, we are going to pass to the NewsList component
all the info we are getting on the state, the news, the JSON
file we are fetching. From the NewsList file we are going to 
grab the JSON, loop the JSON and show all the news.

We need to pass whatever we are getting from news.json, so within
index.js we add <NewsList news={this.state.news}/>
then go to the NewsList component and receive this via 'props'
const NewsList = (props) => {, will have some default arguments, 
console.log(props); will give an object, we get the news, an 
array of 4. We now need to grab the props, access the news, loop
this array and render everything inside the return.


*/