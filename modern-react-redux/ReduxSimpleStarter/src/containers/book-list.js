import React, { Component } from 'react'
import { connect } from 'react-redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map(book => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
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
//takes a fn and a component
export default connect(mapStateToProps) (BookList);
/* whatever gets returned from here will show up as  props
inside BookList, retuns an object, what we return will be equivalent to 
this.props

mapStateToProps takes in the entire state
property is 'books' and the value to be the list of books
off our state. This is the connection.

Then need to make use of the connect function, it says take
this component, take mapStateToProps and return a container
*/
