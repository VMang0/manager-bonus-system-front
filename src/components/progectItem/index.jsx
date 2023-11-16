import React from 'react';
import FlexBetween from '../../style-elements/flex-between';
import { MoreHoriz } from '@mui/icons-material';
import {
  ProjectDescription,
  ProjectName,
  ProjectPriority,
  ProjectsItem,
  ProjectStatus,
} from './style';
import { Box } from '@mui/material';
import AvatarsGroup from '../avatars/avatar-group';

const ProjectItem = ({ project }) => {
  const { name, category, status, priority } = project;
  return (
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
        <AvatarsGroup />
      </Box>
      <FlexBetween>
        <ProjectStatus status={status}>{status}</ProjectStatus>
        <ProjectPriority>{priority.name} priority</ProjectPriority>
      </FlexBetween>
      <FlexBetween>
        <ProjectPriority>5 days ago</ProjectPriority>
        <MoreHoriz />
      </FlexBetween>
    </ProjectsItem>
  );
};

export default ProjectItem;
