import React, { Component } from 'react'

// inline is styles as an object
class Header extends Component {

    inputChange(event) {
        console.log('event.target.value')
    }
    render () {
       
        return (
            <div>
            <header >
                <div className="logo"
                onClick={() => {console.log('clicked')}}
                >Logo
                </div>
                <input onChange={this.inputChange()}/>
                </header>
            </div>
        )
    }
}

export default Header
