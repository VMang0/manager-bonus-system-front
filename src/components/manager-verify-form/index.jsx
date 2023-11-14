import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CustomSelect from '../../elements/select/Select';
import { useForm } from 'react-hook-form';
import UserService from '../../service/services/UserService';
import CompanyService from '../../service/services/CompanyService';
import { useAlert } from '../../elements/alert';
import { VerifyManagerForm } from './style';
import { Close } from '@mui/icons-material';
import { InputContainer, StyledInput } from '../user-info-form/style';
import { ButtonStartProject } from '../top-bar/style';

const ManagerVerifyInfo = ({ setIsFormOpen }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const [companies, setCompanies] = useState('');
  const [chooseItem, setChooseItem] = useState('');
  const [loading, setLoading] = useState(false);
  const { success, error } = useAlert();

  const getCompanies = async () => {
    try {
      const response = await CompanyService.fetchCompanies();
      setCompanies(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const add = async ({ email }) => {
    setLoading(true);
    try {
      await UserService.addManager(email, chooseItem);
      setIsFormOpen(false);
      success('Письмо отправлено руководителю на почту!');
    } catch (e) {
      error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <VerifyManagerForm onSubmit={handleSubmit(add)}>
      <Box className='btn-container'>
        <Button onClick={() => setIsFormOpen(false)}>
          <Close />
        </Button>
      </Box>
      <InputContainer>
        <StyledInput
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
      </InputContainer>
      <InputContainer>
        <CustomSelect
          options={companies}
          option={'организацию'}
          setChooseItem={setChooseItem}
          initialOption={chooseItem}
        />
      </InputContainer>
      <ButtonStartProject className='btn-send-email' type='submit'>
        <Typography className='btn-text'>
          {loading ? 'Загрузка...' : 'Отправить письмо'}
        </Typography>
      </ButtonStartProject>
    </VerifyManagerForm>
  );
};

export default ManagerVerifyInfo;
