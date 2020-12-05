import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { IFormInputs } from 'interfaces';
import img from "assets/images/trello-logo-blue.png";
import "./styles.css";
import { signUp } from 'core/store/auth/actions';

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().min(5).max(30)
})

export default function SignUp() {
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IFormInputs) => dispatch(signUp(data)); 

  return (
    <>
      <div className="to__main">
        <Link to="/">
          <img src={img} alt="Trello logo" className="trello-logo-blue" />
        </Link>
      </div>
      <div className="sign__up">
        <h1>Registration</h1>
        <form className="sign__up__block" onSubmit={handleSubmit(onSubmit)}>
          <input 
            name="name" 
            type="text" 
            className="name" 
            placeholder="Enter your Name" 
            ref={register}
          />
          <div className="errors">{errors.name?.message}</div>
          <input
            name="email"
            type="email"
            className="email"
            placeholder="Enter your Email"
            ref={register}
          />
          <div className="errors">{errors.email?.message}</div>
          <input
            name="password"
            type="password"
            className="password"
            placeholder="Enter your password"
            ref={register}
          />
          <div className="errors">{errors.password?.message}</div>
          <input
            name="passwordConfirm"
            type="password"
            className="password"
            placeholder="Confirm your password"
            ref={register}
          />
          <div className="errors">{errors.passwordConfirm?.message}</div>
          <button type="submit" className="sign__up__btn">
            Sign Up
          </button>
        </form>
        <Link to="/login" className="signIn_link">
          Already have account? Log in
        </Link>
      </div>
    </>
  );
}
