import React from 'react';

/* is this.state if using constructor, not just state
don't need constructor for this, as already defined in
react. */
const Header = (props) => {

    return (
        <header>
            <div className="logo">Logo</div>
            <input type="text"
            onChange={props.keywords}/>
        </header>
    )
}
export default Header;

