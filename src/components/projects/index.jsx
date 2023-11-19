import React, { useContext, useEffect, useState } from 'react';
import {
  GridStyled,
  ProjectStatistic,
  StatisticItem,
  StyledProjectsComponent,
} from './style';
import { Grid, Typography } from '@mui/material';
import ProjectItem from '../progect-item';
import { statistic } from '../../common/moks/statistic';
import { HorizontalRule } from '@mui/icons-material';
import FlexBetween from '../../style-elements/flex-between';
import { useProjectStore } from '../../service/services/ProjectService';
import { useAlert } from '../../elements/alert';
import { StoreContext } from '../../index';
import '../../style-elements/loader.css';

const ProjectsComponent = () => {
  const {
    projects,
    fetchProjects,
    allTeams,
    fetchAllProjectsTeams,
    fetchUsersProjects,
  } = useProjectStore();
  const { error } = useAlert();
  const { store } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (store.user && store.user.id) {
      if (store.user.role === 'manager') {
        setLoading(false);
        fetchProjects().catch((e) => error(e));
      } else {
        setLoading(false);
        fetchUsersProjects(store.user.id).catch((e) => error(e));
      }
      fetchAllProjectsTeams().catch((e) => error(e));
    }
  }, [store.isAuth]);

  return (
    <StyledProjectsComponent>
      <GridStyled>
        <Grid container className='grid-container'>
          {loading ? (
            <div className='loader'></div>
          ) : (
            projects.map((project, index) => {
              const teamForProject =
                allTeams.find((teamEntry) => teamEntry._id === project._id)
                  ?.team || [];
              return (
                <Grid item key={index} className='adaptive-grid'>
                  <ProjectItem project={project} team={teamForProject} />
                </Grid>
              );
            })
          )}
        </Grid>
      </GridStyled>
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
