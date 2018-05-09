import React, { Component } from "react";
import { connect } from "react-redux";
import { getCars } from "../actions";
import { bindActionCreators } from "redux";

class Search extends Component {
  state = {
    keyword: ""
  };
  // we have access to keyword, above, so can this.state.keyword
  searchCars = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.getCars(this.state.keyword);
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
export default connect(null, mapDispatchToProps)(Search);
/* make into a controlled component with this.state.keyword

not using mapStateToProps, because this container will not use that because whenever we load this component and we just type something, and call that action creator, we are just going to call the action creator. This component is not aware of what's happening with the redux state, so we don't need to know about the redux state. We don't use the state here, we just trigger an action.
To trigger an action we need to use mapDispatchToProps function, argument dispatch, needs to return bindActionCreators, 2 arguments.
Also, need to export connect, also 2 arguments, as not using mapStateToProps use null as first argument, but still need to provide something, or it's just going to fail.
So need to call to the action creator, will be handled by redux directly whenever we call it.

searchCars = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

So, as we have it available in props, because using mapDispatchToProps.

  searchCars = (event) => {
    event.preventDefault();
    this.props.getCars
  };
  
Right here we inject the dispatch, the action creator.


*/
