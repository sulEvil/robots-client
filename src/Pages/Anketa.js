import {Context} from './../index.js'
import React, {useContext, useEffect} from 'react';
import Wrapper from "../Components/Wrapper";
import {Grid, ListItem, Typography, IconButton, ListItemAvatar, Avatar} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {observer} from "mobx-react-lite"
import EditIcon from '@mui/icons-material/Edit';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { PanoramaSharp } from '@material-ui/icons';
import { fetchQuestions } from '../http/questionAPI.js';
const Anketa = observer(() => {
    const params = useParams()
    const [dense] = React.useState(false);
    const {user, robots, questions} = useContext(Context)
    const navigate = useNavigate()
    useEffect(() => {
        fetchQuestions(params.id).then(data => questions.setQuestions(data))
    }, [])
    // const questions = [
    //     {id: 1, text: 'Вопрос'},
    //     {id: 2, text: 'Вопрос 2'},
    //     {id: 3, text: 'Вопрос 3'},
    //     {id: 5, text: 'Вопрос 4'}
    // ]



    return (
        <Wrapper>
            <Grid container spacing={2} style={{backgroundColor: 'white'}}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Анкета
                    </Typography>
                    <List>
                    {questions.questions.map(question => 
                    <ListItem
                    style={{cursor: 'pointer'}}
                    onClick = {() => {return navigate('/question/' + question.id)}}
                    key={question.id}
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    }
                    >
                          <ListItemAvatar>
    
                          </ListItemAvatar>
                          <ListItemText
                              primary={question.text}
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


export default Anketa;
