import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./routes/signIn/index";
import SignUp from "./routes/signUp/index";
import Main from "./routes/main";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/login" component={SignIn} exact />
        <Route path="/registration" component={SignUp} exact />
      </Switch>
    </Router>
  );
}

export default App;
