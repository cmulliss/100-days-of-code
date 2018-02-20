import React from 'react';
/* is this.state if using constructor, not just state
don't need constructor for this, as already defined in
react. */

const Header = (props) => {

        /*console.log(this.props.keywords), don't need 
        'this' as not using a class based component */
        console.log(props.keywords)
        return (
            <header>
            <div className="logo"
            onClick={ () => console.log('I was clicked')}
            >Logo</div>
            <input type="text"
            onChange={props.keywords}
             />
            </header>
        )
    }
export default Header;

// => fns are smart, they know you mean the class, 
// not the fn

 //logoChangeHandler() {
         //console.log('I was clicked')
    //}

//<header style={{background: `${this.state.active ? 'red' : 'blue'}`}}>
/*
instead of triggering inputchangeHandler, as below, can use props
inputChangeHandler = (event) => {
         this.setState({
             keywords: event.target.value
         })
    }

<input type="text"
            onChange={this.inputChangeHandler}/>

 commenting this out as no need to use state
   so can change back to functional component
   state = {
        active: 'active',
        keywords: 'Hello'
    }

    inputChangeHandler = (event) => {
         this.setState({
             keywords: event.target.value
         })
    }
*/
