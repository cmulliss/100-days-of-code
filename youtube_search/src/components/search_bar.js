import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        term: ''
    };

    render () {
        return (
            <div>
                <input
                value={this.state.term} 
                onChange={(event) => this.setState({term: event.target.value})} />
                <p>Value of the input: {this.state.term}</p>
            </div>
        )
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
*/