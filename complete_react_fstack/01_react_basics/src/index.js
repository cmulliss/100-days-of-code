import React, { Component } from 'react';
import { render } from 'react-dom';
import JSON from './db.json';

/* import db.json, will be converted to an object
import JSON from './db.json';
want to store it inside state of App */
import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component {
    state = {
        news: JSON,
      filtered: []
    }
getKeyword = (event) => {
    // indexOf is going to be event.target.value
    //console.log(event.target.value)
    let keyword = event.target.value

    let filtered = this.state.news.filter((item) => {
        return item.title.indexOf(keyword) > -1
    })
    console.log(filtered)
    this.setState({
        filtered:filtered
    })
}
    
  render() {
      //aliases
      let newsFilter = this.state.filtered
      let newsWhole = this.state.news
    return (
        <div>
        <Header keywords={this.getKeyword}/>
        <NewsList news={newsFilter.length === 0 
            ? newsWhole : newsFilter }>
        <h1>News</h1>
        </NewsList>
        </div>
        )
    }
}
render(<App />, document.querySelector('#root'));
/* Need a way to pass the news to to a different
component, NewsList. */

