import React, { Component } from "react";
import { connect } from "react-redux";
import { getCars } from "../actions";
import { bindActionCreators } from "redux";

export default class Search extends Component {
  state = {
    keyword: ""
  };

  searchCars = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = (event) => {
    this.setState({
      keyword: event.target.value
    });
    //console.log(event.target.value);
  };

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="main_search">
        <form onSubmit={this.searchCars}>
          <input
            type="text"
            value={this.state.keyword}
            placeholder="search"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCars }, dispatch);
}
// make into a controlled component with this.state.keyword
