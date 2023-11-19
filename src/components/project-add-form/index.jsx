import React, { useEffect, useState } from 'react';
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
import { useCategoryStore } from '../../service/services/CategoryService';
import { ButtonStartProject } from '../top-bar/style';
import { useAlert } from '../../elements/alert';
import { useProjectStore } from '../../service/services/ProjectService';
import { usePriorityStore } from '../../service/services/PriorityService';
import { changeObjectsForTable } from '../../common/moks/projects/projects';
import { useAuthStore } from '../../service/store/store';

const ProjectAddForm = ({ setIsOpenForm }) => {
  const [employees, setEmployees] = useState([]);
  const [pmUsers, setPmUsers] = useState([]);
  const [idPM, setIdPM] = useState(null);
  const [idCategory, setIdCategory] = useState(null);
  const [idPriority, setIdPriority] = useState(null);
  const [dateStart, setDateStart] = useState(null);
  const [dateFinish, setDateFinish] = useState(null);
  const { user } = useAuthStore();
  const { success, error } = useAlert();
  const { isLoading, createProject, fetchAllProjectsTeams } = useProjectStore();
  const [team, setTeam] = useState([]);
  const { categories, fetchCategories } = useCategoryStore();
  const { priorities, fetchPriorities } = usePriorityStore();
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
      creator: user.id,
      ...data,
      team,
    };
    createProject(project)
      .then(() => {
        setIsOpenForm(false);
        success('Проект успешно создан!');
        fetchAllProjectsTeams();
      })
      .catch((e) => error(e));
  };

  const getEmployees = async () => {
    try {
      const response = await UserService.getEmployees(user.company);
      const res = changeObjectsForTable(response);
      setPmUsers(res.PMs);
      setEmployees(res.users);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getEmployees();
    fetchCategories();
    fetchPriorities();
  }, []);

  useEffect(() => {
    setTeam(team);
  }, [team]);

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
          checked={team}
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
