import './styles/App.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/login";
import SignIn from "./Pages/SignIn";
import Main from "./Pages/Main";
import Profile from "./Pages/Profile";
import AddQuestion from "./Pages/AddQuestion";
import { useContext } from 'react';
import { Context } from './index';

function App() {
  const {user} = useContext(Context)
  console.log(user)

  return (
    <div className="App">
        <Router>
          {/* {isAuth || <Navigate to="/login" replace={true} />} */}
            <Routes>
                {user.isAuth || <Route exact path="/" element={<Main />} />}
                <Route exact path="login" element={<Login />} />
                {user.isAuth || <Route path="profile" element={<Profile />} />}
                {user.isAuth || <Route path="addQuestion" element={<AddQuestion />} />}
                <Route exact path="*" element={<h2>Error not found 404</h2>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
