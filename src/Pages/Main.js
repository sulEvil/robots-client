import React, {useState, useContext, useEffect} from 'react';
import {Content} from '../Components//Content';
import Wrapper from "../Components/Wrapper";
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Context } from './../index';
import {check} from './../http/userAPI';
const Main = observer(({loading}) => {
    const [value, setValue] = useState(0)
    const {user} = useContext(Context)
    console.log('Main loading - ', loading)
    return (
        <Wrapper value={value} setValue={setValue}>
            <Content value={value}/>
        </Wrapper>
    );
})

export default Main;
