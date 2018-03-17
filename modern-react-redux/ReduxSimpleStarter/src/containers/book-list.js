import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

//this.props.books, the state
class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li 
                key={book.title} 
                onClick={ () => this.props.selectBook(book) }
                className="list-group-item">
                {book.title}</li>
            )
        });
    }
    render () {
        return (
            <div>
               <ul className="list-group col-sm-4">
               {this.renderList()}
               </ul> 
            </div>
        )
    }
}
//first argument is state, and it returns an object
//which will be available to component as this.props
function mapStateToProps(state) {
    return {
        books: state.books
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}
//whenever selectBook is called, te result shold be 
// passed to all our reducers (flows through dispatch fn)
//takes a fn and a component and produces a container!!
// promote BookList from a component to a container, it 
// needs to know about this new dispatch method selectBook
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps) (BookList);
/* whatever gets returned from here will show up as  props
on the BookList contaner, retuns an object, what we return will be equivalent to this.props, this.props.selectBook inside container

mapStateToProps takes in the entire state
property is 'books' and the value to be the list of books
off our state. This is the connection.

Then need to make use of the connect function, it says take
this component, take mapStateToProps and return a container
*/
