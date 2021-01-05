import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { signIn } from 'core/store/auth/actions';
import { IFormInputs } from 'interfaces';
import { RootState } from 'types';

import img from "assets/images/trello-logo-blue.svg";
import "./styles.css";

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).max(30).required()
})


const SignIn: React.FC = () => {
  const { register, handleSubmit, errors, setValue } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  const dispatch = useDispatch();
  const onSubmit = (data: IFormInputs) => {
    dispatch(signIn(data));
    setValue('email', '')
    setValue('password', '')
  } 
  const email: any = useSelector<RootState>(
    (state: RootState) => state.authReducer.email
  )
  const isAuthenticated: any = useSelector<RootState>(
    (state: RootState) => state.authReducer.isAuthenticated
  )

  if (isAuthenticated) {
    return (
      <Redirect to='/boards' />
    )
  }
  return (
    <>
      <div className="to__start__page">
        <Link to="/">
          <img 
            src={img} 
            alt="Trello logo" 
            className="trello_logo_blue" 
          />
        </Link>
      </div>
      <div className="signin__block">
        <h2>Sign in, please</h2>
        {
          email &&
          <div className="account_registered">
            <span>
              This email address is used for another account. Sign in to use Trello.
            </span>
          </div>
        } 
        <form 
          className="signIn__form" 
          onSubmit={handleSubmit(onSubmit)}
        >
          <input 
            name="email"
            type="text" 
            className="email" 
            placeholder="E-mail:" 
            ref={register} 
            defaultValue={email}
          />
          {
            errors.name &&
            <div className="errors">{errors.name?.message}</div>
          }
          <input
            name="password" 
            type="password" 
            className="password" 
            placeholder="Password:" 
            ref={register} 
          />
          {
            errors.password &&
            <div className="errors">{errors.password?.message}</div>
          }
          <button 
            type="submit" 
            className="signIn__btn"
          >
            LogIn
          </button>
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