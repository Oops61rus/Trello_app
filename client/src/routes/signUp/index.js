import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/trello-logo-blue.png";

import "./styles.css";

export default function SignUp() {
  return (
    <>
      <div className="to__main">
        <Link to="/">
          <img src={img} alt="Trello logo" className="trello-logo-blue" />
        </Link>
      </div>
      <div className="sign__up">
        <h1>Registration</h1>
        <form className="sign__up__block">
          <input type="text" className="name" placeholder="Enter your Name" />
          <input
            type="email"
            className="email"
            placeholder="Enter your Email"
          />
          <input
            type="password"
            className="password"
            placeholder="Enter your password"
          />
          <input
            type="password"
            className="password"
            placeholder="Confirm your password"
          />
          <button type="submit" className="sign__up__btn">
            Sign Up
          </button>
        </form>
        <Link to="/login" className="signIn_link">
          Already have account? Log in
        </Link>
        <div className="errors"></div>
      </div>
    </>
  );
}
