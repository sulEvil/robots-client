import React, {useState, useContext} from 'react';
import {Typography} from "@mui/material";
import {observer} from "mobx-react-lite"
import { Button, Box, Modal } from '@mui/material';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Context } from './..';
import { createQuestion } from '../http/questionAPI';

const CreateQuestion = observer(({handleClose, open, fetchQuestions}) => {
    const {questions} = useContext(Context)
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      borderRadius: '16px',
      boxShadow: 24,
      p: 4,
      width: '640px',
      display: 'flex',
      flexDirection: 'column'
    };
    const params = useParams()
    const [text, setText] = useState()
    const addQuestion = async () => {
      createQuestion({robotId: params.id, text: text}).then( async (data) => {
        setText('')
        handleClose()
        await fetchQuestions(params.id).then(data => questions.setQuestions(data))
      })
    }
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom: '16px'}}>
              Создание вопроса
            </Typography>
            <FormControl>
              <InputLabel htmlFor="my-input" style={{width: '400px'}}>Вопрос</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={text} onChange={e => setText(e.target.value)} />
              <FormHelperText id="my-helper-text" style={{marginBottom: '16px'}}>Этот вопрос будет отображаться на вашем роботе</FormHelperText>
              <Button onClick={addQuestion}>
                  Добавить вопрос
              </Button>
            </FormControl>
          </Box>
        </Modal>
      </div>
      
    );
})


export default CreateQuestion;
