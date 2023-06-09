import {Context} from './../index.js'
import React, { useContext, useEffect }from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import {Box} from "@mui/material";
import { observer } from 'mobx-react-lite';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Badge from '@mui/material/Badge';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const Header = observer(({value, setValue}) => {
    const {user} = useContext(Context)
    let userName =  'd'
    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"

                                edge="start"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs />
                        <Grid item>
                            <Link
                                href="/profile"
                                variant="body2"
                                sx={{
                                    textDecoration: 'none',
                                    color: lightColor,
                                    '&:hover': {
                                        color: 'common.white',
                                    },
                                }}
                                rel="noopener noreferrer"
                            >
                                Мой профиль
                            </Link>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Alerts • No alerts">
                                <IconButton color="inherit">
                                    <Badge badgeContent={1} color="secondary">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit" sx={{ p: 0.5 }}>
                                <Box style={{backgroundColor: "#14365f", height: "32px", width: "32px", color: "white", borderRadius: "50%", position: "relative"}}>
                                    {userName}
                                    {!user._user.isPremium ||  <WorkspacePremiumIcon  style={{fill: "gold", position: 'absolute', left: '-30%', top: '-25%'}} title={'premium'} /> }
                                </Box>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>

            </AppBar>
            <AppBar
                component="div"
                color="primary"
                position="static"
                elevation={0}
                sx={{ zIndex: 0 }}
            >
            </AppBar>
            {window.location.pathname !== '/' ? null : (
                <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
                    <Tabs value={value} textColor="inherit">
                        <Tab label="Отзывы" onClick={()=>{setValue(0)}} />
                        <Tab label="Роботы" onClick={()=>{setValue(1)}}/>
                    </Tabs>
                </AppBar>
            )}


        </React.Fragment>
    );
})


export default Header;
