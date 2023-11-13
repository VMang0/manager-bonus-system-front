import React, { useEffect, useState } from 'react';
import { AuthInput } from '../login/style';
import { Box, Button, Typography } from '@mui/material';
import CustomSelect from '../../elements/select/Select';
import { useForm } from 'react-hook-form';
import { useAlert } from '../../elements/alert';
import CompanyService from '../../service/services/CompanyService';
import UserService from '../../service/services/UserService';

const ManagersList = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const [companies, setCompanies] = useState('');
  const [chooseItem, setChooseItem] = useState('');
  const { success, error } = useAlert();

  const add = async ({ email }) => {
    try {
      await UserService.addManager(email, chooseItem);
      success('Письмо отправлено руководителю на почту!');
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
    <form onSubmit={handleSubmit(add)}>
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
          initialOption={chooseItem}
        />
      </Box>
      <Button type='submit'>отправить письмо</Button>
    </form>
  );
};

export default ManagersList;
