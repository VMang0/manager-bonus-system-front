import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './global.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import Store from './service/store';

const store = new Store();
export const StoreContext = createContext({
  store,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={{ store }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContext.Provider>
  </React.StrictMode>,
);

reportWebVitals();
