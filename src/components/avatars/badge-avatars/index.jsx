import React, { useEffect, useState } from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import { StyledBadge, StyledBadgeAvatars } from './style';
import UserService from '../../../service/services/UserService';
import { observer } from 'mobx-react-lite';
import { useAuthStore } from '../../../service/store/store';

const BadgeAvatars = () => {
  const [userInfo, setUser] = useState(null);
  const [image, setImage] = useState('');
  const { user } = useAuthStore();

  const getUserInfo = async () => {
    try {
      const response = await UserService.getInfoAboutUser(user.id);
      setUser(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (user && user.id) {
      getUserInfo();
      setImage(
        user.image
          ? 'http://localhost:5000/' + user.image
          : `${userInfo?.lastname.charAt(0)}`,
      );
    }
  }, [user]);

  return (
    <StyledBadgeAvatars>
      <StyledBadge
        overlap='circular'
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant='dot'
      >
        <Avatar alt={`${userInfo?.lastname} ${userInfo?.name}`} src={image} />
      </StyledBadge>
      {userInfo && (
        <Grid className='avatars-text'>
          <Typography className='avatars-lfp-names-text'>
            {`${userInfo?.lastname} ${userInfo?.name}`}
          </Typography>
          <Typography variant='p' className='avatars-post-text'>
            {`${userInfo?.position} (${userInfo?.rang})`}
          </Typography>
        </Grid>
      )}
    </StyledBadgeAvatars>
  );
};

export default observer(BadgeAvatars);
