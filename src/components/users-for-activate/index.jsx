import React, { useContext, useEffect, useState } from 'react';
import UserService from '../../service/services/UserService';
import { StoreContext } from '../../index';
import TableComponent from '../table';
import { tableHeaderActivateUsers } from '../../common/moks/table-activate-users';
import UserInfoForm from '../user-info-form';
import { UsersForActivateStyled } from './style';
import { Box } from '@mui/material';

const UsersForActivate = () => {
  const [users, setUsers] = useState([]);
  const [userForActivation, setUserForActivation] = useState(null);
  const { store } = useContext(StoreContext);
  const user = store.user;

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
