import React from 'react';
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

function Copyright(props) {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {' © '}
            <a color="inherit" href="https://vk.com/xax42" target={'_blank'} className={'link'}>
                Разработчик - Султан Галимов
            </a>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;
