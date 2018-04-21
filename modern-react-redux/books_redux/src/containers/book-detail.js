import React, { Component } from "react";
import { connect } from "react-redux";

// to avoid errors as state is null at start, so
// return early from the render fn
// add an initial check in render method
class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}
//helper fn, prop of activeBook
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}
// export our container
export default connect(mapStateToProps)(BookDetail);
