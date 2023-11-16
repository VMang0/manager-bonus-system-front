import React, { useContext, useEffect, useState } from 'react';
import { AddForm, ProjectAddFormStyled } from './style';
import { InputContainer, StyledInput } from '../user-info-form/style';
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import FlexBetween from '../../style-elements/flex-between';
import Select from '../../elements/select/Select';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { HorizontalRule } from '@mui/icons-material';
import TableComponent from '../tables/table-row-click';
import { tableHeaderEmployees } from '../../common/moks/table-headers';
import UserService from '../../service/services/UserService';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../index';
import CategoryService from '../../service/services/CategoryService';
import PriorityService from '../../service/services/PriorityService';
import { ButtonStartProject } from '../top-bar/style';
import { useAlert } from '../../elements/alert';
import { useProjectStore } from '../../service/services/ProjectService';

const ProjectAddForm = ({ setIsOpenForm }) => {
  const [employees, setEmployees] = useState([]);
  const [team, setTeam] = useState([]);
  const [pmUsers, setPmUsers] = useState([]);
  const [idPM, setIdPM] = useState(null);
  const [categories, setCategories] = useState([]);
  const [idCategory, setIdCategory] = useState(null);
  const [priorities, setPriorities] = useState([]);
  const [idPriority, setIdPriority] = useState(null);
  const [dateStart, setDateStart] = useState(null);
  const [dateFinish, setDateFinish] = useState(null);
  const { store } = useContext(StoreContext);
  const { success, error } = useAlert();
  const { isLoading, createProject } = useProjectStore();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const errorMessage = (name) => {
    if (errors[name]) {
      return <Typography variant='h4'>{errors[name].message}</Typography>;
    }
    return null;
  };

  const addProject = async (data) => {
    const project = {
      category: idCategory,
      priority: idPriority,
      dateStart,
      dateFinish,
      pm: idPM,
      creator: store.user.id,
      ...data,
      team,
    };
    createProject(project)
      .then(() => {
        setIsOpenForm(false);
        success('Проект успешно создан!');
      })
      .catch((e) => error(e));
  };

  const changeObjectsForTable = ({ pm, employees }) => {
    const PMs = pm.map((manager) => ({
      _id: manager._id,
      name: `${manager.info.name} ${manager.info.lastname}`,
    }));
    const users = employees.map((employee) => ({
      _id: employee._id,
      name: employee.info.name,
      lastname: employee.info.lastname,
      position: employee.info.position,
      rang: employee.info.rang,
    }));
    setPmUsers(PMs);
    setEmployees(users);
  };

  const getEmployees = async () => {
    try {
      const response = await UserService.getEmployees(store.user.company);
      changeObjectsForTable(response);
    } catch (e) {
      console.log(e);
    }
  };

  const getCategoriesAndPriority = async () => {
    try {
      const category = await CategoryService.fetchCategories();
      const priority = await PriorityService.fetchPriority();
      setCategories(category);
      setPriorities(priority);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getEmployees();
    getCategoriesAndPriority();
  }, [store.isAuth]);

  return (
    <ProjectAddFormStyled>
      <AddForm onSubmit={handleSubmit(addProject)}>
        <FlexBetween>
          <Typography variant='h3'>Название: </Typography>
          <InputContainer className='InputContainer'>
            <StyledInput
              placeholder='Название'
              className={`${errors.name && 'error-input'}`}
              {...register('name', {
                required: 'The name field cannot be empty!',
              })}
            />
            {errorMessage('name')}
          </InputContainer>
        </FlexBetween>
        <FlexBetween>
          <Typography variant='h3'>Заказчик: </Typography>
          <InputContainer className='InputContainer'>
            <StyledInput
              placeholder='Заказчик'
              className={`${errors.customer && 'error-input'}`}
              {...register('customer', {
                required: 'The customer field cannot be empty!',
              })}
            />
            {errorMessage('customer')}
          </InputContainer>
        </FlexBetween>
        <FlexBetween>
          <Typography variant='h3'>PM: </Typography>
          <InputContainer className='InputContainer'>
            <Select
              options={pmUsers}
              option={'проектного менеджера'}
              setChooseItem={setIdPM}
              isSetId={true}
            />
          </InputContainer>
        </FlexBetween>
        <FlexBetween>
          <Typography variant='h3'>Категория: </Typography>
          <InputContainer className='InputContainer'>
            <Select
              options={categories}
              option={'категорию'}
              setChooseItem={setIdCategory}
              isSetId={true}
            />
          </InputContainer>
        </FlexBetween>
        <FlexBetween>
          <Typography variant='h3'>Приоритет: </Typography>
          <InputContainer className='InputContainer'>
            <Select
              options={priorities}
              option={'приоритет'}
              setChooseItem={setIdPriority}
              isSetId={true}
            />
          </InputContainer>
        </FlexBetween>
        <FlexBetween>
          <InputContainer className='custom-datepicker'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label='Дата работы'
                value={dateStart}
                onChange={(newValue) => setDateStart(newValue)}
              />
            </LocalizationProvider>
            {errorMessage('birthday')}
          </InputContainer>
          <InputContainer>
            <Typography className='icon-line'>
              <HorizontalRule />
            </Typography>
          </InputContainer>
          <InputContainer className='custom-datepicker'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label='Дата работы'
                value={dateFinish}
                onChange={(newValue) => setDateFinish(newValue)}
              />
            </LocalizationProvider>
          </InputContainer>
        </FlexBetween>
        <TableComponent
          header={tableHeaderEmployees}
          items={employees}
          setItem={setTeam}
          checkbox={true}
        />
        <Box className='btn-container'>
          <ButtonStartProject
            className='btn-send-email cancel'
            onClick={() => setIsOpenForm(false)}
          >
            <Typography className='btn-text'>Отмена</Typography>
          </ButtonStartProject>
          <ButtonStartProject className='btn-send-email' type='submit'>
            <Typography className='btn-text'>
              {isLoading ? 'Загрузка...' : 'Создать проект'}
            </Typography>
          </ButtonStartProject>
        </Box>
      </AddForm>
    </ProjectAddFormStyled>
  );
};

export default observer(ProjectAddForm);
