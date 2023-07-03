import React, { useEffect } from 'react';
import Wrapper from "../Components/Wrapper";
import {Avatar, Grid, IconButton, ListItem, ListItemAvatar, Typography} from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import BallotIcon from '@mui/icons-material/Ballot';
import { observer } from "mobx-react-lite";
import { useContext } from 'react';
import { Context } from '..';
import { useNavigate, useParams } from 'react-router-dom';
import {fetchRobots} from './../http/robotAPI'
import EditIcon from '@mui/icons-material/Edit';
import Alert from "@mui/material/Alert";
import AdbIcon from '@mui/icons-material/Adb';

const Customization = observer((props) => {
    const {robots, user} = useContext(Context)
    const navigate = useNavigate()

    const params = useParams()

    console.log(params)
    return (
        <Wrapper>
            <Grid container spacing={2} style={{backgroundColor: 'white'}}>
                <Grid item xs={12} md={6}>
                    Страница кастомизации
                </Grid>
            </Grid>
        </Wrapper>
    );
})


export default Customization;
