import React, { useContext, useState } from 'react';
import {
  Box,
  FormControlLabel,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IOSSwitch, StyledToggleComponent } from './style';
import { ColorModeContext } from '../../theme';

const ToggleComponent = ({ isOpen }) => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const localStorage = window.localStorage;
  const themeBoolean = JSON.parse(localStorage.getItem('isThemeDark')) || false;
  const [isDark, setIsDark] = useState(themeBoolean);
  const changeTheme = () => {
    setIsDark(!isDark);
    colorMode.toggleColorMode();
    localStorage.setItem('isThemeDark', JSON.stringify(!isDark));
  };
  return (
    <StyledToggleComponent>
      <Box className='container-mode-text'>
        {theme.palette.mode === 'dark' ? (
          <>
            <IconButton className='mode-icon' onClick={changeTheme}>
              <DarkModeIcon />
            </IconButton>
            {isOpen && (
              <Typography variant='h4' className='mode-text'>
                Dark mode
              </Typography>
            )}
          </>
        ) : (
          <>
            <IconButton className='mode-icon' onClick={changeTheme}>
              <LightModeIcon />
            </IconButton>
            {isOpen && (
              <Typography variant='h4' className='mode-text'>
                Light mode
              </Typography>
            )}
          </>
        )}
      </Box>
      {isOpen && (
        <FormControlLabel
          defaultChecked={isDark}
          checked={isDark}
          control={<IOSSwitch onClick={changeTheme} />}
          label=''
        />
      )}
    </StyledToggleComponent>
  );
};

export default ToggleComponent;
