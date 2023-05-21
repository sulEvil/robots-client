import './styles/App.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/login";
import Main from "./Pages/Main";
import Profile from "./Pages/Profile";
import AddQuestion from "./Pages/AddQuestion";
import { useContext } from 'react';
import { Context } from './index';
import {observer} from "mobx-react-lite"

const App = observer(() => {
  const {user} = useContext(Context)

  return (
    <div className="App">
        <Router>
           {user.isAuth || <Navigate to="/login" replace={true} />}
            <Routes>
              <Route exact path="/" element={<Main />} />
                <Route exact path="login" element={<Login />} />
                <Route path="profile" element={<Profile />} />
                 <Route path="addQuestion" element={<AddQuestion />} />
                <Route exact path="*" element={<h2>Error not found 404</h2>} />
            </Routes>
        </Router>
    </div>
  );
}) 


export default App;
