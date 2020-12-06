import React from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { signUp } from 'core/store/auth/actions';
import { IFormInputs } from 'interfaces';
import { RootState } from 'types';

import img from "assets/images/trello-logo-blue.svg";
import "./styles.css";

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(5).max(30).required()
})


export default function SignUp() {
  const { register, handleSubmit, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const dispatch = useDispatch()
  const onSubmit = (data: IFormInputs) => 
    dispatch(signUp(data)); 
  const email: any = useSelector<RootState>(
    (state: RootState) => state.authReducer.email
  )

  return (
    <>
      <div className="to__main">
        <Link to="/">
          <img 
            src={img} 
            alt="Trello logo" 
            className="trello_logo_blue" 
          />
        </Link>
      </div>
      <div className="sign__up">
        <h2>Sign Up for your account</h2>
        <form className="sign__up__block" onSubmit={handleSubmit(onSubmit)}>
          <input
            name="email"
            type="email"
            className="email"
            placeholder="Enter your Email"
            ref={register}
            defaultValue={email}
          />
          {
            errors.email &&
            <div className="errors">{errors.email?.message}</div>
          }
          <input 
            name="name" 
            type="text" 
            className="name" 
            placeholder="Enter your Name" 
            ref={register}
          />
          {
            errors.name &&
            <div className="errors">{errors.name?.message}</div>
          }
          <input
            name="password"
            type="password"
            className="password"
            placeholder="Enter your password"
            ref={register}
          />
          {
            errors.password &&
            <div className="errors">{errors.password?.message}</div>
          }
          <input
            name="passwordConfirm"
            type="password"
            className="password"
            placeholder="Confirm your password"
            ref={register}
          />
          {
            errors.passwordConfirm &&
            <div className="errors">{errors.passwordConfirm?.message}</div>
          }
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
