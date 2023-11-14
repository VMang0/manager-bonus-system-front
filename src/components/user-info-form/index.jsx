import React, { useState } from 'react';
import {
  InfoForm,
  InputContainer,
  StyledInput,
  StyledUserInfoForm,
} from './style';
import { Typography } from '@mui/material';
import Select from '../../elements/select/Select';
import { SelectPosition, SelectRang } from '../../common/moks/select-position';
import FlexBetween from '../../style-elements/flex-between';
import { ButtonStartProject } from '../top-bar/style';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useForm } from 'react-hook-form';
import { useAlert } from '../../elements/alert';
import UserService from '../../service/services/UserService';

const UserInfoForm = ({ user, setUser, setUsers }) => {
  const [position, setPosition] = useState('');
  const [rang, setRang] = useState('');
  const [workday, setWorkday] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const { success, error } = useAlert();
  const [loading, setLoading] = useState(false);
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const actionAfterVerify = (response) => {
    success('Пользователь верифицирован!');
    reset();
    setPosition('');
    setRang('');
    setWorkday(null);
    setBirthday(null);
    setUser(null);
    setUsers(response.data);
  };

  const verification = async (data) => {
    setLoading(true);
    try {
      const response = await UserService.verification({
        id: user._id,
        ...data,
        rang,
        position,
        workday,
        birthday,
      });
      actionAfterVerify(response);
    } catch (e) {
      error(e);
    } finally {
      setLoading(false);
    }
  };

  const errorMessage = (name) => {
    if (errors[name]) {
      return <Typography variant='h4'>{errors[name].message}</Typography>;
    }
    return null;
  };

  return (
    <StyledUserInfoForm>
      <InfoForm onSubmit={handleSubmit(verification)}>
        <InputContainer>
          <StyledInput
            value={(user && user.email) || ''}
            placeholder='Эл. почта'
            disabled
          />
        </InputContainer>
        <InputContainer>
          <StyledInput
            placeholder='Имя'
            className={`${errors.name && 'error-input'}`}
            {...register('name', {
              required: 'The name field cannot be empty!',
            })}
          />
          {errorMessage('name')}
        </InputContainer>
        <InputContainer>
          <StyledInput
            placeholder='Фамилия'
            className={`${errors.lastname && 'error-input'}`}
            {...register('lastname', {
              required: 'The lastname field cannot be empty!',
            })}
          />
          {errorMessage('lastname')}
        </InputContainer>
        <FlexBetween>
          <InputContainer className='custom-datepicker'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label='Дата рождения'
                value={birthday}
                onChange={(newValue) => setBirthday(newValue)}
              />
            </LocalizationProvider>
            {errorMessage('birthday')}
          </InputContainer>
          <InputContainer className='custom-datepicker'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label='Дата работы'
                value={workday}
                onChange={(newValue) => setWorkday(newValue)}
              />
            </LocalizationProvider>
          </InputContainer>
        </FlexBetween>
        <InputContainer>
          <Select
            options={SelectPosition}
            option={'позицию'}
            setChooseItem={setPosition}
            initialOption={position}
          />
        </InputContainer>
        <InputContainer>
          <Select
            options={SelectRang}
            option={'ранг'}
            setChooseItem={setRang}
            initialOption={rang}
          />
        </InputContainer>
        <InputContainer>
          <StyledInput
            placeholder='Ставка в час'
            className={`${errors.salary && 'error-input'}`}
            {...register('salary', {
              required: 'The salary field is empty!',
            })}
          />
          {errorMessage('salary')}
        </InputContainer>
        <ButtonStartProject className='btn-verification' type='submit'>
          {loading ? 'Загрузка...' : 'Верифицировать'}
        </ButtonStartProject>
      </InfoForm>
    </StyledUserInfoForm>
  );
};

export default UserInfoForm;
