import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { bookStoreReducer } from './bookStore'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  bookStore: bookStoreReducer
});

export default createRootReducer;
