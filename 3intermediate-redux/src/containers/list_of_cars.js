import React, { Component } from "react";
import { connect } from "react-redux";

class ListOfCars extends Component {
  render() {
    return <div>cars</div>;
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    cars: state.cars
  };
}
export default connect(mapStateToProps, null)(ListOfCars);
