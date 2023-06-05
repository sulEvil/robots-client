import React, {useState, useContext} from 'react';
import {Typography} from "@mui/material";
import {observer} from "mobx-react-lite"
import { Button, Box, Modal } from '@mui/material';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Context } from './..';
import { createQuestion } from '../http/questionAPI';

import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


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
    const [type, setType] = useState("Мнение")

    const addQuestion = async () => {
      createQuestion({robotId: params.id, text: text, type}).then( async (data) => {
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

              <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Выберите тип вопроса</FormLabel>
                <FormGroup style={{display: 'grid', gridTemplateColumns: '50% 50%'}}>
                  <FormControlLabel
                    control={
                      <Checkbox checked={type === "Мнение"} onChange={() => setType("Мнение")} name="Мнение" />
                    }
                    label="Мнение"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox  checked={type === "Простой вопрос"} onChange={() => setType("Простой вопрос")}  name="Простой вопрос" />
                    }
                    label="Простой вопрос"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={type === "Возраст"} onChange={() => setType("Возраст")} name="Возраст" />
                    }
                    label="Возраст"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={type === "Дата рождения"} onChange={() => setType("Дата рождения")} name="Дата рождения" />
                    }
                    label="Дата рождения"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={type === "Номер телефона"} onChange={() => setType("Номер телефона")} name="Номер телефона" />
                    }
                    label="Номер телефона"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={type === "Оценка до 5"} onChange={() => setType("Оценка до 5")} name="Оценка до 5" />
                    }
                    label="Оценка до 5"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={type === "Оценка до 10"} onChange={() => setType("Оценка до 10")} name="Оценка до 10" />
                    }
                    label="Оценка до 10"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={type === "email"} onChange={() => setType("email")} name="email" />
                    }
                    label="email"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={type === "ФИО"} onChange={() => setType("ФИО")} name="ФИО" />
                    }
                    label="ФИО"
                  />
                </FormGroup>
              </FormControl>
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
