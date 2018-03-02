import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        term: ''
    };

    render () {
        return (
            <div className="search-bar">
                <input
                value={this.state.term} 
                onChange={(event) => this.onInputChange(event.target.value)} />
            </div>
        )
    }
/* Inside here we still want to set the state with
the term, and we also want to call the callback that
we got from index.js,  
*/
   onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
   }
}
export default SearchBar;

/*
value={this.state.term} is a controlled form element
its value provided by this.state.term, it value is set
by state, only changes when state changes. When user
types something, they don't change the input value, they 
only trigger an event.

onInputChange(event) {
        console.log(event.target.value)

<input onChange={this.onInputChange}/>

<p>Value of the input: {this.state.term}</p>
*/