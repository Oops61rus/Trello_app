import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { checkUser } from "../../../core/store/auth/actions";
import img from "../../../img/hero-a.svg";
import "./styles.css";

export const MainBody = () => {
  const initialState = {
    email: "",
  };
  // const isAuthenticated = useSelector(
  //   (state) => state.authReducer.isAuthenticated
  // );

  const [value, setValue] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    if (!value.email) return;
    event.preventDefault();
    dispatch(checkUser(value));
  };

  // if (isAuthenticated) <Redirect to="/{username}/boards" />;

  return (
    <>
      <div className="main__container">
        <div className="left__container">
          <div className="main__description">
            <h1 className="description__header">
              Trello lets work more collaboratively and get more done
            </h1>
            <h3 className="description__information">
              Trello's boards, lists, and cards enable you to organize and
              prioritize your projects in a fun, flexible and rewarding way.
            </h3>
          </div>
        </div>
        <div className="right__contaiter">
          <img src={img} alt="trello" />
        </div>
        <div className="signup__block">
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            className="sign__up__input"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="registration__btn"
            onClick={handleSubmit}
          >
            Sign Up - It's free
          </button>
          <div className="errors"></div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
