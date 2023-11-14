import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import UserService from '../../service/services/UserService';
import { tableHeaderManagers } from '../../common/moks/table-headers';
import SimpleTableComponent from '../tables/table-simple';
import { ManagerListStyled, WorkPanel } from './style';
import { ButtonStartProject } from '../top-bar/style';
import { AddCircle } from '@mui/icons-material';
import DarkFon from '../../style-elements/dark-fon';
import ManagerVerifyInfo from '../manager-verify-form';

const ManagersList = () => {
  const [managers, setManagers] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const getManagers = async () => {
    try {
      const response = await UserService.fetchManagers();
      setManagers(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getManagers();
  }, []);

  const managersData = managers.map((manager, index) => ({
    number: index + 1,
    ...manager,
    name: manager.info.name,
    lastname: manager.info.lastname,
    company: manager.company.name,
    position: manager.info.position,
  }));

  return (
    <ManagerListStyled>
      <Box className='workspace-manager-list'>
        <WorkPanel>
          <ButtonStartProject
            className='btn-manager-list'
            onClick={() => setIsFormOpen(!isFormOpen)}
          >
            <AddCircle />
            <Typography className='btn-text'>Добавить менеджера</Typography>
          </ButtonStartProject>
        </WorkPanel>
        <SimpleTableComponent
          header={tableHeaderManagers}
          items={managersData}
        ></SimpleTableComponent>
        {isFormOpen && (
          <DarkFon>
            <ManagerVerifyInfo setIsFormOpen={setIsFormOpen} />
          </DarkFon>
        )}
      </Box>
    </ManagerListStyled>
  );
};

export default ManagersList;
