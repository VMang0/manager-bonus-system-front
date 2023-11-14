import React, { useContext, useEffect } from 'react';
import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../index';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LayoutComponent from '../utils/layout';
import ProjectsComponent from '../projects';
import PrivateComponent from '../utils/private-router';
import Login from '../../components/login';
import Registration from '../registration';
import PageNotFound from '../no-page';
import UsersForActivate from '../users-for-activate';
import { AlertProvider } from '../../elements/alert';
import ManagersList from '../managers-list';

const App = () => {
  const [colorMode, theme] = useMode();
  const { store } = useContext(StoreContext);
  const isRefreshToken = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      if (isRefreshToken) {
        await store.checkAuth();
        if (!store.isAuth) {
          navigate('/');
        }
      } else {
        navigate('/');
      }
    };
    checkAuthentication();
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <AlertProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='App'>
            <Routes>
              <Route element={<LayoutComponent />}>
                <Route
                  element={
                    <PrivateComponent
                      isAuth={store.isAuth}
                      isActivated={store.user.isActivated}
                    />
                  }
                >
                  <Route path='/projects' element={<ProjectsComponent />} />
                  <Route path='/user/activate' element={<UsersForActivate />} />
                  <Route path='/managers' element={<ManagersList />} />
                </Route>
                <Route path='/registration' element={<Registration />} />
                <Route path='/' element={<Login />} />
              </Route>
              <Route path='*' element={<PageNotFound />} />
              <Route path='/registration/:link' element={<Registration />} />
            </Routes>
          </div>
        </ThemeProvider>
      </AlertProvider>
    </ColorModeContext.Provider>
  );
};

export default observer(App);
