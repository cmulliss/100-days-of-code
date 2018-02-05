import React, { Component } from 'react';
//import PropTypes from 'prop-types';

/* extends binds this class to react, need a render method, with a
return inside it this means this class, NOT this function */
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keywords: ''
        }
    }
    inputChange(event) {
        // console.log(event.target.value);
        this.setState({keywords: event.target.value})
    }
    render () {
        return (
            <header>
                <div className="logo"
                onClick={() => {console.log('clicked')} }
                >Logo</div>
                <input onChange={this.inputChange.bind(this)} />
            </header>
        )
    }
}
export default Header;
