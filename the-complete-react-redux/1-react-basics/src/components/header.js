import React, { Component } from 'react'

// exxtends binds the class to react
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keywords: ''
        }
        console.log(props);
    }

    inputChange(event) {
       this.setState({keywords: event.target.value})
       this.props.newsSearch(event.target.value)
    }
    render () {
       
        return (
            <div>
            <header >
                <div className="logo"
                onClick={() => {console.log('clicked')}}
                >Logo
                </div>
               <input onChange={this.inputChange.bind(this)} />
            </header>
            </div>
        )
    }
}

export default Header

/*  The following replaces:
   inputChange(event) {
       console.log(event.target.value)
    }
<input onChange={(event) => {console.log(event.target.value)}}/>

React, not allowed to interact with DOM directly, only through React
*/
