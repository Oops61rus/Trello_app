import React from "react";
import { Link } from "react-router-dom";

import img from "assets/images/trello-logo-blue.png";
import "./styles.css";

const SignIn: React.FC = () => {
  return (
    <>
      <div className="to__main">
        <Link to="/">
          <img src={img} alt="Trello logo" className="trello-logo-blue" />
        </Link>
      </div>
      <div className="signin__block">
        <h1>Sign in, please</h1>
        <form className="signIn__form">
          <input type="text" className="email" placeholder="E-mail:" />
          <input type="password" className="password" placeholder="Password:" />
          <button type="submit" className="signIn__btn">
            LogIn
          </button>
          <div className="wrong"></div>
          <div className="not__registered">
            <p>
              Not registered yet?{" "}
              <Link to="/registration" className="signUp_link">
                Sign up for an account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;