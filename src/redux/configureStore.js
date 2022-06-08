import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import books from './books/books';
import categories from './categories/categories';

const reducers = combineReducers({
  books,
  categories,
});
const bookstoreStore = createStore(reducers, applyMiddleware(thunk));

export default bookstoreStore;
