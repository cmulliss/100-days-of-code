import React from 'react';
import { render } from 'react-dom';

import Header from './components/header';


const App = () => {

    return (<div>
        <Header />
        <h1>Hello World</h1>
        </div>) 
}

render(<App />, document.querySelector('#root'));