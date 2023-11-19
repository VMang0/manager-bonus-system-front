import React from 'react';
import { Avatar, AvatarGroup } from '@mui/material';
import FlexBetween from '../../../style-elements/flex-between';
import { AvatarsGroupStyled } from './style';

const AvatarsGroup = ({ team, pm }) => {
  const url = 'http://localhost:5000';
  return (
    <AvatarsGroupStyled>
      <FlexBetween>
        <AvatarGroup max={4}>
          {team.map((employee) => (
            <Avatar
              key={employee.email}
              alt={`${employee.info.lastname} ${employee.info.name}`}
              title={`${employee.info.lastname} ${employee.info.name}`}
              src={
                employee.image
                  ? `${url}/${employee.image}`
                  : `${employee.info.lastname.charAt(0)}`
              }
            />
          ))}
        </AvatarGroup>
        <Avatar
          alt={`${pm.info.lastname} ${pm.info.name}`}
          title={`${pm.info.lastname} ${pm.info.name}`}
          src={
            pm.image ? `${url}/${pm.image}` : `${pm.info.lastname.charAt(0)}`
          }
        />
      </FlexBetween>
    </AvatarsGroupStyled>
  );
};

export default AvatarsGroup;
