import React, {useState, useContext} from 'react';
import {Typography} from "@mui/material";
import {observer} from "mobx-react-lite"
import { Button, Box, Modal } from '@mui/material';
import { FormControl, InputLabel, Input, FormHelperText, TextField, ButtonGroup } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Context } from './..';

const EditForm = observer(({handleClose, open, fetchAnswers}) => {
    const {answers} = useContext(Context)
    const params = useParams()
    const [text, setText] = useState()
    return (
        <div>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom: '16px'}}>
                Редактирование профиля
            </Typography>
            <FormControl>
                <TextField id="outlined-basic" label="Имя" variant="outlined"  />
                <TextField id="outlined-basic" label="Email" variant="outlined" style={{marginTop: '16px'}} />

                <TextField id="outlined-basic" label="Старый пароль" variant="outlined" style={{marginTop: '36px'}} />
                <TextField id="outlined-basic" label="Новый пароль" variant="outlined" style={{marginTop: '16px'}} />
                <FormHelperText id="my-helper-text" style={{marginBottom: '16px'}}>Чтобы поменять пароль, нужно ввести актуальный пароль, и тот, который на вы хотите</FormHelperText>
                <ButtonGroup style={{justifyContent: 'space-between', marginBottom: '24px'}}
                >
                    <Button variant="contained" color="error">
                        Отменить
                    </Button>
                    <Button variant="contained" >
                        Применить изменения
                    </Button>
                </ButtonGroup>

            </FormControl>
        </div>

    );
})


export default EditForm;
