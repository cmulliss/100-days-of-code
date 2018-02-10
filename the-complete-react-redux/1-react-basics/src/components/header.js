import React, { Component } from 'react'

// exxtends binds the class to react
class Header extends Component {

    //inputChange(event) {
       // console.log(event.target.value)
   // }
    render () {
       
        return (
            <div>
            <header >
                <div className="logo"
                onClick={() => {console.log('clicked')}}
                >Logo
                </div>
                <input onChange={(event) => {console.log(event.target.value)}}/>
                </header>
            </div>
        )
    }
}

export default Header

// <input onChange={this.inputChange}/>
// React. not allowed to interact with DOM directly, 
// only through React
