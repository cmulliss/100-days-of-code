import React, { Component } from 'react'
// extends binds this class to react
// need a render method, with a return inside it
class Header extends Component {

    inputChange(event) {
        console.log(event.target.value);
    }
    showAlert() {
        alert('I am an alert');
    }
    render () {
        return (
            <header>
                <div className="logo"
                onClick={() => {console.log('clicked')} }
                >Logo</div>
                <input onChange={this.inputChange} />
                <br />
                <button onClick={this.showAlert}>Show alert</button>
                </header>
        )
    }
}
export default Header;
/* add a method / function, the 'this' keyword says look within 
the class for the method inputChange
Want to collect user input, using onChange listener, the onChange event
then pass the event, to get user input. Call function inputChange.
Want to call function whenever user changes input. Not going to DOM 
directly, to the window event, BUT using React's virtual DOM.
Summary: we are triggering a function, it's accessing the synthetic 
events of React and then React is connecting with the DOM and giving us
the info being typed in the input.

When we create a class, we get default state, which is empty
functional are stateless
changes on state, re-renders
*/