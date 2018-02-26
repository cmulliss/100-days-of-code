import React from 'react';

const Header = (props) => {

    return (
        <header>
        <div className="logo">Logo</div>
        <input type="text" 
        //onChange={this.inputChangeHandler}/>
        // passing in a fn instead
        onChange={props.keywords}/>
        </header>
        )
    }
export default Header;
// not using a class based component so 
// dont need 'this'
