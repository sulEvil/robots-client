import React, { useEffect } from 'react';
import Wrapper from "../Components/Wrapper";
import {Avatar, Grid, IconButton, ListItem, ListItemAvatar, Typography} from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import BallotIcon from '@mui/icons-material/Ballot';
import { observer } from "mobx-react-lite";
import { useContext } from 'react';
import { Context } from '..';
import { useNavigate, useParams } from 'react-router-dom';
import {fetchRobots} from './../http/robotAPI'
import EditIcon from '@mui/icons-material/Edit';
import Alert from "@mui/material/Alert";
import AdbIcon from '@mui/icons-material/Adb';

const Customize = observer((props) => {
    const {robots, user} = useContext(Context)
    const navigate = useNavigate()
    useEffect(()=> {
        fetchRobots(user._user.id).then(data => robots.setRobots(data))
        if(!user._user.isPremium){
            alert('У вас нет подписки!')
            navigate('/profile')
        }

    }, [])
    const params = useParams()

    console.log(params)
    return (
        <Wrapper>
            <Grid container spacing={2} style={{backgroundColor: 'white'}}>
                <Grid item xs={12} md={8}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Кастомизация робота
                    </Typography>
                    <Alert severity="info">Выберите нужного робота из списка ниже</Alert>
                    <List>
                        {robots.robots.map(robot =>
                            <ListItem
                                style={{cursor: 'pointer'}}
                                onClick = {() => {return navigate('/customize/' + robot.id)}}
                                key={robot.id}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <EditIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <AdbIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={"Робот - " + robot.name}
                                    secondary={robot.desc}
                                />
                            </ListItem>
                        )}
                    </List>
                </Grid>
            </Grid>
        </Wrapper>
    );
})


export default Customize;
