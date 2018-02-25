import React, { Component } from 'react';

class Header extends Component {
//when we create a class, we get a state by default
    state = {
        keywords: ''
    }
    inputLogoChangeHandler() {
        console.log('I was clicked');
    }
    //setState is a method, with object inside
    inputChangeHandler = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }

render() {
    return (
        <header>
        <div className="logo"
        onClick={this.inputLogoChangeHandler}
        >Logo</div>
        <input type="text" 
        onChange={this.inputChangeHandler}/>
        </header>
        )
    }
}
export default Header;
/*
import '../css/styles.css';
stylesheets get injected into the DOM
at compile time, not so good!
Better to link from index.html

Can do like this, just triggering the fn here:
<div className="logo"
        onClick={() => console.log('I was clicked')}
        >Logo</div>
or can pass a reference to a function elsewhere
within the class:
inputChangeHandler() {
        console.log('I was clicked')
    }
<div className="logo"
        onClick={this.inputChangeHandler}
        >Logo</div>
and can do this:
 <input type="text" 
onChange={ (event) => console.log(event.target.value)}
        />
or can pass a reference from a fn within class again
 inputChangeHandler(event) {
        console.log(event.target.value);
    }
   <input type="text" 
        onChange={this.inputChangeHandler}
        /> 
*/
