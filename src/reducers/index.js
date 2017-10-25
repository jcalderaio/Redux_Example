import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// Returns the state that becomes available to the containers after using 'connect' and 'mapStateToProps' in those containers
const rootReducer = combineReducers({
  // Adds the key to the global application state, called books
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
