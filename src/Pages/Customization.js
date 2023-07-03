import React, { useEffect, useState } from 'react';
import Wrapper from "../Components/Wrapper";
import {Grid, Button, Box, TextField, FormHelperText, ButtonGroup, FormControl, Typography, Input} from "@mui/material";
import { observer } from "mobx-react-lite";
import { useContext } from 'react';
import { Context } from '..';
import { useNavigate, useParams } from 'react-router-dom';

const Customization = observer((props) => {
    const {robots, user} = useContext(Context)
    const navigate = useNavigate()
    const params = useParams()
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    console.log(params)
    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    return (
        <Wrapper>
            <Grid container spacing={2} style={{backgroundColor: 'white'}}>
                <Grid item xs={12} md={8} style={{paddingBottom: '32px'}}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom: '16px'}}>
                        Кастомизация робота
                    </Typography>
                    <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: "100%", padding: '0 16px'}}>
                        <Typography  variant="subtitle1" component="h2" style={{marginBottom: '16px'}}>
                            Изменить логотип
                        </Typography>
                        <FormControl style={{width: '100%'}}>
                            <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <input
                                    accept="image/*"
                                    type="file"
                                    id="select-image"
                                    style={{ display: "none" }}
                                    onChange={(e) => setSelectedImage(e.target.files[0])}
                                />
                                <label htmlFor="select-image" style={{marginRight: '16px'}}>
                                    <Button variant="contained" color="primary" component="span">
                                        Загрузить логотип
                                    </Button>
                                </label>
                                {imageUrl && selectedImage && (
                                    <Box mt={2} textAlign="center">
                                        <div>Предосмотр:</div>
                                        <img src={imageUrl} alt={selectedImage.name} height="100px" />
                                    </Box>
                                )}
                                {!imageUrl && !selectedImage && (
                                    <Box mt={2} textAlign="center">
                                        <div>Здесь будет предосмотр картинки</div>

                                    </Box>
                                )}
                            </Box>
                            <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '32px 0'}}>
                                <label htmlFor={'select-color'}>
                                    <Button variant="contained" disableElevation>
                                        Изменить цветовую гамму
                                    </Button>
                                </label>
                                {/*value={'#ffffff'}*/}
                                <input  id={'select-color'} type={'color'} style={{height: '100px', width: '100px', border: 'none', padding: '0'}}/>
                            </Box>
                            {/*<Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '32px 0'}}>*/}
                            {/*    <Typography  variant="subtitle1" component="h2" style={{marginBottom: '16px'}}>*/}
                            {/*        Предосмотр*/}
                            {/*    </Typography>*/}
                            {/*</Box>*/}
                            <ButtonGroup style={{justifyContent: 'space-between', marginTop: '36px'}}
                            >
                                <Button variant="contained" color="error">
                                    Отменить
                                </Button>
                                <Button variant="contained" >
                                    Применить изменения
                                </Button>
                            </ButtonGroup>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </Wrapper>
    );
})


export default Customization;
