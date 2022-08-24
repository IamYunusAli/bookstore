import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/book';
import catagoryReducer from './catagories/catagories';

const mainReducer = combineReducers({
  books: bookReducer,
  catagories: catagoryReducer,
});

const store = configureStore({
  reducer: mainReducer,
  middleware: [thunk],
});

export default store;
