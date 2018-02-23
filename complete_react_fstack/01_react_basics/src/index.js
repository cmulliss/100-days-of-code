import React, { Component } from 'react';
import { render } from 'react-dom';

import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';

console.log(JSON)
class App extends Component {
    state = {
        news: JSON,
        filtered: ''
    }

getKeyword = (event) => {
    //console.log(event.target.value)
    let keyword = event.target.value
    let filtered = this.state.news.filter((item) => {
        return item.title.indexOf(keyword) > -1
    })
    console.log(filtered)
    this.setState({
        filtered
    })
}
  render() {
      // create aliases
      let newsFiltered = this.state.filtered
      let NewsWhole = this.state.news
    return (
        <div>
        <Header keywords={this.getKeyword}/>
        <NewsList news={newsFiltered.length === 0 ? NewsWhole : newsFiltered}>
        <h3>The News: </h3>
        </NewsList>
        </div>
        )
    }
}
render(<App />, document.querySelector('#root'));
/* Need a way to pass the news to to a different
component, NewsList. */

