import React from 'react';
import Wrapper from "../Components/Wrapper";
import {Grid, ListItem, Typography} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

function Profile(props) {
    const [dense] = React.useState(false);

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
                                    primary="Султан"
                                    secondary={ 'Имя'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="+7 919 604 33 75"
                                    secondary={'Номер телефона'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="1"
                                    secondary={'Кол-во роботов'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="635"
                                    secondary={'Идентификатор'}
                                />
                            </ListItem>
                        </List>
                </Grid>
            </Grid>
        </Wrapper>

    );
}



export default Profile;
