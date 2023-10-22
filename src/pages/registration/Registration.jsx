import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Registration.css';
import CustomSelect from '../../elements/select/Select';
import Get from '../../requests/get/Get';
import Post from '../../requests/post/Post';

const Registration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });
  const [companies, setCompanies] = useState([]);
  const [selectedOptionId, setSelectedOptionId] =
    useState(`Выберите организацию`);

  const registration = async (data) => {
    await Post('http://localhost:5000/api/users', {
      ...data,
      role: 'Employee',
      company: selectedOptionId,
    })
      .then((response) => {
        console.log('Пользователь создан:', response.data);
      })
      .catch((error) => {
        console.error('Ошибка при создании пользователя:', error);
      });
  };

  const getCompanies = async () => {
    await Get('http://localhost:5000/api/companies')
      .then((companies) => {
        setCompanies(companies);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <div className='full-width d-flex justify-content-center align-items-center login'>
      <form
        className='auth-form d-flex align-items-center flex-column'
        onSubmit={handleSubmit(registration)}
      >
        <h1 className='text_600 margin-b-20'>Registration</h1>
        <div className='margin-input-auth margin-b-25'>
          <input
            className={`text_300 ${errors.email && 'error-input'}`}
            placeholder='Email'
            type='email'
            {...register('email', {
              required: 'The email field cannot be empty!',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Check your email input!',
              },
            })}
          />
          {errors.email && (
            <span className='error-message text_300'>
              {errors.email.message}
            </span>
          )}
        </div>
        <div className='margin-input-auth'>
          <CustomSelect
            options={companies}
            option={'организацию'}
            setSelectedOptionId={setSelectedOptionId}
          />
        </div>
        <div className='margin-input-auth margin-b-25'>
          <input
            className={`text_300 ${errors.password && 'error-input'}`}
            placeholder='Password'
            type='password'
            {...register('password', {
              required: 'The password field cannot be empty!',
            })}
          />
          {errors.password && (
            <span className='error-message text_300'>
              {errors.password.message}
            </span>
          )}
        </div>
        <button className='btn_purple_medium' type='submit'>
          Register
        </button>
        <Link to={'/'} className='text_300'>
          Already have an account?
        </Link>
      </form>
    </div>
  );
};
export default Registration;
