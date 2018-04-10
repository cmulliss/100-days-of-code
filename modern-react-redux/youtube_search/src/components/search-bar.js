import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };
  render() {
    return (
      <div className="search-bar">
        <input
          /* controlled component, controlled form element has it's values set by state, only changes when state changes, initial
          value is an empty string  */
          value={this.state.term}
          placeholder="enter your search term here"
          onChange={(event) => this.onInputChange(event.target.value)}
        />
        <p>value of the input: {this.state.term}</p>
      </div>
    );
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
/* declare event handler, fn that runs 
whenever the event occurs, then we pass the event handler to the
element that we want to monitor for events. Can ditch event handler
by using =>

<input onChange={(event) => console.log(event.target.value)} />
replaces both:
<input onChange={this.onInputChange} />
      </div>
    );
  }
  onInputChange((event) => 
     console.log(event.target.value));
*/
