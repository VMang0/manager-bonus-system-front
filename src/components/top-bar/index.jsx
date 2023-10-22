import React from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BadgeAvatars from '../badge-avatars';
import { StyledTopBarComponent } from './style';

const TopBarComponent = () => {
  return (
    <>
      <StyledTopBarComponent>
        <Grid>Welcome Valeria</Grid>
        <Box className='flex'>
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

/* <IconButton sx={{ '&:hover': { background: 'transparent' } }}>
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ px: '18px', py: '10' }} placeholder='Поиск...' /> */
