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
        news: JSON
    }
    
  render() {
      console.log(this.state.news)
    return (
        <div>
        <Header />
        <NewsList news={this.state.news}/>
        </div>
        )
    }
}
render(<App />, document.querySelector('#root'));
/* Need a way to pass the news to to a different
component, NewsList. */

