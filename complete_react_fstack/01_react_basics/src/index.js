import React, { Component } from 'react';
import { render } from 'react-dom';

import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';

console.log(JSON)
class App extends Component {

    state = {
        news: JSON,
        filtered: []
    }
// triggering a fn we have in the parent, 
// here in the child component
    getKeyword = (event) => {
       // console.log(event.target.value)
       let keyword = event.target.value;
       let filtered = this.state.news.filter((item) => {
           return item.title.indexOf(keyword) > -1
       });
       //console.log(filtered)
       // es6 can replace 'filtered: filtered' with 'filtered'
       this.setState({
           filtered: filtered
       })
    }
// create an alias for overlong <NewsList ....
  render() {
      let newsFiltered = this.state.filtered
      let newsWhole = this.state.news
    return (
        <div>
        <Header keywords={this.getKeyword}/>
        <NewsList news={newsFiltered.length === 0 ? newsWhole : newsFiltered}>
        <h3>The News: </h3>
        </NewsList>
        </div>
        )
    }
}
render(<App />, document.querySelector('#root'));
/*
Need a way to pass the news to to a different
component, NewsList.
*/

