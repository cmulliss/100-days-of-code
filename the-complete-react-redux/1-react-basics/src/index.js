import React,{ Component } from 'react';
import { render } from 'react-dom';
import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component {
    constructor(props) {
        super(props);
/* don't want to change content of news: JSON to result of search 
so need to create something that will be changed continusly, 
'filtered: JSON', when app starts will be == to all the news, 
Need to call this function, filterNews from the child (Header).
made this fn available via props, so can call it directly
Need to loop through all the news. > -1 means is true.
Want to grab 'filtered' and set it to the state. 
 */
        this.state = {
            news: JSON,
            filtered: JSON
        }
    }
    filterNews(keywords) {
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        } )
        this.setState({filtered: filtered})
    }
     /* newsSearch is a fn, we are passing via props to Header
     */   
    render () {
        return (
            <div>
               <Header newsSearch={keywords => this.filterNews(keywords)}/>
               <h1>Hello World </h1>
               <NewsList news={this.state.filtered}/>
            </div>
        )
    }
}
export default App;

render(<App />, document.querySelector('#root'));
/*
this is going to render <Header /> and child component
<NewsList />, we are going to pass to the NewsList component
all the info we are getting on the state, the news, the JSON
file we are fetching. From the NewsList file we are going to 
grab the JSON, loop the JSON and show all the news. 

Going to create a filter function, search all the news and filter it,
show the match(es). In header we have a function that is getting the 
keywords, setting the state of 'keywords' with the value of what is 
typed in. Need to call a function to filter, do all this logic.
Function will grab some state with all the news and filter it, 
FilterNews, is going to receive some data, some arguments, whatever
the user is typing in, will call the argument 'keywords.
Our filterNews function is inside index.js, but need to pass this data 
from the child (Header), need a way to share this function with the
Header component. Use props to share.
*/
