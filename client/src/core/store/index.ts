import thunkMiddleware from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from 'core/store/rootReducer';
import history from 'utils/history';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

export default function configureStore(preloadedState?: any) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(routerMiddleware(history), thunkMiddleware)
    )
  );

  return store;
}
