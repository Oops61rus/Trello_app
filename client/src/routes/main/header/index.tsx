import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import img from "img/Trello-logo.png";

const MainHeader: React.FC = () => (
  <div className="main__header">
    <img src={img} alt="Trello logo" className="main__logo" />
    <div className="header__buttons">
      <Link to="/login" className="login__btn">
        Log In
      </Link>
      <Link to="/registration" className="signup__btn">
        Sign Up
      </Link>
    </div>
  </div>
);

export default MainHeader;
