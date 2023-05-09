import * as React from 'react';
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
const lightColor = 'rgba(255, 255, 255, 0.7)';




function Header({value, setValue}) {

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
                                    <NotificationsIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit" sx={{ p: 0.5 }}>
                                <Box style={{backgroundColor: "#bdbdbd", height: "32px", width: "32px", color: "white", borderRadius: "50%"}}>
                                    s
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
}

export default Header;
