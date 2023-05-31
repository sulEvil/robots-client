import './styles/App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/login";
import Main from "./Pages/Main";
import Profile from "./Pages/Profile";
import Anketa from './Pages/Anketa';
import AddQuestion from "./Pages/AddQuestion";
import { useContext, useEffect } from 'react';
import { Context } from './index';
import {observer} from "mobx-react-lite"
import Question from './Pages/Question';
import { useState } from 'react';
import {check} from './http/userAPI';

const App = observer((props) => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
    useEffect(() => {
      check().then(async (data) => {
        console.log('data from useEf - ', data)
        await user.setUser(data)
        await user.setIsAuth(true)
        console.log('isAuth - ', user.isAuth)
      }).finally(() => {
        setLoading(false)
      }).catch(e => {

      })
    }, [])

  return (
    <div className="App">
        <Router>
            <Routes>
              <Route index path="/" element={<Main loading={loading}/>} />
                <Route exact path="login" element={<Login />} />
                <Route path="profile" element={<Profile />} />
                <Route path="addQuestion" element={<AddQuestion />} />
                <Route path="/anketa/:id" element={<Anketa />} />
                <Route path="/question/:id" element={<Question />} />
                <Route exact path="*" element={<h2>Error not found 404</h2>} />
                
            </Routes>
        </Router>
    </div>
  );
}) 


export default App;
