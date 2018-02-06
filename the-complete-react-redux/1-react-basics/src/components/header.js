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
/* getting a fn inside props 'newsSearch' */
        console.log(props)
    }
/* rom within index.js, need to call this function, filterNews from this child (Header), made this fn available via props, so can call it directly. newsSearch takes the argument 'keywords'  */
    inputChange(event) {
        // console.log(event.target.value);
        this.setState({keywords: event.target.value})
        this.props.newsSearch(event.target.value)
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
/*
In the Header we have a function that is getting the keywords we are
typing in, setting a state of keywords, eg 'ES6', need to call to a 
function to do all the logic. Teh function will be inside index.js, 
will grab all news and filter it.


*/
