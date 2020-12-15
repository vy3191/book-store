import { createHashHistory } from 'history';
import promise from 'redux-promise-middleware';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';

export const history = createHashHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), 
    preloadedState,
    compose(
      applyMiddleware(
        promise,
        routerMiddleware(history)      
      )
    )
  );

  return store;
}
