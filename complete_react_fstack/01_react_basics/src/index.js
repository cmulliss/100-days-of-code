import React, { Component } from 'react';
import { render } from 'react-dom';

import JSON from './db.json';

import Header from './components/header';
//import NewsList from './components/news_list';

console.log(JSON)
class App extends Component {
    render () {
    return (
        <div>
        <Header />
        </div>
        )
    }
}

render(<App />, document.querySelector('#root'));

