import React, { useEffect, useState } from 'react';
import UserService from '../../service/services/UserService';
import TableComponent from '../tables/table-row-click';
import { tableHeaderActivateUsers } from '../../common/moks/table-headers';
import UserInfoForm from '../user-info-form';
import { UsersForActivateStyled } from './style';
import { Box } from '@mui/material';
import { useAuthStore } from '../../service/store/store';

const UsersForActivate = () => {
  const [users, setUsers] = useState([]);
  const [userForActivation, setUserForActivation] = useState(null);
  const { user } = useAuthStore();

  const getUsers = async () => {
    const response = await UserService.fetchUsersForActivate(user.company);
    response ? setUsers(response) : console.log(response);
  };

  useEffect(() => {
    if (user.company) {
      getUsers();
    }
  }, [user]);

  return (
    <UsersForActivateStyled>
      <Box className='UserInfoForm'>
        <TableComponent
          header={tableHeaderActivateUsers}
          items={users}
          setItem={setUserForActivation}
        />
      </Box>
      <Box className='UserInfoForm'>
        <UserInfoForm
          user={userForActivation}
          setUser={setUserForActivation}
          setUsers={setUsers}
        />
      </Box>
    </UsersForActivateStyled>
  );
};

export default UsersForActivate;
