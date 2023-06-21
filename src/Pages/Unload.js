import * as React from 'react';
import Wrapper from "../Components/Wrapper";
import {Grid, Typography, Button, Box, FormControl, InputLabel, NativeSelect, ListItem} from "@mui/material";
import List from "@mui/material/List";
import {observer} from "mobx-react-lite"
import DownloadIcon from '@mui/icons-material/Download';
import { JsonToExcel } from "react-json-to-excel";
import { Context } from './..';
import { fetchReview } from '../http/reviewAPI';
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Alert from '@mui/material/Alert';

const Unload = observer(() => {
    const [dense] = React.useState(false);
    const {user} = React.useContext(Context)
    const [datas, setDatas] = React.useState({})
    React.useEffect(()=> {
        fetchReview(user._user.id).then(data => setDatas(data))
    }, [])

    return (
        <Wrapper>
            <Grid container spacing={2} style={{backgroundColor: 'white'}}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Выгрузка данных
                    </Typography>
                    {user._user.isPremium || <Alert severity="warning">Для сортировки данных, требуется подписка!</Alert>}
                    <FormControl fullWidth style={{marginBottom: '36px'}}>
                        <List>
                            <ListItem>
                                <InputLabel variant="standard" htmlFor="period">
                                    Период
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={0}
                                    inputProps={{
                                        name: 'period',
                                        id: 'period',
                                    }}
                                >
                                    <option value={7} disabled={!user._user.isPremium}>1 Неделя</option>
                                    <option value={14} disabled={!user._user.isPremium}>2 Недели</option>
                                    <option value={21} disabled={!user._user.isPremium}>3 Недели</option>
                                    <option value={30} disabled={!user._user.isPremium}>1 Месяц</option>
                                    <option value={60} disabled={!user._user.isPremium}>2 Месяца</option>
                                    <option value={90} disabled={!user._user.isPremium}>3 Месяца</option>
                                    <option value={182} disabled={!user._user.isPremium}>Полгода</option>
                                    <option value={0} style={{position: 'relative'}}>За всё время</option>
                                </NativeSelect>
                            </ListItem>
                            <ListItem>
                                <InputLabel variant="standard" htmlFor="robot">
                                    Робот
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={0}
                                    inputProps={{
                                        name: 'robot',
                                        id: 'robot',
                                    }}

                                >
                                    <option value={1} disabled={!user._user.isPremium}>1 робот</option>
                                    <option value={2} disabled={!user._user.isPremium}>2 робот</option>
                                    <option value={3} disabled={!user._user.isPremium}>3 робот</option>
                                    <option value={0} >Все роботы</option>
                                </NativeSelect>
                            </ListItem>
                        </List>






                    </FormControl>

                        <List dense={dense}>
                            <JsonToExcel
                                title={<Typography   style={{cursor: 'pointer'}}>Скачать как Excel</Typography>}
                                data={datas}
                                fileName="data"
                            />
                        </List>
                </Grid>
            </Grid>
        </Wrapper>

    );
})


export default Unload;
