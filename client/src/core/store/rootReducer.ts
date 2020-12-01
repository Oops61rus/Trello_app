import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { authReducer } from './auth/reducer';
import { History } from 'history';

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
  });

export default rootReducer;
