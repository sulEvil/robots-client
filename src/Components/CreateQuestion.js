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


const CreateQuestion = observer(() => {
    const [dense] = React.useState(false);
    const {user, answers} = useContext(Context)
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        fetchAnswers(params.id).then(data => answers.setAnswers(data))
    }, [])


    return (
      <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box>
               <Typography id="modal-modal-title" variant="h6" component="h2">
               Text in a modal
               </Typography>
               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
               </Typography>
            </Box>
      </Modal>
    );
})


export default CreateQuestion;
