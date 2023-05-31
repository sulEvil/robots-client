import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import UserStore from './store/UserStore.js'
import RobotStore from './store/RobotStore.js'
import QuestionStore from './store/QuestionStore.js'
import AnswerStore from './store/AnswerStore.js'
import ReviewsStore from './store/ReviewStore';

export const Context = createContext (null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Context.Provider value={{
        user: new UserStore(),
        robots: new RobotStore(),
        questions: new QuestionStore(),
        answers: new AnswerStore(),
        reviews: new ReviewsStore()
      }}>
        <App />
      </Context.Provider>
  </React.StrictMode>
);
