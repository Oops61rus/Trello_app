import React from "react";
import img from "../../../img/hero-a.svg";
import "./styles.css";

export const MainBody = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            type="email"
            placeholder="E-mail"
            className="sign__up__input"
          />
          <input
            type="submit"
            className="registration__btn"
            value="Sign Up - It's free"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default MainBody;
