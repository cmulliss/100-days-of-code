import React, { Component } from "react";
import { connect } from "react-redux";
//import { selectBook } from "../actions/index";
//import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}
/*
// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
*/
// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps)(BookList);
/* Only purpose to render a list of the books, then render list
by pulling the list building out to a separate fn called 
renderList. wire up the list of books to be on this.props.books
map over list. The component creates a ul, then it calls a helper function called renderList, this.renderList is going to 
map over an array of books, and for each book in the array we create an li with the books title. Promote component to 
container, a container is a component that has a direct connection to the state managed by redux.

At top, we imported connect fn, react-redux is glue between the 2 libraries. Connect takes a fn and component and produces a container. A container is a component that is aware of the state contained by redux. The mapStateToProps fn is especially key here. Agument is state, and returns an object, whatever this is will be avialable as props. 
*/
