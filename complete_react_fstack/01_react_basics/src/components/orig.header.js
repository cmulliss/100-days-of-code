import React, { Component } from 'react';
/* is this.state if using constructor, not just state
don't need constructor for this, as already defined in
react. */
class Header extends Component {
    state = {active: false,
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
       /* const style = {
            background: 'red'
        }

        if(this.state.keywords !== '') {
            style.background = 'blue'
        } else {
            style.background = 'red'
        } */

        console.log(this.state.keywords)
        return (
            <header style={{background: `${this.state.active ? 'red' : 'blue' }`}}>
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

going to have the argument of the event, and then when I call
the => fn, will have the argument of the event, so when call 
the fn will put event at end.
onChange={ (e) => this.inputChangeHandler(e)}
=========
inputChangeHandler(){
this.setState({
        keywords: event.target.value

    onChange={this.inputChangeHandler.bind(this)}

    refactor as es6, then don't need bind(this)

    inputChangeHandler = (event) => {
    this.setState({

==============

<input type="text" onChange={this.inputChangeHandler.bind(this)}
but can use =>, see above
avoid using 'bind' use => fns instead!

const style = {
            background: 'red'
        }

        if(this.state.keywords !== '') {
            style.background = 'blue'
        } else {
            style.background = 'red'
        }

        <header style={style}>
*/