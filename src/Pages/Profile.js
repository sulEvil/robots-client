import {Context} from './../index.js'
import React, {useContext, useEffect} from 'react';
import Wrapper from "../Components/Wrapper";
import {Box, Button, Grid, ListItem, Typography} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {observer} from "mobx-react-lite"
import { fetchRobots } from '../http/robotAPI.js';
import SendIcon from '@mui/icons-material/Send';
import * as PropTypes from "prop-types";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EditIcon from '@mui/icons-material/Edit';
Button.propTypes = {
    variant: PropTypes.string,
    endIcon: PropTypes.element,
    children: PropTypes.node
};
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
                        <List dense={dense} style={{display: 'flex', flexDirection: 'column'}}>
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
                            {!user._user.isPremium || <ListItem>
                                <ListItemText
                                    primary={"Аккаунт с подпиской до:"}
                                    secondary={'19.07.2023'}
                                />
                            </ListItem>} 
                            {/* Для начала нужно получать имя пользователя, тк не приходит пока что */}
                            {/* Идея - при нажатии открывать форму с данными, то есть менять список на форму, с кнопками отправить или отменить */}
                            <Button variant="contained" color="secondary" endIcon={<EditIcon />} style={{alignSelf: 'flex-start', marginTop: '8px'}}>
                                Редактировать профиль
                            </Button>
                        </List>
                    {user._user.isPremium ||

                        <Box style={{padding: "12px 6px 24px 12px"}}>
                            <Typography>
                                У вас нет подписки
                            </Typography>
                            <br />
                            <Button variant="contained" endIcon={<ShoppingCartIcon />}>
                                Приобрести подписку
                            </Button>
                        </Box>

                    }
                </Grid>
            </Grid>
        </Wrapper>

    );
})


export default Profile;
