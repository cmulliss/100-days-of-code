import React from 'react';
import { render } from 'react-dom';
import Header from './components/header';


const App = () => {
    return (
        <div>
        <Header />
        <h1>Hello World</h1>
        
        </div>
    )
}
// export default App;

render(<App />, document.querySelector('#root'));