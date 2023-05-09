import {
    AppBar, Avatar,
    Box,
    Button,
    Container, CssBaseline,
    Grid,
    IconButton,

    TextField,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Paper from '@material-ui/core/Paper';
import Copyright from "../Components/Copyright";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {LockOutlined} from "@material-ui/icons";
import {makeStyles} from "@mui/styles";
import '../styles/index.css'
import { redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(images/background.png)',
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

function Login() {
    const classes = useStyles();
    let navigate = useNavigate();
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
                        <form className={classes.form} noValidate
                              onSubmit={(e)=> {
                            e.preventDefault()
                            navigate('/')
                        }}
                        >
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
                                    <Link href="/signin" variant="body2" className={'login__link'}>
                                        "Нет учетной записи? Регистрация"
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

export default Login;
