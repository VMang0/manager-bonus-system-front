import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { DrawerComponent } from './style';
import FlexBetween from '../flex-between';
import { navMenu } from '../../common/moks/navigate';
import Logo from '../../static/images/logo';
import ToggleComponent from '../toggle';

const SideBarComponent = ({ drawerWidth, isOpen, setIsOpen }) => {
  const [active, setActive] = useState('');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);
  console.log(active);
  console.log(navMenu[2].path);
  return (
    <Box component='nav'>
      <DrawerComponent
        open={true}
        variant='persistent'
        anchor='left'
        drawerwidth={isOpen ? drawerWidth : '70'}
      >
        <Box flex='1'>
          <Box className='container-chevron'>
            <IconButton onClick={() => setIsOpen(!isOpen)} sx={{ p: 0 }}>
              {isOpen ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </Box>
          <Box className='width'>
            <FlexBetween>
              <Box className='width container-logo'>
                <Box>
                  <Logo />
                </Box>
                {isOpen && (
                  <>
                    <Typography variant='h1'>TechBonus</Typography>
                  </>
                )}
              </Box>
            </FlexBetween>
          </Box>
          <List>
            {navMenu.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  className={`${active === item.path ? 'active-link' : ''}`}
                >
                  <ListItemButton onClick={() => navigate(item.path)}>
                    <ListItemIcon className='list-item-icon'>
                      {item.icon}
                    </ListItemIcon>
                    {isOpen && (
                      <ListItemText className='list-item-text'>
                        <Typography>{item.name}</Typography>
                      </ListItemText>
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <ToggleComponent isOpen={isOpen} />
      </DrawerComponent>
    </Box>
  );
};

export default SideBarComponent;
