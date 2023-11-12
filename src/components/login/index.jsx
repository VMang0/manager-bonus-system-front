import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { StoreContext } from '../../index';
import { useNavigate } from 'react-router-dom';
import { AuthForm, AuthInput, AuthStyledComponent } from './style';
import ContentCenter from '../../style-elements/content-center';
import { observer } from 'mobx-react-lite';
import { useAlert } from '../../elements/alert';

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const { store } = useContext(StoreContext);
  const navigate = useNavigate();
  const { error } = useAlert();

  const login = async ({ email, password }) => {
    try {
      await store.login(email, password);
      navigate('/projects');
    } catch (e) {
      error(e);
    }
  };

  return (
    <AuthStyledComponent>
      <ContentCenter>
        <AuthForm onSubmit={handleSubmit(login)}>
          <Typography variant='h1' className='auth-name'>
            Sign In
          </Typography>
          <Box className='input-container'>
            <AuthInput
              className={`${errors.email ? 'error-input' : ''}`}
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
              <Typography variant='h4'>{errors.email.message}</Typography>
            )}
          </Box>
          <Box className='input-container'>
            <AuthInput
              className={`${errors.password && 'error-input'}`}
              placeholder='Password'
              type='password'
              {...register('password', {
                required: 'The password field cannot be empty!',
              })}
            />
            {errors.password && (
              <Typography variant='h4'>{errors.password.message}</Typography>
            )}
          </Box>
          <Box className='bottom-part'>
            <Button type='submit' className='submit-button'>
              Log in
            </Button>
          </Box>
        </AuthForm>
      </ContentCenter>
    </AuthStyledComponent>
  );
};

export default observer(Login);
