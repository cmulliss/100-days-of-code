import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//this is really th emapping of our state
//key, books and the value is BooksReducer
const rootReducer = combineReducers({
 books: BooksReducer
});

export default rootReducer;
