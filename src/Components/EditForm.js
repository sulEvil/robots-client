import React, {useState, useContext} from 'react';
import {Typography} from "@mui/material";
import {observer} from "mobx-react-lite"
import { Button, Box, Modal } from '@mui/material';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Context } from './..';
import { createAnswer } from './../http/answersAPI';

const EditForm = observer(({handleClose, open, fetchAnswers}) => {
    const {answers} = useContext(Context)
    const params = useParams()
    const [text, setText] = useState()
    return (
        <div>
            <Box>
                edit
            </Box>
        </div>

    );
})


export default EditForm;
