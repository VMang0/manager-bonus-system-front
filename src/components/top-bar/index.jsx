import React, { useEffect, useState } from 'react';
import { Box, Grid, IconButton, InputBase, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BadgeAvatars from '../avatars/badge-avatars';
import {
  ButtonStartProject,
  StyledProjectsComponent,
  StyledTopBarComponent,
} from './style';
import { Search } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { navMenu } from '../../common/moks/navigate';
import { AddCircle } from '@mui/icons-material';
import FlexBetween from '../../style-elements/flex-between';

const TopBarComponent = () => {
  const [activePage, setActivePage] = useState('');
  const { pathname } = useLocation();
  useEffect(() => {
    navMenu.map((item) => {
      pathname === item.path && setActivePage(item.name);
    });
  }, [pathname]);
  return (
    <>
      <StyledTopBarComponent>
        <FlexBetween>
          <Typography variant='h1'>{activePage || ''}</Typography>
          <StyledProjectsComponent>
            <IconButton className='iconButton'>
              <Search />
            </IconButton>
            <InputBase placeholder='Поиск...' />
          </StyledProjectsComponent>
        </FlexBetween>
        <Box className='flex'>
          {pathname === '/projects' && (
            <ButtonStartProject>
              <AddCircle />
              <Typography className='btn-text'>Start project</Typography>
            </ButtonStartProject>
          )}
          <Grid className='container-notification'>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
          </Grid>
          <Grid className='flex container-badge-avatars'>
            <BadgeAvatars />
          </Grid>
        </Box>
      </StyledTopBarComponent>
    </>
  );
};

export default TopBarComponent;
