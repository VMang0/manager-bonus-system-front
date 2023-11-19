import React, { useState } from 'react';
import FlexBetween from '../../style-elements/flex-between';
import { MoreHoriz } from '@mui/icons-material';
import {
  ProjectDescription,
  ProjectName,
  ProjectPriority,
  ProjectsItem,
  ProjectStatus,
} from './style';
import { Box, Menu, MenuItem } from '@mui/material';
import AvatarsGroup from '../avatars/avatar-group';
import ProjectViewForm from '../project-view-form';
import ProjectEditForm from '../project-edit-form';
import DarkFon from '../../style-elements/dark-fon';
import { Visibility, Edit, Delete } from '@mui/icons-material';
import { useProjectStore } from '../../service/services/ProjectService';
import { useAlert } from '../../elements/alert';

const ProjectItem = ({ project, team }) => {
  const { name, category, status, priority } = project;
  const { allTeams, deleteProject } = useProjectStore();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isViewForm, setIsViewForm] = useState(false);
  const [isEditForm, setIsEditForm] = useState(false);
  const { error, success } = useAlert();
  const objTeam = allTeams.find((teams) => teams._id === project._id);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpen = (setIsOpen) => {
    setIsOpen(true);
    setAnchorEl(null);
  };
  const handleDelete = async () => {
    try {
      await deleteProject(project._id);
      success('Проект успешно удален!');
    } catch (e) {
      error(e);
    } finally {
      setAnchorEl(null);
    }
  };

  return (
    <>
      <ProjectsItem>
        <Box>
          <ProjectName>{name}</ProjectName>
          <ProjectDescription>{category.name}</ProjectDescription>
        </Box>
        <Box>
          <FlexBetween sx={{ padding: '0 5px 8px 5px' }}>
            <ProjectPriority>Team</ProjectPriority>
            <ProjectPriority>PM</ProjectPriority>
          </FlexBetween>
          <AvatarsGroup team={team} pm={project.pm} />
        </Box>
        <FlexBetween>
          <ProjectStatus status={status}>{status}</ProjectStatus>
          <ProjectPriority>{priority.name} priority</ProjectPriority>
        </FlexBetween>
        <FlexBetween>
          <ProjectPriority>5 days ago</ProjectPriority>
          <MoreHoriz
            id='btn-menu'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Dashboard
          </MoreHoriz>
          <Menu
            id='btn-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{
              'aria-labelledby': 'btn-menu',
            }}
          >
            <MenuItem onClick={() => handleOpen(setIsViewForm)}>
              <Visibility className='icon-menu' />
              Просмотреть
            </MenuItem>
            <MenuItem onClick={() => handleOpen(setIsEditForm)}>
              <Edit className='icon-menu' />
              Изменить
            </MenuItem>
            <MenuItem onClick={handleDelete}>
              <Delete className='icon-menu' />
              Удалить
            </MenuItem>
          </Menu>
        </FlexBetween>
      </ProjectsItem>
      {(isViewForm || isEditForm) && (
        <DarkFon>
          {isViewForm && (
            <ProjectViewForm
              setIsOpenForm={setIsViewForm}
              project={project}
              team={objTeam.team}
            />
          )}
          {isEditForm && (
            <ProjectEditForm setIsOpenForm={setIsEditForm} project={project} />
          )}
        </DarkFon>
      )}
    </>
  );
};

export default ProjectItem;
