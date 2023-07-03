import React, { useEffect } from 'react';
import Wrapper from "../Components/Wrapper";
import {Avatar, Grid, IconButton, ListItem, ListItemAvatar, Typography} from "@mui/material";
import { observer } from "mobx-react-lite";
import { useContext } from 'react';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';
import {fetchRobots} from './../http/robotAPI'
import Alert from "@mui/material/Alert";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ErrorConnect = observer((props) => {
    const {robots, user} = useContext(Context)
    const navigate = useNavigate()
    useEffect(()=> {
        fetchRobots(user._user.id).then(data => robots.setRobots(data))

    }, [])
    return (
        <Wrapper>
            <Grid container spacing={2} style={{backgroundColor: 'white'}}>
                ErrorConnect
            </Grid>
        </Wrapper>
    );
})


export default ErrorConnect;
