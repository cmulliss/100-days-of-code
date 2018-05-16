import React, { Component } from "react";
import { connect } from "react-redux";
import { carDetail } from "../actions";
import { bindActionCreators } from "redux";

class Car extends Component {
  render() {
    return <div>{this.props.match.params.id}</div>;
  }
}

function mapStateToProps(state) {
  return {
    car: state.carDetail
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ carDetail: carDetail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Car);

/*
Need to create all the logic for this, immport a lot of things. 
need to import the action creator, carDetail
When we click on an item, it will take us to a new view, which will do 2 things, going to dispatch an action to brings the data for that car, so we will mapDispatchToProps from redux, so need to bindActionCreators. So whenever we trigger the action and fetch the data we need to inject that data inside the component, so we can render jsx with all the data.
So, since we need to inject the props, we need the mapDataToProps. 
Also, need to mapDispatchToProps, takes dispatch as argument and returns bindActionCreators, with 2 arguments, but as es6 and same name for both key and value, can just use carDetail, next argument is dispatch.
Last thing is connect, and as we are using both mapStateToProps and mapDispatchToProps, we need both, there is no null.
Then need to create the action creator, in index of actions.

*/
