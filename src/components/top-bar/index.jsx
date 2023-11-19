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
import {
  navMenuAdmin,
  navMenuEmployee,
  navMenuManager,
} from '../../common/moks/navigate';
import { AddCircle } from '@mui/icons-material';
import FlexBetween from '../../style-elements/flex-between';
import DarkFon from '../../style-elements/dark-fon';
import ProjectAddForm from '../project-add-form';
import { observer } from 'mobx-react-lite';
import { useAuthStore } from '../../service/store/store';

const TopBarComponent = () => {
  const [activePage, setActivePage] = useState('');
  const { pathname } = useLocation();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const { user } = useAuthStore();
  const navMenu =
    user.role === 'manager'
      ? navMenuManager
      : user.role === 'admin'
      ? navMenuAdmin
      : navMenuEmployee || [];

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
            <ButtonStartProject onClick={() => setIsOpenForm(true)}>
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
      {isOpenForm && (
        <DarkFon>
          <ProjectAddForm setIsOpenForm={setIsOpenForm} />
        </DarkFon>
      )}
    </>
  );
};

export default observer(TopBarComponent);
