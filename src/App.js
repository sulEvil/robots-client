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
import Unload from './Pages/Unload';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Customize from "./Pages/Customize";
import Faq from "./Pages/Faq";
import Support from "./Pages/Support";
import Customization from './Pages/Customization';
import ErrorConnect from './Pages/ErrorConnect';

const firebaseConfig = {
  apiKey: "AIzaSyA9di-NiatND_jN8YqQV2kZaLNefmnivcQ",
  authDomain: "speedy-rite-318808.firebaseapp.com",
  projectId: "speedy-rite-318808",
  storageBucket: "speedy-rite-318808.appspot.com",
  messagingSenderId: "417898334573",
  appId: "1:417898334573:web:f4f8d1289a3423345df264",
  measurementId: "G-VCHR01SNKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
                <Route path="anketa/:id" element={<Anketa />} />
                <Route path="question/:id" element={<Question />} />
                <Route path="unload" element={<Unload />} />
                <Route path="customize" element={<Customize />} />
                <Route path="error" element={<ErrorConnect />} />
                <Route path="customize/:id" element={<Customization />} />
                <Route path="faq" element={<Faq />} />
                <Route path="support" element={<Support />} />
                <Route exact path="*" element={<h2>Error not found 404</h2>} />
            </Routes>
        </Router>
    </div>
  );
})

export default App;
