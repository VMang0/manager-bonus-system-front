import React from 'react';
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import { ButtonStartProject } from '../top-bar/style';
import { ProjectPriorityView, ProjectViewFormStyled, ViewForm } from './style';
import dayjs from 'dayjs';
import { ProjectStatus } from '../progect-item/style';

const ProjectViewForm = ({ setIsOpenForm, project, team }) => {
  const {
    name,
    category,
    priority,
    status,
    dateStart,
    dateFinish,
    customer,
    creator,
    pm,
  } = project;
  const url = 'http://localhost:5000';
  const spacing = 3;
  console.log(priority.name);
  return (
    <ProjectViewFormStyled>
      <ViewForm>
        <Stack direction='row' spacing={spacing} className='stack'>
          <Typography variant='h1'>{name}</Typography>
        </Stack>
        <Stack direction='row' spacing={spacing} className='stack'>
          <Typography variant='h2'>Категория: </Typography>
          <Typography variant='h3'>{category.name}</Typography>
        </Stack>
        <Stack direction='row' spacing={spacing} className='stack'>
          <Typography variant='h2'>Приоритет:</Typography>
          <ProjectPriorityView priority={priority.name}>
            {priority.name}
          </ProjectPriorityView>
        </Stack>
        <Stack direction='row' spacing={spacing} className='stack'>
          <Typography variant='h2'>Статус:</Typography>
          <ProjectStatus status={status}>{status}</ProjectStatus>
        </Stack>
        <Stack direction='row' spacing={spacing} className='stack'>
          <Typography variant='h2'>PM:</Typography>
          <Chip
            avatar={
              <Avatar
                alt={`${pm.info.lastname} ${pm.info.name}`}
                src={
                  pm.image
                    ? `${url}/${pm.image}`
                    : `${pm.info.lastname.charAt(0)}`
                }
              />
            }
            label={`${pm.info.lastname} ${pm.info.name}`}
            variant='outlined'
          />
        </Stack>
        <Stack direction='row' spacing={spacing} className='stack'>
          <Typography variant='h2'>Дата начала:</Typography>
          <Typography variant='h3'>
            {dayjs(dateStart).format('YYYY-MM-DD')}
          </Typography>
        </Stack>
        <Stack direction='row' spacing={spacing} className='stack'>
          <Typography variant='h2'>Дата завершения:</Typography>
          <Typography variant='h3'>
            {dayjs(dateFinish).format('YYYY-MM-DD')}
          </Typography>
        </Stack>
        <Stack direction='row' spacing={spacing} className='stack'>
          <Typography variant='h2'>Заказчик: </Typography>
          <Typography variant='h3'>{customer}</Typography>
        </Stack>
        <Stack direction='row' spacing={spacing} className='stack'>
          <Typography variant='h2'>Создатель:</Typography>
          <Chip
            avatar={
              <Avatar
                alt={`${creator.info.lastname} ${creator.info.name}`}
                src={
                  creator.image
                    ? `${url}/${creator.image}`
                    : `${creator.info.lastname.charAt(0)}`
                }
              />
            }
            label={`${creator.info.lastname} ${creator.info.name}`}
            variant='outlined'
          />
        </Stack>
        <Stack direction='column' spacing={2}>
          <Typography variant='h2'>Команда:</Typography>
          <Box className='teams-container'>
            {team.map((employee) => (
              <Chip
                key={employee.email}
                avatar={
                  <Avatar
                    alt={`${employee.info.lastname} ${employee.info.name}`}
                    src={
                      employee.image
                        ? `${url}/${employee.image}`
                        : `${employee.info.lastname.charAt(0)}`
                    }
                  />
                }
                label={`${employee.info.lastname} ${employee.info.name}`}
                variant='outlined'
              />
            ))}
          </Box>
        </Stack>
      </ViewForm>
      <Box className='btn-container'>
        <ButtonStartProject
          className='btn-send-email cancel'
          onClick={() => setIsOpenForm(false)}
        >
          <Typography className='btn-text'>Закрыть</Typography>
        </ButtonStartProject>
      </Box>
    </ProjectViewFormStyled>
  );
};

export default ProjectViewForm;
