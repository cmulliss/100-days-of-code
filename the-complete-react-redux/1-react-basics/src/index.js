import React,{ Component } from 'react';
import { render } from 'react-dom';
import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: JSON
        }
    }
    
    render () {
        return (
            <div>
               <Header />
               <h1>Hello World </h1>
               <NewsList news={this.state.news}/>
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
*/
