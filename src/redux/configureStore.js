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
/* eslint-disable no-underscore-dangle */
const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const bookstoreStore = createStore(
  reducers,
  enhancers,
);

export default bookstoreStore;
