import {Context} from './../index.js'
import React, {useContext} from 'react';
import Wrapper from "../Components/Wrapper";
import {Grid, ListItem, Typography, IconButton, ListItemAvatar, Avatar} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {observer} from "mobx-react-lite"
import EditIcon from '@mui/icons-material/Edit';
import { Navigate, useNavigate } from 'react-router-dom';
const Question = observer(() => {
    const [dense] = React.useState(false);
    const {user, robots} = useContext(Context)
    const navigate = useNavigate()
    const question = {id: 1, text: 'Вопрос 2'}
    const answers = [
        {id: 1, text: 'Ответ 1'},
        {id: 2, text: 'Ответ 2'},
        {id: 3, text: 'Ответ 3'},
        {id: 5, text: 'Ответ 4'}
    ]

    return (
        <Wrapper>
            <Grid container spacing={2} style={{backgroundColor: 'white'}}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                       Вопрос - {question.text}
                    </Typography>
                    <List>
                    {answers.map(answer => 
                    <ListItem
                    style={{cursor: 'pointer'}}
                    onClick = {() => {return navigate('/anketa/' + answer.id)}}
                    key={answer.id}
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    }
                    >
                          <ListItemAvatar>
    
                          </ListItemAvatar>
                          <ListItemText
                              primary={answer.text}
                            //   secondary={robot.desc}
                          />
                      </ListItem>
                        )}       
                    </List>
                </Grid>
            </Grid>
        
        </Wrapper>

    );
})


export default Question;
