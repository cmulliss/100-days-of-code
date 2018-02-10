 import React from 'react';

const NewsItem = ({item}) => {
//console.log(item);

     return (
         <div className="news_item">
         <h3>{item.title} </h3>
         <div>{item.feed} </div>
         </div> 
         
     )
 }
 export default NewsItem;

 /* 
 es6 restructuring, can make a reference to the
 item inside props and then instead of making a 
 ref to props, we make a ref to item.
 
const NewsItem = (props) => {
console.log(props)

return (
    <div key={props.item.id}>
    <h3>{props.item.title} </h3>
    <div>{props.item.feed} </div>
    </div> 
    
)
} */