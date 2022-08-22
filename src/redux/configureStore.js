import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/book';
import catagoryReducer from './catagories/catagories';

const mainReducer = combineReducers({
  books: bookReducer,
  catagories: catagoryReducer,
});

const store = configureStore({ reducer: mainReducer });

export default store;
