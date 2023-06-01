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
import { Button } from '@mui/material';
import CreateQuestion from './../Components/CreateQuestion.js';
const Anketa = observer(() => {
    const params = useParams()
    const [dense] = React.useState(false);
    const {questions} = useContext(Context)
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetchQuestions(params.id).then(data => questions.setQuestions(data))
    }, [])
    return (
        <Wrapper>
            <Grid container spacing={2} style={{backgroundColor: 'white'}}>
                <Button color='secondary'>
                    Вернуться
                </Button>
                <Grid item xs={12} md={6} style={{paddingBottom: '16px'}}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Анкета
                    </Typography>
                    <CreateQuestion handleOpen={handleOpen} handleClose={handleClose} open={open} fetchQuestions={fetchQuestions}  />
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
                    <Button onClick={handleOpen}>
                        Добавить вопрос
                    </Button>
                </Grid>
            </Grid>
        
        </Wrapper>

    );
})


export default Anketa;
