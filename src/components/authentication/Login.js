import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";


const Login = () => {

  const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onBlur' });

  return (
    <div className="full-width d-flex justify-content-center align-items-center login">
      <form className="auth-form d-flex align-items-center flex-column">
        <h1 className="text_600 margin-b-68">Sign In</h1>
        <div className="margin-input-auth margin-b-35">
          <input className={`text_300 ${errors.email && 'error-input'}`}
                 placeholder="Email"
                 type="email"
                 {...register('email', {
                   required: 'The email field cannot be empty!',
                   pattern: {
                     value: /^\S+@\S+$/i,
                     message: 'Check your email input!'
                   }
                 })}/>
          {errors.email && <span className="error-message text_300">{errors.email.message}</span>}
        </div>
        <div className="margin-input-auth margin-b-35">
          <input className={`text_300 ${errors.password && 'error-input'}`}
                 placeholder="Password"
                 type="password"
                 {...register('password', {
                   required: 'The password field cannot be empty!'
                 })}/>
          {errors.password && <span className="error-message text_300">{errors.password.message}</span>}
        </div>
        <button className="btn_purple_medium" type="submit">Log in</button>
        <Link to={'/registration'} className="text_300 mt-1">Don’t have an account?</Link>
      </form>
    </div>
  )
};

export default Login;