import React from 'react';
import { render } from 'react-dom';

import Header from './components/header';
import NewsList from './components/news_list';

const App = () => {
    return (
        <div>
        <Header />
        </div>
    )
}

render(<App />, document.querySelector('#root'));

