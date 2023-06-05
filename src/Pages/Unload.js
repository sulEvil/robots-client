import * as React from 'react';
import Wrapper from "../Components/Wrapper";
import {Grid, Typography, Button} from "@mui/material";
import List from "@mui/material/List";
import {observer} from "mobx-react-lite"
import DownloadIcon from '@mui/icons-material/Download';
import { JsonToExcel } from "react-json-to-excel";
import { Context } from './..';
import { fetchReview } from '../http/reviewAPI';

const Unload = observer(() => {
    const [dense] = React.useState(false);
    const {user, reviews} = React.useContext(Context)
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
                        <List dense={dense}>
                        <Button variant="outlined" startIcon={<DownloadIcon />}>
                            Выгрузить данные
                        </Button>
                        <JsonToExcel
                            title="Download as Excel"
                            data={datas}
                            fileName="sample-file"
                        />
                        </List>
                </Grid>
            </Grid>
        </Wrapper>

    );
})


export default Unload;
