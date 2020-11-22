import thunkMiddleware from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./rootReducer";
// import history from "../../utils/history";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(routerMiddleware(history), thunkMiddleware)
    )
  );

  return store;
}
