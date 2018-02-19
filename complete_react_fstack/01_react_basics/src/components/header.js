import React, { Component } from 'react';
/* is this.state if using constructor, not just state
don't need constructor for this, as already defined in
react. */

class Header extends Component {
    state = {
        keywords: 'Hello'
    }

    inputChangeHandler = (event) => {
         this.setState({
             keywords: event.target.value
         })
    }

    render () {
        return (
            <header>
            <div className="logo"
            onClick={ () => console.log('I was clicked')}
            >Logo</div>
            <input type="text"
            onChange={this.inputChangeHandler}
             />
            </header>
        )
    }
} 
export default Header;

// => fns are smart, they know you mean the class, 
// not the fn

 //logoChangeHandler() {
         //console.log('I was clicked')
    //}
