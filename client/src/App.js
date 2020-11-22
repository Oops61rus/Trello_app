import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
// import history from "./utils/history";

import configureStore, { history } from "./core/store";

import SignIn from "./routes/signIn/index";
import SignUp from "./routes/signUp/index";
import Main from "./routes/main";

import "./App.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/login" component={SignIn} exact />
            <Route path="/registration" component={SignUp} exact />
          </Switch>
        </Router>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
