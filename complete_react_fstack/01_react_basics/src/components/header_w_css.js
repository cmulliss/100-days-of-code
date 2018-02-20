import React, { Component } from 'react';
/* is this.state if using constructor, not just state
don't need constructor for this, as already defined in
react. */

class Header extends Component {
    state = {
        active: 'active',
        keywords: 'Hello'
    }

    inputChangeHandler = (event) => {
        const styleChangeValue = event.target.value === '' ? 'active' : 'non-active';
         this.setState({
             active: styleChangeValue,
             keywords: event.target.value
         })
    }

    render () {
        /*const style = {
            background: 'red'
        }
        if (this.state.keywords != '') {
            style.background = 'blue'
        } else {
            style.background = 'red'
        } */

        return (
            <header className={this.state.active}>
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

//<header style={{background: `${this.state.active ? 'red' : 'blue'}`}}>
