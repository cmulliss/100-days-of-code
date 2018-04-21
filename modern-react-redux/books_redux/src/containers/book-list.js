import React, { Component } from "react";
import { connect } from "react-redux";
// import action creator selectBook
import { selectBook } from "../actions/index";
// this is to make sure the action generated by the
// action creator flows thru all the different reducers
//(take the return value from selectbook)
import { bindActionCreators } from "redux";

// this.props.books, the state
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

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
/* dispatch acts like a funnel, receives actions and 
spits them out to all the different reducers in app
Promote BookList from a component to a container - it needs
to know about this new dispatch method, selectBook. Make it
available as a prop  */
//export default connect(mapStateToProps, mapDispatchToProps)//(BookList);
//whenever selectBook is called, te result shold be
// passed to all our reducers (flows through dispatch fn)
//takes a fn and a component and produces a container!!
// promote BookList from a component to a container, it
// needs to know about this new dispatch method selectBook
// make it available as a prop
/* whatever gets returned from here will show up as  props
on the BookList container, retuns an object, what we return will be equivalent to this.props, this.props.selectBook inside container will call our action creator

mapStateToProps takes in the entire state
property is 'books' and the value to be the list of books
off our state. This is the connection.

Then need to make use of the connect function, it says take
this component, take mapStateToProps and return a container
*/
