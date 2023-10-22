import React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import { StyledBadge, StyledBadgeAvatars } from './style';

const BadgeAvatars = () => {
  return (
    <StyledBadgeAvatars>
      <StyledBadge
        overlap='circular'
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant='dot'
      >
        <Avatar alt='profile' src={''} />
      </StyledBadge>
      <Grid className='avatars-text'>
        <Typography className='avatars-lfp-names-text'>
          Korolkova Valeria
        </Typography>
        <Typography variant='p' className='avatars-post-text'>
          Frontend Developer
        </Typography>
      </Grid>
    </StyledBadgeAvatars>
  );
};

export default BadgeAvatars;
