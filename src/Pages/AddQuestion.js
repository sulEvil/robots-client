import React from 'react';
import Wrapper from "../Components/Wrapper";
import {Avatar, Grid, IconButton, ListItem, ListItemAvatar, Typography} from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from '@mui/icons-material/Delete';
import BallotIcon from '@mui/icons-material/Ballot';
import { observer } from "mobx-react-lite";
import { useContext } from 'react';
import { Context } from '..';
import { Navigate, useNavigate } from 'react-router-dom';
const AddQuestion = observer((props) => {
    const {robots} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Wrapper>
            <Grid container spacing={2} style={{backgroundColor: 'white'}}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Редактирование анкет
                    </Typography>
                    <List>
                    {robots.robots.map(robot => 
                    <ListItem
                    style={{cursor: 'pointer'}}
                    onClick = {() => {return navigate('/anketa/' + robot.id)}}
                    key={robot.id}
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
                              primary={"Анкета - " + robot.name}
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


export default AddQuestion;
