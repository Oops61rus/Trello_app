import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { checkUser } from "core/store/auth/actions";
import { IFormOneInput } from 'types';
import img from "images/hero-a.svg";
import "./styles.css";


let schema = yup.object().shape({
  email: yup.string().email(),
})

const MainBody: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm<IFormOneInput>({
    resolver: yupResolver(schema)
  });

  watch("email");
  const onSubmit = (data: IFormOneInput) => dispatch(checkUser(data));

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
          <form className="signup__form" onSubmit={handleSubmit(onSubmit)}>
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              className="sign__up__input"
              ref={register}
            />
            <input
              type="submit"
              className="registration__btn" value="Sign Up - It's free"
            >
            </input>
              
            {errors.email && <span>Email is incorrect!</span>}
          </form>
        </div>
      </div>
    </>
  );
};

export default MainBody;
