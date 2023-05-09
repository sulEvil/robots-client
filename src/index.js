import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { createContext } from 'react';
import UserStore from './store/UserStore.js'


export const Context = createContext (null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Context.Provider value={{
        user: new UserStore()
      }}>
        <App />
      </Context.Provider>
  </React.StrictMode>
);
