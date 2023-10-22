import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideBarComponent from '../side-bar';
import TopBarComponent from '../top-bar';
import { RootSectionContent } from './style';
import { Box } from '@mui/material';

const LayoutComponent = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  return location.pathname === '/auth' ||
    location.pathname === '/registration' ? (
    <>
      <Outlet />
    </>
  ) : (
    <RootSectionContent>
      <SideBarComponent
        drawerWidth='230'
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Box className='main-section-content'>
        <TopBarComponent />
        <Outlet />
      </Box>
    </RootSectionContent>
  );
};

export default LayoutComponent;
