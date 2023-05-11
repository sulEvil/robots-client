import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { createContext } from 'react';
import UserStore from './store/UserStore.js'
import RobotStore from './store/RobotStore.js'
import QuestionStore from './store/QuestionStore.js'
import AnswerStore from './store/AnswerStore.js'

export const Context = createContext (null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Context.Provider value={{
        user: new UserStore(),
        robot: new RobotStore(),
        question: new QuestionStore(),
        answer: new AnswerStore()
      }}>
        <App />
      </Context.Provider>
  </React.StrictMode>
);
