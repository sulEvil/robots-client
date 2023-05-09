import React from 'react';
import Wrapper from "../Components/Wrapper";
import {Avatar, Grid, IconButton, ListItem, ListItemAvatar, Typography} from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import BallotIcon from '@mui/icons-material/Ballot';
function AddQuestion(props) {
    return (
        <Wrapper>
            <Grid container spacing={2} style={{backgroundColor: 'white'}}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" >
                        Редактирование анкет
                    </Typography>
                    <List>
                        <ListItem
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <BallotIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Анкета - Pudu-bot"
                                secondary='Ресторан "Кошечка"'
                            />
                        </ListItem>
                        <ListItem
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <BallotIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Анкета - Bella-bot"
                                secondary='Офис'
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Wrapper>
    );
}

export default AddQuestion;
