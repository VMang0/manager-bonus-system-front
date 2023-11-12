import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateComponent = (isAuth, isActivated) => {
  return isAuth && isActivated ? <Outlet /> : <Navigate to={'/'} />;
};

export default PrivateComponent;
