import {Context} from './../index.js'
import React, {useContext, useEffect} from 'react';
import Wrapper from "../Components/Wrapper";
import {Grid, ListItem, Typography} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {observer} from "mobx-react-lite"
import { fetchRobots } from '../http/robotAPI.js';

const Profile = observer(() => {
    const [dense] = React.useState(false);
    const {user, robots} = useContext(Context)
    console.log(robots)
    useEffect(()=> {
        fetchRobots(user._user.id).then(data => robots.setRobots(data))
    }, [])
    return (
        <Wrapper>
            <Grid container spacing={2} style={{backgroundColor: 'white'}}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Мой профиль
                    </Typography>
                        <List dense={dense}>
                            <ListItem>
                                <ListItemText
                                    primary={user._user.name}
                                    secondary={ 'Имя'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={user._user.number}
                                    secondary={'Номер телефона'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={robots._robots.length}
                                    secondary={'Кол-во роботов'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={user._user.id}
                                    secondary={'Идентификатор'}
                                />
                            </ListItem>
                        </List>
                </Grid>
            </Grid>
        </Wrapper>

    );
})


export default Profile;
