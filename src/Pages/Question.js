import {Context} from './../index.js'
import React, {useContext, useEffect} from 'react';
import Wrapper from "../Components/Wrapper";
import {Grid, ListItem, Typography, IconButton, ListItemAvatar, Avatar} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {observer} from "mobx-react-lite"
import EditIcon from '@mui/icons-material/Edit';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { fetchAnswers } from '../http/answersAPI.js';
import { Button, Box, Modal } from '@mui/material';


const Question = observer(() => {
    const [dense] = React.useState(false);
    const {user, answers} = useContext(Context)
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        fetchAnswers(params.id).then(data => answers.setAnswers(data))
    }, [])


    return (
        <Wrapper>
            
            <Grid container spacing={2} style={{backgroundColor: 'white'}}>
                    <Button>
                        Вернуться
                    </Button>
                <Grid item xs={12} md={6} style={{paddingBottom: '16px'}}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                       Вопрос
                    </Typography>
                    <List>
                    {answers.answers.map(answer => 
                    <ListItem
                    style={{cursor: 'pointer'}}
                    // onClick = {() => {return navigate('/anketa/' + answer.id)}}
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
                    <Button>
                        Добавить ответ
                    </Button>
                </Grid>
            </Grid>
        
        </Wrapper>

    );
})


export default Question;
