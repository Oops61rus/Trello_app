import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import configureStore from "core/store";
import history from 'utils/history'
import { initialRequest } from 'core/store/auth/actions';

import SignIn from "routes/signIn/index";
import SignUp from "routes/signUp/index";
import StartPage from 'routes/start';
import Boards from 'routes/auth';
import PrivateRoute from 'components/PrivateRoute';

import "./App.css";

const store = configureStore();

// initialRequest();


const App: React.FC = () => {
  // const dispatch = useDispatch()
  // dispatch(initialRequest())
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={StartPage} exact />
          <Route path="/login" component={SignIn} exact />
          <Route path="/registration" component={SignUp} exact />
          <PrivateRoute path='/boards' component={Boards} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
