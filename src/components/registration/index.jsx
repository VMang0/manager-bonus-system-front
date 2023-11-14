import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { StoreContext } from '../../index';
import { useLocation, useNavigate } from 'react-router-dom';
import ContentCenter from '../../style-elements/content-center';
import { AuthForm, AuthInput, AuthStyledComponent } from '../login/style';
import CustomSelect from '../../elements/select/Select';
import { observer } from 'mobx-react-lite';
import CompanyService from '../../service/services/CompanyService';
import { useAlert } from '../../elements/alert';
import UserService from '../../service/services/UserService';

const Registration = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const [companies, setCompanies] = useState('');
  const [chooseItem, setChooseItem] = useState('');
  const { store } = useContext(StoreContext);
  const navigate = useNavigate();
  const { success, error } = useAlert();
  const location = useLocation();
  const isEmployeeVerify = location.pathname === '/registration';

  const registration = async ({ email, password }) => {
    try {
      await store.registration(email, password, chooseItem);
      navigate('/');
      success('Ожидайте подтверждение вашего менеджера!');
    } catch (e) {
      error(e);
    }
  };

  const verifyManager = async ({ email, password }) => {
    try {
      const link = location.pathname.split('/')[2];
      await UserService.verifyManager(link, email, password, chooseItem);
      navigate('/');
      success('Ваш аккаунт активирован!');
    } catch (e) {
      error(e);
    }
  };

  const getCompanies = async () => {
    try {
      const response = await CompanyService.fetchCompanies();
      setCompanies(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <AuthStyledComponent>
      <ContentCenter>
        <AuthForm
          onSubmit={handleSubmit(
            isEmployeeVerify ? registration : verifyManager,
          )}
        >
          <Typography variant='h1' className='auth-name'>
            Registration
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
            <CustomSelect
              options={companies}
              option={'организацию'}
              setChooseItem={setChooseItem}
            />
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
              Register
            </Button>
          </Box>
        </AuthForm>
      </ContentCenter>
    </AuthStyledComponent>
  );
};

export default observer(Registration);
