import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../../pages/authentication/Login';
import Registration from '../../pages/registration/Registration';
import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import LayoutComponent from '../layout';
import ProjectsComponent from '../projects';

const App = () => {
  const [colorMode, theme] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='App'>
          <Routes>
            <Route element={<LayoutComponent />}>
              <Route path='/auth' element={<Login />} />
              <Route path='/registration' element={<Registration />} />
              <Route path='/' element={<ProjectsComponent />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
