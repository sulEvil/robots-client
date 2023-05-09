import React from 'react';
import {Avatar, Box, Button, CssBaseline, Grid, TextField, Typography} from "@mui/material";
import Paper from "@material-ui/core/Paper";
import {LockOutlined} from "@material-ui/icons";
import {Link} from "react-router-dom";
import Copyright from "../Components/Copyright";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },  paper: {
        margin: '32px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: '4px',

    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: '4px',
    },
    submit: {
        margin: '12px 0 8px',
    },
}));
function SignIn(props) {
    const classes = useStyles();

    return (
        <div className="Login">
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlined />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Заходите на сайт, всегда Вам рады!
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Электронная почта"
                                name="email"
                                autoComplete="email"
                                autoFocus


                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                                autoComplete="current-password"

                            />
                            <Box mt={2} mb={4}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Войти
                                </Button>
                            </Box>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2" className={'login__link'}>
                                        Забыли пароль?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2" className={'login__link'}>
                                        "Есть учетная запись? Авторизуйтесь!"
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default SignIn;
