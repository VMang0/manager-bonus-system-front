import React, { createContext, useContext, useState, useCallback } from 'react';
import { Alert, Snackbar } from '@mui/material';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type = 'success') => {
    setAlert({ message, type });
  };

  const closeAlert = () => {
    setAlert(null);
  };

  return (
    <AlertContext.Provider value={showAlert}>
      {children}
      {alert && (
        <Snackbar
          open={true}
          autoHideDuration={10000}
          onClose={closeAlert}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={closeAlert}
            severity={alert.type}
            sx={{ width: '100%' }}
          >
            {alert.message}
          </Alert>
        </Snackbar>
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const showAlert = useContext(AlertContext);

  const success = useCallback(
    (message) => showAlert(message, 'success'),
    [showAlert],
  );
  const error = useCallback(
    (message) => showAlert(message, 'error'),
    [showAlert],
  );
  const info = useCallback(
    (message) => showAlert(message, 'info'),
    [showAlert],
  );
  const warning = useCallback(
    (message) => showAlert(message, 'warning'),
    [showAlert],
  );

  return { success, error, info, warning };
};
