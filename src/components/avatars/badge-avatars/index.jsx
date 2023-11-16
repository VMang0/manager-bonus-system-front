import React, { useContext, useEffect, useState } from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import { StyledBadge, StyledBadgeAvatars } from './style';
import UserService from '../../../service/services/UserService';
import { StoreContext } from '../../../index';
import { observer } from 'mobx-react-lite';

const BadgeAvatars = () => {
  const [user, setUser] = useState(null);
  const { store } = useContext(StoreContext);

  const getUserInfo = async () => {
    try {
      const response = await UserService.getInfoAboutUser(store.user.id);
      setUser(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (store.user && store.user.id) {
      getUserInfo();
    }
  }, [store.isAuth]);

  return (
    <StyledBadgeAvatars>
      <StyledBadge
        overlap='circular'
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant='dot'
      >
        <Avatar alt='profile' src={''} />
      </StyledBadge>
      {user && (
        <Grid className='avatars-text'>
          <Typography className='avatars-lfp-names-text'>
            {`${user?.lastname} ${user?.name}`}
          </Typography>
          <Typography variant='p' className='avatars-post-text'>
            {`${user?.position} (${user?.rang})`}
          </Typography>
        </Grid>
      )}
    </StyledBadgeAvatars>
  );
};

export default observer(BadgeAvatars);
