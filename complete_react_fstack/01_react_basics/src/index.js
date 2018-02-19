import React, { Component } from 'react';
import { render } from 'react-dom';

import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';

console.log(JSON)
class App extends Component {

    state = {
        news: JSON
    }

  render() {
      console.log(this.state.news)
    return (
        <div>
        <Header />
        <NewsList news={this.state.news}>
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

