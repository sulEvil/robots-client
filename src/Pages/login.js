import {
     Avatar,
    Box,
    Button,
    CssBaseline,
    Grid,
    TextField,

    Typography
} from "@mui/material";
import { Context } from "..";
import Paper from '@material-ui/core/Paper';
import Copyright from "../Components/Copyright";
import {Link, useNavigate} from "react-router-dom";
import {LockOutlined} from "@material-ui/icons";
import {makeStyles} from "@mui/styles";
import '../styles/index.css'
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import {registration, login} from './../http/userAPI'


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

const Login = observer(() => {
    const classes = useStyles()
    let navigate = useNavigate()
    let [loggin, setLoggin] = useState(true)
    const {user} = useContext(Context)
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try{
            let data;
            if(loggin){
                data = await login(number, password)
                console.log('loggin')
            } else {
                data = await registration(number, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate('/')
        } catch(e) {
            alert(e.response.data.message)
        }

        
        
    }



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
                        {loggin ? <form className={classes.form} noValidate
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
                                id="number"
                                label="Номер телефона"
                                name="number"
                                autoComplete="number"
                                autoFocus
                                value={number}
                                type="number"
                                onChange={e=>setNumber(e.target.value)}

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
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                            />
                            <Box mt={2} mb={4}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={(e) => {user.setIsAuth(true)}}
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
                                    <Link onClick={(e) => {setLoggin(false)}} variant="body2" className={'login__link'}>
                                        "Нет учетной записи? Регистрация"
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form> : 
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
                            id="number"
                            type="number"
                            label="Номер телефона"
                            name="number"
                            autoComplete="number"
                            autoFocus
                            value={number}
                            onChange={e=>setNumber(e.target.value)}

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
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                      />
                      <Box mt={2} mb={4}>
                          <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              className={classes.submit}
                              onClick={(e) => {click()}}
                          >
                              Зарегистрироваться
                          </Button>
                      </Box>
                      <Grid container>
                          <Grid item xs>
                              <Link href="#" variant="body2" className={'login__link'}>
                                  Забыли пароль?
                              </Link>
                          </Grid>
                          <Grid item>
                              <Link onClick={(e) => {setLoggin(true)}} variant="body2" className={'login__link'}>
                                  "Есть учетная запись? Войти"
                              </Link>
                          </Grid>
                      </Grid>
                      <Box mt={5}>
                          <Copyright />
                      </Box>
                  </form>
                        
                        }
                        
                    </div>
                </Grid>
            </Grid>
        </div>
    );
})


export default Login;
