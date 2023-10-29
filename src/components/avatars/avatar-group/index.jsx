import React from 'react';
import { Avatar, AvatarGroup } from '@mui/material';
import FlexBetween from '../../flex-between';
import { AvatarsGroupStyled } from './style';

const AvatarsGroup = () => {
  return (
    <AvatarsGroupStyled>
      <FlexBetween>
        <AvatarGroup max={4}>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
          <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
          <Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
        </AvatarGroup>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </FlexBetween>
    </AvatarsGroupStyled>
  );
};

export default AvatarsGroup;
