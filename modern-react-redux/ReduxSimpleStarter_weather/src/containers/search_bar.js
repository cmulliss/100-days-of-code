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
    //Cannot read property 'props' of null error, so bind
    this.onInPutChange = this.onInPutChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInPutChange(event) {
    console.log(event.target.value);
    this.setState({
      term: event.target.value
    });
  }
  // stop browser from submitting form,
  // need POST request instead
  // we need to go and fetch weather data
  // via this.props.fetchWeather inside component
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    // we need to go and fetch weather data
    // then clear the search input
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
            onChange={this.onInPutChange}
          />
          <span className="input-group-button">
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
using a controlled compoenent
*/
