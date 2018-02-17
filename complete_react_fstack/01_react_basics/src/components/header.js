import React, { Component } from 'react';

/* is this.state if using constructor, not just state
don't need constructor for this, as already defined in
react. */
class Header extends Component {
    state = {
        keywords: ''
    }
// inputChangeHandler(event) {
inputChangeHandler = (event) => {
    //console.log(event.target.value)
    this.setState({
        keywords: event.target.value
    })
}

    render () {
        console.log(this.state.keywords)
        return (
            <header >
                <div className="logo"
                onClick={this.inputChangeHandler}
                >Logo</div>
                 <input type="text"
                 onChange={this.inputChangeHandler}
                 />
            </header>
        )
    }
} 
export default Header;
/* 
onClick={() => {console.log('I was clicked')}  }
or, es6 magic, onClick={() => console.log('I was clicked')  }
onClick={this.inputChangeHandler}

going to have the argument of the event, and then when I call
the => fn, will have the argument of the event, so when call 
the fn will put event at end.
onChange={ (e) => this.inputChangeHandler(e)}

<input type="text" onChange={this.inputChangeHandler.bind(this)}
but can use =>, see above
avoid using 'bind' use => fns instead!
*/