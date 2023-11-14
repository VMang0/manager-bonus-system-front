import React from 'react';
import {
  ProjectStatistic,
  StatisticItem,
  StyledProjectsComponent,
} from './style';
import { Grid, Typography } from '@mui/material';
import { Projects } from '../../common/moks/projects/projects';
import ProjectItem from '../progectItem';
import { statistic } from '../../common/moks/statistic';
import { HorizontalRule } from '@mui/icons-material';
import FlexBetween from '../../style-elements/flex-between';

const ProjectsComponent = () => {
  return (
    <StyledProjectsComponent>
      <Grid container className='grid-container'>
        {Projects.map((project, index) => (
          <Grid item key={index} className='adaptive-grid'>
            <ProjectItem project={project} />
          </Grid>
        ))}
      </Grid>
      <ProjectStatistic>
        <Typography className='statistic-text'>Statistic:</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {statistic.map((item, i) => (
            <Grid key={i} item xs={6}>
              <StatisticItem name={item.name}>
                {item.name}
                <FlexBetween className='statistic-item'>
                  <HorizontalRule className='statistic-icon' />
                  <Typography className='statistic-number'>
                    {item.number}
                  </Typography>
                </FlexBetween>
              </StatisticItem>
            </Grid>
          ))}
        </Grid>
      </ProjectStatistic>
    </StyledProjectsComponent>
  );
};

export default ProjectsComponent;
