import React, { useEffect } from 'react';
import Wrapper from "../Components/Wrapper";
import {
    Avatar,
    Button,
    FormControl,
    Grid,
    IconButton,
    ListItem,
    ListItemAvatar,
    TextField,
    Typography
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { useContext } from 'react';
import { Context } from '..';
import {Form, useNavigate} from 'react-router-dom';
import {fetchRobots} from './../http/robotAPI'
import Alert from "@mui/material/Alert";

const Support = observer((props) => {
    const {robots, user} = useContext(Context)
    const navigate = useNavigate()
    useEffect(()=> {
        fetchRobots(user._user.id).then(data => robots.setRobots(data))
        if(!user._user.isPremium){
            alert('У вас нет подписки!')
            navigate('/profile')
        }

    }, [])
    return (
        <Wrapper>
            <Grid container spacing={2} style={{backgroundColor: 'white'}}>
                <Grid item xs={12} md={6} style={{paddingBottom: '32px', display: 'grid'}}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Техническая поддержка
                    </Typography>
                    <Alert severity="warning" style={{marginBottom: '32px'}}>Для получения ответа на почту, необходимо заполнить профиль</Alert>

                    <TextField fullWidth label="Вопрос" />
                    <Button variant="contained" style={{marginTop: '32px', justifySelf: 'end'}}>Отправить</Button>
                </Grid>
            </Grid>
        </Wrapper>
    );
})


export default Support;
