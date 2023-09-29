import React from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import './Registration.css'
import CustomSelect from "../../elements/select/Select";
import axios from "axios";

const Registration = () => {

  const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onBlur' });

  const registration = (data) => {
    axios.post('http://localhost:8080/api/user/create', data)
      .then((response) => {
        console.log('Пользователь создан:', response.data.user);
      })
      .catch((error) => {
        console.error('Ошибка при создании пользователя:', error);
      });
  };

  return (
    <div className="full-width d-flex justify-content-center align-items-center login">
      <form className="auth-form d-flex align-items-center flex-column" onSubmit={handleSubmit(registration)}>
        <h1 className="text_600 margin-b-20">Registration</h1>
        <div className="margin-input-auth margin-b-25">
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
        <div className="margin-input-auth">
          <CustomSelect options={['dfdgdfgdgf', 'sgsgsggs', 'fvdvdv', 'dfvdfvvfdfvdfv']}/>
        </div>
        <div className="margin-input-auth margin-b-25">
          <input className={`text_300 ${errors.password && 'error-input'}`}
                 placeholder="Password"
                 type="password"
                 {...register('password', {
                   required: 'The password field cannot be empty!'
                 })}/>
          {errors.password && <span className="error-message text_300">{errors.password.message}</span>}
        </div>
        <button className="btn_purple_medium" type="submit">Register</button>
        <Link to={'/'} className="text_300">Already have an account?</Link>
      </form>
    </div>
  )
}
export default Registration;