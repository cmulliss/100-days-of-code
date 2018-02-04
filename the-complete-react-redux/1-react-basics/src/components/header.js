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
the class for the method inputChange */