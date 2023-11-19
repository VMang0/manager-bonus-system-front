import React, { useContext, useEffect, useState } from 'react';
import { AddForm, ProjectAddFormStyled } from './style';
import { InputContainer, StyledInput } from '../user-info-form/style';
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import FlexBetween from '../../style-elements/flex-between';
import { observer } from 'mobx-react-lite';
import { ButtonStartProject } from '../top-bar/style';
import UserService from '../../service/services/UserService';
import { StoreContext } from '../../index';
import Select from '../../elements/select-object/Select';
import { useCategoryStore } from '../../service/services/CategoryService';
import { usePriorityStore } from '../../service/services/PriorityService';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { HorizontalRule } from '@mui/icons-material';
import dayjs from 'dayjs';
import TableComponent from '../tables/table-row-click';
import { tableHeaderEmployees } from '../../common/moks/table-headers';
import { useProjectStore } from '../../service/services/ProjectService';
import {
  changeObjectsForTable,
  Statuses,
} from '../../common/moks/projects/projects';
import { useAlert } from '../../elements/alert';

const ProjectEditForm = ({ setIsOpenForm, project }) => {
  const [employees, setEmployees] = useState([]);
  const [pmUsers, setPmUsers] = useState([]);
  const [PM, setPM] = useState({
    _id: project.pm._id,
    name: `${project.pm.info.name} ${project.pm.info.lastname}`,
  });
  const { store } = useContext(StoreContext);
  const { categories, fetchCategories } = useCategoryStore();
  const { priorities, fetchPriorities } = usePriorityStore();
  const {
    teamIds,
    fetchProjectTeam,
    setProjectTeam,
    isLoading,
    updateProject,
    fetchAllProjectsTeams,
  } = useProjectStore();
  const [teams, setTeams] = useState([]);
  const [category, setCategory] = useState(project.category);
  const [priority, setPriority] = useState(project.priority);
  const [status, setStatus] = useState({
    _id: 0,
    name: project.status,
  });
  const [dateStart, setDateStart] = useState(dayjs(project.dateStart));
  const [dateFinish, setDateFinish] = useState(dayjs(project.dateFinish));
  const { success, error } = useAlert();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: project.name,
      customer: project.customer,
    },
  });

  const editProject = async (data) => {
    const newProject = {
      ...project,
      category: category,
      priority: priority,
      status: status.name,
      dateStart,
      dateFinish,
      pm: PM,
      ...data,
      teamIds,
    };
    updateProject(newProject)
      .then(() => {
        setIsOpenForm(false);
        success('Проект успешно изменен!');
        fetchAllProjectsTeams();
      })
      .catch((e) => error(e));
  };

  const getEmployees = async () => {
    try {
      const response = await UserService.getEmployees(store.user.company);
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
    fetchProjectTeam(project._id);
    setTeams(teamIds);
  }, []);

  useEffect(() => {
    setTeams(teamIds);
  }, [teamIds]);

  const errorMessage = (name) => {
    if (errors[name]) {
      return <Typography variant='h4'>{errors[name].message}</Typography>;
    }
    return null;
  };

  return (
    <ProjectAddFormStyled>
      <AddForm onSubmit={handleSubmit(editProject)}>
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
              initialOption={PM}
              setChooseItem={setPM}
            />
          </InputContainer>
        </FlexBetween>
        <FlexBetween>
          <Typography variant='h3'>Категория: </Typography>
          <InputContainer className='InputContainer'>
            <Select
              options={categories}
              option={'категорию'}
              initialOption={category}
              setChooseItem={setCategory}
            />
          </InputContainer>
        </FlexBetween>
        <FlexBetween>
          <Typography variant='h3'>Приоритет: </Typography>
          <InputContainer className='InputContainer'>
            <Select
              options={priorities}
              option={'приоритет'}
              setChooseItem={setPriority}
              initialOption={priority}
            />
          </InputContainer>
        </FlexBetween>
        <FlexBetween>
          <Typography variant='h3'>Статус: </Typography>
          <InputContainer className='InputContainer'>
            <Select
              options={Statuses}
              option={'статус'}
              setChooseItem={setStatus}
              initialOption={status}
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
          setItem={setProjectTeam}
          checkbox={true}
          checked={teams}
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
              {isLoading ? 'Загрузка...' : 'Изменить данные проекта'}
            </Typography>
          </ButtonStartProject>
        </Box>
      </AddForm>
    </ProjectAddFormStyled>
  );
};

export default observer(ProjectEditForm);
