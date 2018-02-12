import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

//Components
import Home from './components/home';
import Artist from './components/artist';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/artist/:artistid" component={Artist} />
            </div>
        </BrowserRouter>
    )
}

render(<App />, document.getElementById('root'));

