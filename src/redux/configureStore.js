import { combineReducers, createStore } from 'redux';
import books from './books/books';
import categories from './categories/categories';

const reducers = combineReducers({
  books,
  categories,
});
const bookstoreStore = createStore(reducers);

export default bookstoreStore;
