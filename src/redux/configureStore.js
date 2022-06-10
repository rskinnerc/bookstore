import {
  applyMiddleware, combineReducers, createStore, compose,
} from 'redux';

import thunk from 'redux-thunk';
import books from './books/books';
import categories from './categories/categories';

const reducers = combineReducers({
  books,
  categories,
});

const enhancers = compose(
  applyMiddleware(thunk),
);

const bookstoreStore = createStore(
  reducers,
  enhancers,
);

export default bookstoreStore;
