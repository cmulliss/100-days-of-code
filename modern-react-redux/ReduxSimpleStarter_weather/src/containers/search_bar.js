import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    //console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // we need to fetch weather data
    this.props.fetchWeather();
    this.setState({ term: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get a 5 day forecast in your favourite cities"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </span>
        </form>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
/*
Cannot read property 'props' of null error, so bind
whenever we hand off a callback fn like 
onChange={this.onInputChange}
and then the callback references 'this'
'this' is going to have the incorrect context
so as not using => fn, bind the context of 'onInputChange'

we need to go and fetch weather data
then clear the search input

 stop browser from submitting form,
  need POST request instead
   we need to go and fetch weather data
   via this.props.fetchWeather inside component
   onFormSubmit is a callback, need to bind

using a controlled component
*/
